import { useEffect, useState } from "react";
import heroImg from "./assets/hero.png";
import { defaultLocale, getTranslation, isSupportedLocale, localeOptions } from "./i18n";
import "./App.css";
import logo from "./assets/loaaa.png";


const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const GOOGLE_PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;
const MUNTRA_WIDGET_SCRIPT_URL = import.meta.env.VITE_MUNTRA_WIDGET_SCRIPT_URL;
const MUNTRA_CLINIC_ID = "6301";
const MUNTRA_REFERRAL_SOURCE = "tuvetandvard.se";
const MUNTRA_WIDGET_ATTRIBUTES = {
  muntra_clinic_id: MUNTRA_CLINIC_ID,
  muntra_referral_source: MUNTRA_REFERRAL_SOURCE,
};
const mapsPromiseKey = "__tuveGoogleMapsPromise__";
const muntraPromiseKey = "__tuveMuntraWidgetPromise__";
const localeStorageKey = "tuve-preferred-locale";

const googleReviewsUrl =
  "https://www.google.com/search?client=firefox-b-d&hs=Me0U&sca_esv=a8881eab68290456&cs=1&sxsrf=ANbL-n78EiqbAZ0xwPs_fHSjnQhrjiDagw:1775732008934&q=Tuve+Tandv%C3%A5rd+-+Tandl%C3%A4kare+G%C3%B6teborg+Recensioner&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLMwMTA0NTO2MDU2sjQ3MTczMNjAyPiK0SiktCxVISQxL6Xs8NKiFAVdMDvn8JLsxKJUBffD20pSk_KL0hWCUpNT84oz8_NSixaxkqEJALZc4eCFAAAA&rldimm=16840156385329747600&tbm=lcl&hl=sv-SE&sa=X&ved=2ahUKEwj7z-2czeCTAxWdhP0HHQotErsQ9fQKegQIFRAG&biw=2091&bih=1106&dpr=1.2#lkt=LocalPoiReviews";
const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Gunnestorpsv%C3%A4gen+109,+G%C3%B6teborg";
const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=Gunnestorpsv%C3%A4gen+109,+G%C3%B6teborg&output=embed";

function getInitialLocale() {
  if (globalThis.window === undefined) {
    return defaultLocale;
  }

  const savedLocale = globalThis.localStorage.getItem(localeStorageKey);

  if (savedLocale && isSupportedLocale(savedLocale)) {
    return savedLocale;
  }

  const browserLocale = globalThis.navigator.language?.split("-")[0]?.toLowerCase();
  return isSupportedLocale(browserLocale) ? browserLocale : defaultLocale;
}

function loadMuntraWidgetScript(scriptUrl) {
  if (globalThis.window === undefined || !scriptUrl) {
    return Promise.resolve(false);
  }

  if (globalThis[muntraPromiseKey]) {
    return globalThis[muntraPromiseKey];
  }

  globalThis[muntraPromiseKey] = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-muntra-widget="tuve"]');

    if (existingScript) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.defer = true;
    script.dataset.muntraWidget = "tuve";
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error("Could not load Muntra widget."));
    document.head.appendChild(script);
  });

  return globalThis[muntraPromiseKey];
}

function refreshMuntraWidget() {
  const initializers = [
    globalThis.MuntraWidget?.init,
    globalThis.MuntraWidget?.load,
    globalThis.MuntraWidget?.render,
    globalThis.muntraWidget?.init,
    globalThis.muntraWidget?.load,
    globalThis.muntra?.init,
  ];

  for (const initializer of initializers) {
    if (typeof initializer === "function") {
      initializer();
      return;
    }
  }
}

function loadGoogleMapsPlacesApi(apiKey) {
  if (globalThis.window === undefined) {
    return Promise.reject(new Error("Browser environment is unavailable."));
  }

  if (globalThis.google?.maps?.places) {
    return Promise.resolve(globalThis.google.maps);
  }

  if (globalThis[mapsPromiseKey]) {
    return globalThis[mapsPromiseKey];
  }

  globalThis[mapsPromiseKey] = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[data-google-maps="tuve-reviews"]',
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(globalThis.google.maps), {
        once: true,
      });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Could not load Google Maps API.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&v=weekly`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = "tuve-reviews";
    script.onload = () => {
      if (globalThis.google?.maps) {
        resolve(globalThis.google.maps);
        return;
      }

      reject(new Error("Google Maps API loaded without the Places library."));
    };
    script.onerror = () => reject(new Error("Could not load Google Maps API."));
    document.head.appendChild(script);
  });

  return globalThis[mapsPromiseKey];
}

function formatStars(rating = 0) {
  const rounded = Math.max(0, Math.min(5, Math.round(rating)));
  return `${"★".repeat(rounded)}${"☆".repeat(5 - rounded)}`;
}

function GoogleReviewsPanel({ content }) {
  const [reviewState, setReviewState] = useState({
    status: GOOGLE_MAPS_API_KEY && GOOGLE_PLACE_ID ? "loading" : "fallback",
    rating: null,
    total: 0,
    reviews: [],
    placeUrl: googleReviewsUrl,
  });

  useEffect(() => {
    let ignore = false;

    if (!GOOGLE_MAPS_API_KEY || !GOOGLE_PLACE_ID) {
      return undefined;
    }

    loadGoogleMapsPlacesApi(GOOGLE_MAPS_API_KEY)
      .then((maps) => {
        const service = new maps.places.PlacesService(document.createElement("div"));

        service.getDetails(
          {
            placeId: GOOGLE_PLACE_ID,
            fields: ["name", "rating", "reviews", "user_ratings_total", "url"],
          },
          (place, status) => {
            if (ignore) {
              return;
            }

            if (status !== maps.places.PlacesServiceStatus.OK || !place) {
              setReviewState((current) => ({ ...current, status: "error" }));
              return;
            }

            setReviewState({
              status: "success",
              rating: place.rating ?? null,
              total: place.user_ratings_total ?? 0,
              reviews: (place.reviews ?? []).slice(0, 3),
              placeUrl: place.url || googleReviewsUrl,
            });
          },
        );
      })
      .catch(() => {
        if (!ignore) {
          setReviewState((current) => ({ ...current, status: "error" }));
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  const reviewLink = reviewState.placeUrl || googleReviewsUrl;

  if (reviewState.status === "success") {
    return (
      <div className="review-panel">
        <div className="review-summary">
          <div>
            <span className="status-pill">{content.about.reviewLiveLabel}</span>
            <h3>{content.about.reviewTitle}</h3>
            <p>{content.about.reviewBody}</p>
          </div>

          <div className="rating-badge" aria-label={content.about.ratingLabel}>
            <strong>{reviewState.rating?.toFixed(1) ?? "-"}/5</strong>
            <span>{formatStars(reviewState.rating ?? 0)}</span>
            <small>
              {reviewState.total} {content.about.reviewCountLabel}
            </small>
          </div>
        </div>

        <div className="review-list">
          {reviewState.reviews.map((review, index) => (
            <article
              key={`${review.author_name ?? "review"}-${review.time ?? index}`}
              className="review-card"
            >
              <h4>{review.author_name || content.about.reviewUserFallback}</h4>
              <p className="review-meta">
                {formatStars(review.rating ?? 0)} · {review.relative_time_description || content.about.reviewRecentFallback}
              </p>
              <p>{review.text || content.about.reviewTextFallback}</p>
            </article>
          ))}
        </div>

        <a className="button button-secondary" href={reviewLink} target="_blank" rel="noreferrer">
          {content.about.reviewCta}
        </a>
      </div>
    );
  }

  const message =
    reviewState.status === "loading"
      ? content.about.reviewLoading
      : reviewState.status === "error"
        ? content.about.reviewError
        : content.about.reviewFallback;

  return (
    <div className="highlight-box review-state">
      <div>
        <h3>{content.about.reviewTitle}</h3>
        <p>{message}</p>
      </div>
      <a
        className="button button-secondary"
        href={googleReviewsUrl}
        target="_blank"
        rel="noreferrer"
      >
        {content.about.reviewCta}
      </a>
    </div>
  );
}

function MuntraBookingPanel({ content }) {
  useEffect(() => {
    loadMuntraWidgetScript(MUNTRA_WIDGET_SCRIPT_URL)
      .then(() => {
        refreshMuntraWidget();
      })
      .catch(() => {
        // Keep the fallback call-to-action visible if the widget is unavailable.
      });
  }, []);

  return (
    <section id="boka-tid" className="card section-stack">
      <p className="eyebrow">{content.booking.eyebrow}</p>
      <h2>{content.booking.title}</h2>
      <p>{content.booking.body}</p>

      <div className="muntra-shell">
        <div
          className="muntra-widget primary"
          {...MUNTRA_WIDGET_ATTRIBUTES}
        />
      </div>

      <div className="highlight-box booking-helper">
        <div>
          <h3>{content.booking.helpTitle}</h3>
          <p>{content.booking.helpBody}</p>
        </div>
        <a
          className="button button-secondary"
          href={`tel:${content.phone.replaceAll(" ", "")}`}
        >
          {content.booking.fallbackCta}
        </a>
      </div>
    </section>
  );
}

function handleContactSubmit(event, content) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const getFieldValue = (fieldName) => {
    const value = formData.get(fieldName);
    return typeof value === "string" ? value.trim() : "";
  };

  const name = getFieldValue("name");
  const phone = getFieldValue("phone");
  const email = getFieldValue("email");
  const message = getFieldValue("message");

  const subject = encodeURIComponent(
    `${content.contact.mailSubjectPrefix} ${name || content.brand}`,
  );
  const body = encodeURIComponent(
    [
      `${content.contact.fields.name}: ${name}`,
      `${content.contact.fields.phone}: ${phone}`,
      `${content.contact.fields.email}: ${email}`,
      "",
      `${content.contact.fields.message}:`,
      message,
    ].join("\n"),
  );

  globalThis.location.href = `mailto:${content.email}?subject=${subject}&body=${body}`;
}

function App() {
  const [locale, setLocale] = useState(getInitialLocale);
  const content = getTranslation(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = content.direction;
    document.title = content.brand;
    globalThis.localStorage.setItem(localeStorageKey, locale);
  }, [content.brand, content.direction, locale]);

  return (
    <div className="site-shell" dir={content.direction}>
      <header className="topbar">
        <a className="brand" href="#startsida">
          <img className="logo" src={logo} alt={content.brand}></img>
        </a>

        <nav className="nav" aria-label={content.ui.navigationLabel}>
          {content.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <label className="language-switcher">
            <span>{content.ui.languageLabel}</span>
            <select
              className="language-select"
              aria-label={content.ui.languageSelectAria}
              value={locale}
              onChange={(event) => setLocale(event.target.value)}
            >
              {localeOptions.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <a
            className="button topbar-cta"
            href="tel:0707554448"
            aria-label={`${content.hero.secondaryCta}: ${content.phone}`}
          >
            {content.phone}
          </a>
        </div>
      </header>

      <main className="page">
        <section id="startsida" className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.heading}</h1>
            <p className="lead">{content.hero.intro}</p>
            <p className="body-copy">{content.hero.extra}</p>
            <p className="language-badge">{content.hero.languages}</p>

            <div className="hero-actions">
              <a className="button" href="#om-oss">
                {content.hero.primaryCta}
              </a>
              <a className="button button-secondary" href="tel:0707554448">
                {content.hero.secondaryCta}
              </a>
            </div>
          </div>

          <img className="hero-image" src={heroImg} alt={content.hero.imageAlt} />
        </section>

        <MuntraBookingPanel content={content} />

        <section id="om-oss" className="card section-stack">
          <p className="eyebrow">{content.about.eyebrow}</p>
          <h2>{content.about.title}</h2>
          <p>{content.about.body}</p>
          <GoogleReviewsPanel content={content} />
        </section>

        <section className="card section-stack">
          <p className="eyebrow">{content.services.eyebrow}</p>
          <h2>{content.services.title}</h2>
          <p>{content.services.intro}</p>

          <div className="services-grid">
            {content.services.items.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="info-grid">
          <article className="card section-stack">
            <p className="eyebrow">{content.specialist.eyebrow}</p>
            <h2>{content.specialist.title}</h2>
            <ul className="check-list">
              {content.specialist.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card section-stack">
            <p className="eyebrow">{content.location.eyebrow}</p>
            <h2>{content.location.title}</h2>
            <p>{content.location.city}</p>
            <div className="review-actions">
              <a
                className="button"
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                {content.location.openMaps}
              </a>
              <a className="button button-secondary" href={`mailto:${content.email}`}>
                {content.email}
              </a>
            </div>
            <iframe
              className="map-frame"
              title={content.location.mapTitle}
              src={googleMapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </article>
        </section>

        <section id="kontakta-oss" className="contact-grid">
          <article className="card section-stack">
            <p className="eyebrow">{content.contact.eyebrow}</p>
            <h2>{content.contact.title}</h2>
            <p className="contact-note">{content.contact.note}</p>

            <form className="contact-form" onSubmit={(event) => handleContactSubmit(event, content)}>
              <label>
                <span>{content.contact.fields.name}</span>
                <input name="name" type="text" required />
              </label>

              <label>
                <span>{content.contact.fields.phone}</span>
                <input name="phone" type="tel" required />
              </label>

              <label>
                <span>{content.contact.fields.email}</span>
                <input name="email" type="email" required />
              </label>

              <label>
                <span>{content.contact.fields.message}</span>
                <textarea name="message" rows="5" required />
              </label>

              <button className="button" type="submit">
                {content.contact.fields.submit}
              </button>
            </form>
          </article>

          <article className="card section-stack">
            <p className="eyebrow">{content.location.visitEyebrow}</p>
            <h2>{content.contact.addressTitle}</h2>

            <div>
              {content.contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="footer-columns">
              <div>
                <h3>{content.contact.linksTitle}</h3>
                <ul className="mini-links">
                  {content.nav.map((item) => (
                    <li key={item.href}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3>{content.contact.detailsTitle}</h3>
                <ul className="mini-links">
                  {content.contact.details.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>
                        {item.label}: {item.value}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href={content.contact.socialHref} target="_blank" rel="noreferrer">
                      {content.contact.socialLabel}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
