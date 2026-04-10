const baseContent = {
    brand: "Tuve Tandvård",
    phone: "0707 55 44 48",
    email: "info@tuvetandvard.se",
};

const translations = {
    sv: {
        ...baseContent,
        languageName: "Svenska",
        direction: "ltr",
        ui: {
            languageLabel: "Språk",
            languageSelectAria: "Välj språk",
            navigationLabel: "Huvudnavigering",
        },
        nav: [
            { label: "Startsida", href: "#startsida" },
            { label: "Boka tid", href: "#boka-tid" },
            { label: "Om oss", href: "#om-oss" },
            { label: "Kontakta oss", href: "#kontakta-oss" },
        ],
        hero: {
            eyebrow: "Din lokala tandläkare i Göteborg",
            heading: "Varmt välkommen till oss på Tuve Tandvård",
            intro:
                "Vi erbjuder kvalitativ tandvård inom allt från undersökning och tandlagning till oral kirurgi och implantat.",
            extra:
                "Vi är även nischade på estetisk tandvård och skönhetsinjektioner med fillers och botulinumtoxin typ A.",
            languages:
                "Vi talar även flytande Svenska, Turkiska, Kurdiska, Arabiska och Litauiska för er som önskar detta.",
            primaryCta: "Läs mer om oss",
            secondaryCta: "Ring oss",
            imageAlt: "Tuve Tandvård klinikbild",
        },
        about: {
            eyebrow: "Om oss",
            title: "Din lokala och professionella tandklinik i hjärtat av Göteborg",
            body:
                "Hos oss möts du av trygg, personlig och modern tandvård med fokus på kvalitet, bemötande och långsiktiga resultat.",
            reviewTitle: "Google-recensioner",
            reviewBody: "Se vad patienter tycker om Tuve Tandvård direkt från Google.",
            reviewLoading: "Hämtar de senaste recensionerna från Google…",
            reviewFallback:
                "Live-recensioner kan visas här när Google Places API är aktiverat. Tills dess kan besökare läsa alla omdömen direkt på Google.",
            reviewError: "Det gick inte att hämta recensionerna just nu.",
            reviewCta: "Visa alla recensioner",
            reviewLiveLabel: "Live från Google",
            ratingLabel: "Google-betyg",
            reviewCountLabel: "recensioner",
            reviewUserFallback: "Google-användare",
            reviewRecentFallback: "Nyligen",
            reviewTextFallback: "Recensionstext saknas.",
        },
        booking: {
            eyebrow: "Boka tid",
            title: "Boka ditt besök online med Muntra",
            body: "Vår digitala bokning gör det enklare att hitta en tid som passar dig – direkt här på sidan.",
            liveLabel: "Onlinebokning via Muntra",
            calendarTitle: "Välj en tid som passar dig",
            calendarIntro: "Se tillgängliga tider och bekräfta din bokning tryggt i kalendern nedan.",
            loading: "Vi laddar bokningskalendern nu…",
            fallback: "Kalendern är tillfälligt inte tillgänglig här, men vi hjälper dig gärna via telefon.",
            benefits: [
                "Se lediga tider dygnet runt",
                "Boka på mobil, surfplatta eller dator",
                "Få snabb bekräftelse direkt online",
            ],
            helpTitle: "Behöver du hjälp med bokningen?",
            helpBody:
                "Om bokningskalendern inte visas just nu går det bra att ringa kliniken så hjälper vi dig direkt.",
            fallbackCta: "Ring kliniken",
        },
        services: {
            eyebrow: "Våra tjänster",
            title: "Vi erbjuder en mängd olika tjänster för våra kunder",
            intro: "Se nedan vad vi kan hjälpa dig med.",
            items: [
                {
                    title: "Allmäntandvård",
                    description:
                        "N-, S- samt F-tandvård. Vi erbjuder även kostnadsfri barn- och ungdomstandvård.",
                },
                {
                    title: "Botox och fillers",
                    description:
                        "Marknadens bästa priser utfört av legitimerad tandläkare.",
                },
                {
                    title: "Oral kirurgi och implantat",
                    description: "Precision och skicklighet i implantatkirurgi.",
                },
                {
                    title: "Estetisk och kosmetisk tandvård",
                    description: "Drömmer du om ett Hollywood Smile? Vi löser det!",
                },
            ],
        },
        specialist: {
            eyebrow: "Anpassad vård",
            title: "Specialisttandvård anpassat efter dina behov",
            items: [
                "Abonnemangstandvård – fri tandvård till en låg månadskostnad.",
                "Allt ingår kostnadsfritt förutom specialisttandvård och omfattande protetik och estetik.",
                "Akut tandvård och jourtandvård.",
                "Vi erbjuder långa garantier på lagningar och protetiska behandlingar.",
            ],
        },
        location: {
            eyebrow: "Hitta hit",
            title: "Gunnestorpsvägen 109",
            city: "417 47 Göteborg",
            openMaps: "Öppna i Google Maps",
            mapTitle: "Tuve Tandvård karta",
            visitEyebrow: "Besök oss",
        },
        contact: {
            eyebrow: "Kontakta oss",
            title: "Hör av dig till oss",
            note: "(OBS: Gäller ej bokningar)",
            fields: {
                name: "Ditt namn",
                phone: "Telefon",
                email: "E-post",
                message: "Meddelande",
                submit: "Skicka meddelande",
            },
            mailSubjectPrefix: "Kontakt via hemsidan från",
            detailsTitle: "Kontaktuppgifter",
            details: [
                {
                    label: "E-post",
                    value: "info@tuvetandvard.se",
                    href: "mailto:info@tuvetandvard.se",
                },
                { label: "Telefon", value: "0707 55 44 48", href: "tel:0707554448" },
            ],
            addressTitle: "Din lokala och professionella tandklinik i hjärtat av Göteborg.",
            addressLines: ["Gunnestorpsvägen 109", "417 47 Göteborg"],
            socialLabel: "Instagram",
            socialHref: "https://www.instagram.com/",
            linksTitle: "Länkar",
        },
    },
    en: {
        ...baseContent,
        languageName: "English",
        direction: "ltr",
        ui: {
            languageLabel: "Language",
            languageSelectAria: "Choose language",
            navigationLabel: "Main navigation",
        },
        nav: [
            { label: "Home", href: "#startsida" },
            { label: "Book online", href: "#boka-tid" },
            { label: "About us", href: "#om-oss" },
            { label: "Contact us", href: "#kontakta-oss" },
        ],
        hero: {
            eyebrow: "Your local dentist in Gothenburg",
            heading: "A warm welcome to Tuve Tandvård",
            intro:
                "We provide high-quality dental care ranging from examinations and fillings to oral surgery and implants.",
            extra:
                "We also specialize in aesthetic dentistry and beauty injections with fillers and botulinum toxin type A.",
            languages:
                "We also speak fluent Swedish, Turkish, Kurdish, Arabic and Lithuanian if you prefer.",
            primaryCta: "Learn more about us",
            secondaryCta: "Call us",
            imageAlt: "Photo of the Tuve Tandvård clinic",
        },
        about: {
            eyebrow: "About us",
            title: "Your local and professional dental clinic in the heart of Gothenburg",
            body:
                "With us, you will be met by safe, personal and modern dental care focused on quality, service and long-term results.",
            reviewTitle: "Google reviews",
            reviewBody: "See what patients think about Tuve Tandvård directly on Google.",
            reviewLoading: "Loading the latest Google reviews…",
            reviewFallback:
                "Live reviews can appear here when the Google Places API is enabled. Until then, visitors can read all reviews directly on Google.",
            reviewError: "We could not load the reviews right now.",
            reviewCta: "View all reviews",
            reviewLiveLabel: "Live from Google",
            ratingLabel: "Google rating",
            reviewCountLabel: "reviews",
            reviewUserFallback: "Google user",
            reviewRecentFallback: "Recently",
            reviewTextFallback: "Review text is unavailable.",
        },
        booking: {
            eyebrow: "Book online",
            title: "Book your visit online with Muntra",
            body: "Our digital booking flow makes it easier to find a time that works for you, right here on the page.",
            liveLabel: "Online booking with Muntra",
            calendarTitle: "Choose a time that suits you",
            calendarIntro: "View available slots and confirm your appointment securely in the calendar below.",
            loading: "We are loading the booking calendar now…",
            fallback: "The booking calendar is temporarily unavailable here, but you can still call us for quick help.",
            benefits: [
                "See available times around the clock",
                "Book on mobile, tablet or desktop",
                "Get a quick confirmation online",
            ],
            helpTitle: "Need help with your booking?",
            helpBody:
                "If the booking calendar is not visible right now, please call the clinic and we will help you directly.",
            fallbackCta: "Call the clinic",
        },
        services: {
            eyebrow: "Our services",
            title: "We offer a wide range of services for our patients",
            intro: "See below how we can help you.",
            items: [
                {
                    title: "General dentistry",
                    description:
                        "N, S and F dental care. We also offer free dental care for children and young people.",
                },
                {
                    title: "Botox and fillers",
                    description: "Top market prices performed by a licensed dentist.",
                },
                {
                    title: "Oral surgery and implants",
                    description: "Precision and expertise in implant surgery.",
                },
                {
                    title: "Aesthetic and cosmetic dentistry",
                    description: "Dreaming of a Hollywood Smile? We can help!",
                },
            ],
        },
        specialist: {
            eyebrow: "Tailored care",
            title: "Specialist dental care adapted to your needs",
            items: [
                "Dental subscription care – affordable monthly preventive care.",
                "Everything is included free of charge except specialist care and extensive prosthetic and aesthetic treatment.",
                "Emergency dental care and after-hours appointments.",
                "We offer long guarantees on fillings and prosthetic treatments.",
            ],
        },
        location: {
            eyebrow: "Find us",
            title: "Gunnestorpsvägen 109",
            city: "417 47 Gothenburg",
            openMaps: "Open in Google Maps",
            mapTitle: "Map of Tuve Tandvård",
            visitEyebrow: "Visit us",
        },
        contact: {
            eyebrow: "Contact us",
            title: "Get in touch with us",
            note: "(Please note: not for bookings)",
            fields: {
                name: "Your name",
                phone: "Phone",
                email: "Email",
                message: "Message",
                submit: "Send message",
            },
            mailSubjectPrefix: "Website contact from",
            detailsTitle: "Contact details",
            details: [
                {
                    label: "Email",
                    value: "info@tuvetandvard.se",
                    href: "mailto:info@tuvetandvard.se",
                },
                { label: "Phone", value: "0707 55 44 48", href: "tel:0707554448" },
            ],
            addressTitle: "Your local and professional dental clinic in the heart of Gothenburg.",
            addressLines: ["Gunnestorpsvägen 109", "417 47 Gothenburg"],
            socialLabel: "Instagram",
            socialHref: "https://www.instagram.com/",
            linksTitle: "Links",
        },
    },
    tr: {
        ...baseContent,
        languageName: "Türkçe",
        direction: "ltr",
        ui: {
            languageLabel: "Dil",
            languageSelectAria: "Dil seçin",
            navigationLabel: "Ana gezinme",
        },
        nav: [
            { label: "Ana sayfa", href: "#startsida" },
            { label: "Randevu al", href: "#boka-tid" },
            { label: "Hakkımızda", href: "#om-oss" },
            { label: "Bize ulaşın", href: "#kontakta-oss" },
        ],
        hero: {
            eyebrow: "Göteborg'daki yerel diş hekiminiz",
            heading: "Tuve Tandvård'a hoş geldiniz",
            intro:
                "Muayene ve dolgu tedavisinden ağız cerrahisi ve implantlara kadar yüksek kaliteli diş bakımı sunuyoruz.",
            extra:
                "Ayrıca estetik diş hekimliği ile dolgu ve botulinum toksin tip A uygulamalarında uzmanız.",
            languages:
                "İsterseniz İsveççe, Türkçe, Kürtçe, Arapça ve Litvanca dillerinde de akıcı şekilde hizmet veriyoruz.",
            primaryCta: "Hakkımızda daha fazla bilgi",
            secondaryCta: "Bizi arayın",
            imageAlt: "Tuve Tandvård kliniğinin fotoğrafı",
        },
        about: {
            eyebrow: "Hakkımızda",
            title: "Göteborg'un kalbinde yer alan yerel ve profesyonel diş kliniğiniz",
            body:
                "Burada sizi kaliteye, samimi yaklaşıma ve uzun vadeli sonuçlara odaklanan güvenli, kişisel ve modern diş bakımı karşılar.",
            reviewTitle: "Google yorumları",
            reviewBody: "Hastaların Tuve Tandvård hakkında Google'da neler düşündüğünü görün.",
            reviewLoading: "En son Google yorumları yükleniyor…",
            reviewFallback:
                "Google Places API etkinleştirildiğinde canlı yorumlar burada görünebilir. O zamana kadar tüm yorumları doğrudan Google üzerinden okuyabilirsiniz.",
            reviewError: "Şu anda yorumlar alınamadı.",
            reviewCta: "Tüm yorumları görüntüle",
            reviewLiveLabel: "Google'dan canlı",
            ratingLabel: "Google puanı",
            reviewCountLabel: "yorum",
            reviewUserFallback: "Google kullanıcısı",
            reviewRecentFallback: "Yakın zamanda",
            reviewTextFallback: "Yorum metni bulunamadı.",
        },
        booking: {
            eyebrow: "Randevu al",
            title: "Muntra ile ziyaretinizi online planlayın",
            body: "Dijital rezervasyon akışımız size uygun bir zamanı doğrudan bu sayfada bulmanızı kolaylaştırır.",
            liveLabel: "Muntra ile online rezervasyon",
            calendarTitle: "Size uygun bir saat seçin",
            calendarIntro: "Aşağıdaki takvimde uygun saatleri görün ve randevunuzu güvenle onaylayın.",
            loading: "Rezervasyon takvimi şimdi yükleniyor…",
            fallback: "Takvim şu anda burada kullanılamıyor, ancak hızlı yardım için bizi yine de arayabilirsiniz.",
            benefits: [
                "Günün her saati müsait zamanları görün",
                "Telefon, tablet veya bilgisayardan rezervasyon yapın",
                "Online hızlı onay alın",
            ],
            helpTitle: "Randevu için yardıma mı ihtiyacınız var?",
            helpBody:
                "Randevu takvimi şu anda görünmüyorsa kliniği arayın, size memnuniyetle yardımcı olalım.",
            fallbackCta: "Kliniği ara",
        },
        services: {
            eyebrow: "Hizmetlerimiz",
            title: "Hastalarımız için geniş bir hizmet yelpazesi sunuyoruz",
            intro: "Size nasıl yardımcı olabileceğimizi aşağıda görebilirsiniz.",
            items: [
                {
                    title: "Genel diş bakımı",
                    description:
                        "N, S ve F diş bakımı. Ayrıca çocuklar ve gençler için ücretsiz diş bakımı sunuyoruz.",
                },
                {
                    title: "Botoks ve dolgu",
                    description: "Lisanslı diş hekimi tarafından uygulanan uygun fiyatlı tedaviler.",
                },
                {
                    title: "Ağız cerrahisi ve implantlar",
                    description: "İmplant cerrahisinde hassasiyet ve uzmanlık.",
                },
                {
                    title: "Estetik ve kozmetik diş hekimliği",
                    description: "Hollywood Smile mi hayal ediyorsunuz? Biz hallederiz!",
                },
            ],
        },
        specialist: {
            eyebrow: "Size özel bakım",
            title: "İhtiyaçlarınıza uyarlanmış uzman diş bakımı",
            items: [
                "Abonelikli diş bakımı – düşük aylık ücretle kapsamlı bakım.",
                "Uzman tedaviler ile kapsamlı protez ve estetik işlemler dışında her şey ücretsizdir.",
                "Acil diş bakımı ve nöbetçi diş hizmeti.",
                "Dolgu ve protetik tedavilerde uzun garanti sunuyoruz.",
            ],
        },
        location: {
            eyebrow: "Bizi bulun",
            title: "Gunnestorpsvägen 109",
            city: "417 47 Göteborg",
            openMaps: "Google Maps'te aç",
            mapTitle: "Tuve Tandvård haritası",
            visitEyebrow: "Bizi ziyaret edin",
        },
        contact: {
            eyebrow: "Bize ulaşın",
            title: "Bizimle iletişime geçin",
            note: "(Not: Randevu için geçerli değildir)",
            fields: {
                name: "Adınız",
                phone: "Telefon",
                email: "E-posta",
                message: "Mesaj",
                submit: "Mesaj gönder",
            },
            mailSubjectPrefix: "Web sitesi üzerinden iletişim",
            detailsTitle: "İletişim bilgileri",
            details: [
                {
                    label: "E-posta",
                    value: "info@tuvetandvard.se",
                    href: "mailto:info@tuvetandvard.se",
                },
                { label: "Telefon", value: "0707 55 44 48", href: "tel:0707554448" },
            ],
            addressTitle: "Göteborg'un kalbinde yer alan yerel ve profesyonel diş kliniğiniz.",
            addressLines: ["Gunnestorpsvägen 109", "417 47 Göteborg"],
            socialLabel: "Instagram",
            socialHref: "https://www.instagram.com/",
            linksTitle: "Bağlantılar",
        },
    },
    ku: {
        ...baseContent,
        languageName: "Kurdî",
        direction: "ltr",
        ui: {
            languageLabel: "Ziman",
            languageSelectAria: "Ziman hilbijêre",
            navigationLabel: "Navîgasyona sereke",
        },
        nav: [
            { label: "Destpêk", href: "#startsida" },
            { label: "Dem bistîne", href: "#boka-tid" },
            { label: "Derbarê me de", href: "#om-oss" },
            { label: "Bi me re têkilî daynin", href: "#kontakta-oss" },
        ],
        hero: {
            eyebrow: "Pizişka we ya diranan a herêmî li Göteborgê",
            heading: "Bi xêr hatin Tuve Tandvård",
            intro:
                "Em xizmetên diranan ên bi kalîte pêşkêş dikin, ji muayeneyê û çakirinê heta cerrahiya devê û implantan.",
            extra:
                "Herwiha em di diranpizişkiya estetîk û derziyên bedewiyê de bi filler û botulinum toxin type A taybetmend in.",
            languages:
                "Ger hûn bixwazin, em bi swêdî, tirkî, kurdî, erebî û lîtwanî jî bi rehetiya tam diaxivin.",
            primaryCta: "Zêdetir derbarê me de bixwînin",
            secondaryCta: "Me bibînin",
            imageAlt: "Wêneya klînîka Tuve Tandvård",
        },
        about: {
            eyebrow: "Derbarê me de",
            title: "Klînîka we ya diranan a herêmî û profesyonel li navenda Göteborgê",
            body:
                "Li cem me hûn bi xizmeta diranan a ewle, kesane û nûjen re têne pêşwazîkirin ku li ser kalîte, rêzdarî û encamên demdirêj disekine.",
            reviewTitle: "Nirxandinên Google",
            reviewBody: "Bibînin nexweş di Google de derbarê Tuve Tandvård de çi dibêjin.",
            reviewLoading: "Nirxandinên Google yên dawî têne barkirin…",
            reviewFallback:
                "Dema ku Google Places API çalak bibe, nirxandinên zindî li vir xuya dibin. Heta wê demê, mêvan dikarin hemû nirxandinan li ser Google bixwînin.",
            reviewError: "Niha nekarîbû nirxandinan bîne.",
            reviewCta: "Hemû nirxandinan bibîne",
            reviewLiveLabel: "Zindî ji Google",
            ratingLabel: "Nirxa Google",
            reviewCountLabel: "nirxandin",
            reviewUserFallback: "Bikarhênerê Google",
            reviewRecentFallback: "Nêzîkî vê demê",
            reviewTextFallback: "Nivîsa nirxandinê tune ye.",
        },
        booking: {
            eyebrow: "Dem bistîne",
            title: "Serdana xwe bi Muntra re online tomar bikin",
            body: "Rêbaza me ya tomarê ya dîjîtal hêsan dike ku hûn demeke ku li gorî we ye rasterast li vir bibînin.",
            liveLabel: "Tomara online bi Muntra",
            calendarTitle: "Demeke ku li gorî we ye hilbijêrin",
            calendarIntro: "Demên vala bibînin û di salnameya li jêr de tomara xwe bi ewle qebûl bikin.",
            loading: "Salnameya tomarê niha tê barkirin…",
            fallback: "Salname li vir demekî kurt tune ye, lê hûn dikarin ji bo alîkariya zû telefon bikin.",
            benefits: [
                "Di her demê de demên vala bibînin",
                "Bi mobile, tablet an jî komputerê tomar bikin",
                "Piştrastkirina zû online bistînin",
            ],
            helpTitle: "Ji bo rezervasyonê alîkarî hewce ye?",
            helpBody:
                "Heke salnameya rezervasyonê niha xuya nabe, ji kerema xwe re klînîkê telefon bikin em alîkariya we bikin.",
            fallbackCta: "Telefonê bikin",
        },
        services: {
            eyebrow: "Xizmetên me",
            title: "Em ji bo nexweşên xwe gelek xizmet pêşkêş dikin",
            intro: "Li jêr bibînin em dikarin çawa alîkariya we bikin.",
            items: [
                {
                    title: "Lênihêrîna diranan a giştî",
                    description:
                        "Lênihêrîna diranan ya N, S û F. Herwiha em ji bo zarok û ciwanan xizmeta belaş pêşkêş dikin.",
                },
                {
                    title: "Botox û filler",
                    description: "Bihayên baş a bazarê ji aliyê diranpizişkekî destûrdar ve tê kirin.",
                },
                {
                    title: "Cerrahiya devê û implant",
                    description: "Hesaskirin û jêhatî di cerrahiya implantê de.",
                },
                {
                    title: "Diranpizişkiya estetîk û kozmetîk",
                    description: "Ma hûn Hollywood Smile dixwazin? Em çareya wê dikin!",
                },
            ],
        },
        specialist: {
            eyebrow: "Lênihêrîna li gorî we",
            title: "Lênihêrîna taybet a diranan li gorî hewcedariyên we",
            items: [
                "Lênihêrîna aboneyî ya diranan – lênihêrîna bi mesrefa mehane ya kêmtir.",
                "Hemû tişt belaş in ji bilî lênihêrîna pisporî û protez/anîya estetîk a fireh.",
                "Lênihêrîna acîl û xizmeta dewjimêrê diranan.",
                "Em li ser dagirtin û tedawiyên protezî garantiyên dirêj pêşkêş dikin.",
            ],
        },
        location: {
            eyebrow: "Me bibînin",
            title: "Gunnestorpsvägen 109",
            city: "417 47 Göteborg",
            openMaps: "Li Google Maps veke",
            mapTitle: "Nexşeya Tuve Tandvård",
            visitEyebrow: "Serdana me bikin",
        },
        contact: {
            eyebrow: "Bi me re têkilî daynin",
            title: "Ji me re binivîsin",
            note: "(Têbînî: ji bo rezervasyonan ne ye)",
            fields: {
                name: "Navê we",
                phone: "Telefon",
                email: "E-name",
                message: "Peyam",
                submit: "Peyamê bişîne",
            },
            mailSubjectPrefix: "Têkilî ji malperê",
            detailsTitle: "Agahiyên têkiliyê",
            details: [
                {
                    label: "E-name",
                    value: "info@tuvetandvard.se",
                    href: "mailto:info@tuvetandvard.se",
                },
                { label: "Telefon", value: "0707 55 44 48", href: "tel:0707554448" },
            ],
            addressTitle: "Klînîka we ya diranan a herêmî û profesyonel li navenda Göteborgê.",
            addressLines: ["Gunnestorpsvägen 109", "417 47 Göteborg"],
            socialLabel: "Instagram",
            socialHref: "https://www.instagram.com/",
            linksTitle: "Girêdan",
        },
    },
    ar: {
        ...baseContent,
        languageName: "العربية",
        direction: "rtl",
        ui: {
            languageLabel: "اللغة",
            languageSelectAria: "اختر اللغة",
            navigationLabel: "التنقل الرئيسي",
        },
        nav: [
            { label: "الرئيسية", href: "#startsida" },
            { label: "احجز موعدًا", href: "#boka-tid" },
            { label: "من نحن", href: "#om-oss" },
            { label: "تواصل معنا", href: "#kontakta-oss" },
        ],
        hero: {
            eyebrow: "طبيب أسنانك المحلي في غوتنبرغ",
            heading: "مرحبًا بكم في Tuve Tandvård",
            intro:
                "نقدم رعاية أسنان عالية الجودة تشمل الفحوصات والحشوات وجراحة الفم وزراعة الأسنان.",
            extra:
                "كما أننا متخصصون في تجميل الأسنان والحقن التجميلية بالفيلر والبوتوكس من النوع A.",
            languages:
                "كما نتحدث السويدية والتركية والكردية والعربية والليتوانية بطلاقة لمن يفضل ذلك.",
            primaryCta: "اعرف المزيد عنا",
            secondaryCta: "اتصل بنا",
            imageAlt: "صورة لعيادة Tuve Tandvård",
        },
        about: {
            eyebrow: "من نحن",
            title: "عيادتك المحلية والمهنية لطب الأسنان في قلب غوتنبرغ",
            body:
                "نستقبلكم برعاية أسنان آمنة وشخصية وحديثة تركز على الجودة وحسن التعامل والنتائج طويلة الأمد.",
            reviewTitle: "تقييمات Google",
            reviewBody: "اطّلع على آراء المرضى حول Tuve Tandvård مباشرة من Google.",
            reviewLoading: "جارٍ تحميل أحدث تقييمات Google…",
            reviewFallback:
                "يمكن عرض التقييمات المباشرة هنا عند تفعيل Google Places API. وحتى ذلك الحين يمكن للزوار قراءة جميع التقييمات مباشرة على Google.",
            reviewError: "تعذر تحميل التقييمات حاليًا.",
            reviewCta: "عرض جميع التقييمات",
            reviewLiveLabel: "مباشر من Google",
            ratingLabel: "تقييم Google",
            reviewCountLabel: "تقييمًا",
            reviewUserFallback: "مستخدم Google",
            reviewRecentFallback: "مؤخرًا",
            reviewTextFallback: "نص التقييم غير متوفر.",
        },
        booking: {
            eyebrow: "احجز موعدًا",
            title: "احجز زيارتك عبر الإنترنت باستخدام Muntra",
            body: "يسهّل نظام الحجز الرقمي لدينا العثور على موعد مناسب لك مباشرة من هذه الصفحة.",
            liveLabel: "حجز إلكتروني عبر Muntra",
            calendarTitle: "اختر الوقت المناسب لك",
            calendarIntro: "اطّلع على المواعيد المتاحة وأكّد حجزك بأمان من خلال التقويم أدناه.",
            loading: "جارٍ تحميل تقويم الحجز الآن…",
            fallback: "تقويم الحجز غير متاح هنا مؤقتًا، لكن يمكنك الاتصال بنا وسنساعدك بسرعة.",
            benefits: [
                "اعرض المواعيد المتاحة على مدار الساعة",
                "احجز من الهاتف أو الجهاز اللوحي أو الكمبيوتر",
                "احصل على تأكيد سريع عبر الإنترنت",
            ],
            helpTitle: "هل تحتاج إلى مساعدة في الحجز؟",
            helpBody:
                "إذا لم يظهر تقويم الحجز الآن، يُرجى الاتصال بالعيادة وسنساعدك مباشرة.",
            fallbackCta: "اتصل بالعيادة",
        },
        services: {
            eyebrow: "خدماتنا",
            title: "نقدم مجموعة واسعة من الخدمات لمرضانا",
            intro: "اطلع أدناه على كيفية مساعدتنا لك.",
            items: [
                {
                    title: "طب الأسنان العام",
                    description:
                        "رعاية الأسنان N وS وF. كما نقدم رعاية أسنان مجانية للأطفال واليافعين.",
                },
                {
                    title: "البوتوكس والفيلر",
                    description: "أسعار ممتازة يقدمها طبيب أسنان مرخّص.",
                },
                {
                    title: "جراحة الفم وزراعة الأسنان",
                    description: "دقة وخبرة في جراحة الزراعة.",
                },
                {
                    title: "طب الأسنان التجميلي",
                    description: "هل تحلم بابتسامة هوليوود؟ نحن نحقق ذلك!",
                },
            ],
        },
        specialist: {
            eyebrow: "رعاية مخصصة",
            title: "رعاية أسنان تخصصية مصممة حسب احتياجاتك",
            items: [
                "اشتراك رعاية الأسنان – رعاية مستمرة بتكلفة شهرية منخفضة.",
                "كل شيء مشمول مجانًا باستثناء الرعاية التخصصية والعلاجات التعويضية والتجميلية الكبيرة.",
                "رعاية أسنان عاجلة وخدمة طوارئ.",
                "نقدم ضمانات طويلة على الحشوات والعلاجات التعويضية.",
            ],
        },
        location: {
            eyebrow: "اعثر علينا",
            title: "Gunnestorpsvägen 109",
            city: "417 47 غوتنبرغ",
            openMaps: "افتح في Google Maps",
            mapTitle: "خريطة Tuve Tandvård",
            visitEyebrow: "زورونا",
        },
        contact: {
            eyebrow: "تواصل معنا",
            title: "يسعدنا تواصلك معنا",
            note: "(ملاحظة: لا ينطبق على الحجوزات)",
            fields: {
                name: "الاسم",
                phone: "الهاتف",
                email: "البريد الإلكتروني",
                message: "الرسالة",
                submit: "إرسال الرسالة",
            },
            mailSubjectPrefix: "رسالة عبر الموقع من",
            detailsTitle: "معلومات التواصل",
            details: [
                {
                    label: "البريد الإلكتروني",
                    value: "info@tuvetandvard.se",
                    href: "mailto:info@tuvetandvard.se",
                },
                { label: "الهاتف", value: "0707 55 44 48", href: "tel:0707554448" },
            ],
            addressTitle: "عيادتك المحلية والمهنية لطب الأسنان في قلب غوتنبرغ.",
            addressLines: ["Gunnestorpsvägen 109", "417 47 غوتنبرغ"],
            socialLabel: "Instagram",
            socialHref: "https://www.instagram.com/",
            linksTitle: "روابط",
        },
    },
    lt: {
        ...baseContent,
        languageName: "Lietuvių",
        direction: "ltr",
        ui: {
            languageLabel: "Kalba",
            languageSelectAria: "Pasirinkite kalbą",
            navigationLabel: "Pagrindinė navigacija",
        },
        nav: [
            { label: "Pradžia", href: "#startsida" },
            { label: "Rezervuoti laiką", href: "#boka-tid" },
            { label: "Apie mus", href: "#om-oss" },
            { label: "Susisiekite", href: "#kontakta-oss" },
        ],
        hero: {
            eyebrow: "Jūsų vietinis odontologas Geteborge",
            heading: "Maloniai kviečiame į Tuve Tandvård",
            intro:
                "Siūlome aukštos kokybės odontologijos paslaugas – nuo apžiūrų ir plombavimo iki burnos chirurgijos bei implantų.",
            extra:
                "Taip pat specializuojamės estetinėje odontologijoje ir grožio injekcijose su užpildais bei A tipo botulino toksinu.",
            languages:
                "Pageidaujantiems taip pat laisvai kalbame švediškai, turkiškai, kurdiškai, arabiškai ir lietuviškai.",
            primaryCta: "Sužinokite daugiau apie mus",
            secondaryCta: "Paskambinkite mums",
            imageAlt: "Tuve Tandvård klinikos nuotrauka",
        },
        about: {
            eyebrow: "Apie mus",
            title: "Jūsų vietinė ir profesionali odontologijos klinika Geteborgo širdyje",
            body:
                "Pas mus jus pasitiks saugi, asmeniška ir moderni odontologinė priežiūra, orientuota į kokybę, rūpestį ir ilgalaikius rezultatus.",
            reviewTitle: "Google atsiliepimai",
            reviewBody: "Pažiūrėkite, ką pacientai mano apie Tuve Tandvård tiesiai iš Google.",
            reviewLoading: "Įkeliami naujausi Google atsiliepimai…",
            reviewFallback:
                "Tiesioginiai atsiliepimai čia bus rodomi, kai bus įjungtas Google Places API. Iki tol lankytojai gali visus atsiliepimus perskaityti tiesiog Google.",
            reviewError: "Šiuo metu nepavyko įkelti atsiliepimų.",
            reviewCta: "Peržiūrėti visus atsiliepimus",
            reviewLiveLabel: "Tiesiogiai iš Google",
            ratingLabel: "Google įvertinimas",
            reviewCountLabel: "atsiliepimai",
            reviewUserFallback: "Google naudotojas",
            reviewRecentFallback: "Neseniai",
            reviewTextFallback: "Atsiliepimo tekstas nepateiktas.",
        },
        booking: {
            eyebrow: "Rezervuoti laiką",
            title: "Užsisakykite vizitą internetu su Muntra",
            body: "Mūsų skaitmeninė registracija leidžia lengviau rasti jums tinkamą laiką tiesiai šiame puslapyje.",
            liveLabel: "Internetinė registracija su Muntra",
            calendarTitle: "Pasirinkite jums tinkamą laiką",
            calendarIntro: "Peržiūrėkite laisvus laikus ir saugiai patvirtinkite vizitą kalendoriuje žemiau.",
            loading: "Dabar įkeliamas registracijos kalendorius…",
            fallback: "Kalendorius čia laikinai nepasiekiamas, tačiau galite mums paskambinti ir greitai padėsime.",
            benefits: [
                "Matykite laisvus laikus visą parą",
                "Registruokitės telefonu, planšete ar kompiuteriu",
                "Greitai gaukite patvirtinimą internetu",
            ],
            helpTitle: "Reikia pagalbos rezervuojant?",
            helpBody:
                "Jei rezervacijos kalendorius dabar nerodomas, paskambinkite į kliniką ir mes jums padėsime.",
            fallbackCta: "Skambinti klinikai",
        },
        services: {
            eyebrow: "Mūsų paslaugos",
            title: "Savo pacientams siūlome platų paslaugų spektrą",
            intro: "Žemiau rasite, kuo galime jums padėti.",
            items: [
                {
                    title: "Bendroji odontologija",
                    description:
                        "N, S ir F odontologinė priežiūra. Taip pat teikiame nemokamą vaikų ir jaunimo odontologinę priežiūrą.",
                },
                {
                    title: "Botoksas ir užpildai",
                    description: "Puikios kainos, procedūras atlieka licencijuotas odontologas.",
                },
                {
                    title: "Burnos chirurgija ir implantai",
                    description: "Tikslumas ir patirtis implantų chirurgijoje.",
                },
                {
                    title: "Estetinė ir kosmetinė odontologija",
                    description: "Svajojate apie Hollywood Smile? Mes tuo pasirūpinsime!",
                },
            ],
        },
        specialist: {
            eyebrow: "Pritaikyta priežiūra",
            title: "Specializuota odontologinė priežiūra pagal jūsų poreikius",
            items: [
                "Odontologijos abonementas – priežiūra už nedidelį mėnesinį mokestį.",
                "Viskas įskaičiuota nemokamai, išskyrus specializuotą priežiūrą ir platesnes protezavimo bei estetikos procedūras.",
                "Skubi odontologinė pagalba ir budinti priežiūra.",
                "Siūlome ilgas garantijas plomboms ir protezavimo procedūroms.",
            ],
        },
        location: {
            eyebrow: "Kaip mus rasti",
            title: "Gunnestorpsvägen 109",
            city: "417 47 Geteborgas",
            openMaps: "Atidaryti Google Maps",
            mapTitle: "Tuve Tandvård žemėlapis",
            visitEyebrow: "Aplankykite mus",
        },
        contact: {
            eyebrow: "Susisiekite",
            title: "Parašykite mums",
            note: "(Pastaba: neskirta registracijoms)",
            fields: {
                name: "Jūsų vardas",
                phone: "Telefonas",
                email: "El. paštas",
                message: "Žinutė",
                submit: "Siųsti žinutę",
            },
            mailSubjectPrefix: "Kontaktas per svetainę nuo",
            detailsTitle: "Kontaktiniai duomenys",
            details: [
                {
                    label: "El. paštas",
                    value: "info@tuvetandvard.se",
                    href: "mailto:info@tuvetandvard.se",
                },
                { label: "Telefonas", value: "0707 55 44 48", href: "tel:0707554448" },
            ],
            addressTitle: "Jūsų vietinė ir profesionali odontologijos klinika Geteborgo širdyje.",
            addressLines: ["Gunnestorpsvägen 109", "417 47 Geteborgas"],
            socialLabel: "Instagram",
            socialHref: "https://www.instagram.com/",
            linksTitle: "Nuorodos",
        },
    },
};

const translationEnhancements = {
    sv: {
        topbar: {
            highlights: [
                "Akuta tider vid behov",
                "Modern tandvård i Tuve",
                "Flera språk på kliniken",
            ],
            bookButton: "Boka tid",
        },
        hero: {
            quickActions: [
                { label: "Ring oss", value: baseContent.phone, href: "tel:0707554448" },
                { label: "Boka online", value: "Snabb återkoppling", href: "#boka-tid" },
                { label: "Hitta hit", value: "Gunnestorpsvägen 109", href: "#karta" },
            ],
            ratingNote: "Trygg tandvård med höga patientomdömen.",
        },
        promo: {
            eyebrow: "Estetisk tandvård",
            title: "Behandlingar med ett naturligt och fräscht resultat",
            body:
                "Vi hjälper dig med allt från kosmetiska förbättringar till mer avancerad estetisk tandvård i en lugn och personlig miljö.",
            cta: "Upptäck våra behandlingar",
            imageAlt: "Estetisk tandvård hos Tuve Tandvård",
        },
        benefits: {
            eyebrow: "Därför väljer patienter oss",
            title: "Det här uppskattar våra patienter mest",
            items: [
                {
                    title: "Personligt bemötande",
                    description: "Vi tar oss tid, lyssnar och anpassar behandlingen efter dina behov.",
                },
                {
                    title: "Bred kompetens",
                    description: "Från allmäntandvård till kirurgi, implantat och estetiska behandlingar.",
                },
                {
                    title: "Trygg miljö",
                    description: "Modern utrustning och tydlig information genom hela ditt besök.",
                },
                {
                    title: "Smidig kontakt",
                    description: "Boka online eller ring oss direkt för snabb hjälp och rådgivning.",
                },
            ],
        },
        location: {
            hoursTitle: "Öppettider",
            hours: [
                { label: "Måndag–Fredag", value: "Enligt bokning" },
                { label: "Akuta tider", value: "Vid behov" },
                { label: "Kontakt", value: baseContent.phone },
            ],
        },
    },
    en: {
        topbar: {
            highlights: [
                "Emergency appointments when needed",
                "Modern dental care in Tuve",
                "Multilingual support at the clinic",
            ],
            bookButton: "Book now",
        },
        hero: {
            quickActions: [
                { label: "Call us", value: baseContent.phone, href: "tel:0707554448" },
                { label: "Book online", value: "Fast response", href: "#boka-tid" },
                { label: "Find us", value: "Gunnestorpsvägen 109", href: "#karta" },
            ],
            ratingNote: "Safe dental care with strong patient reviews.",
        },
        promo: {
            eyebrow: "Aesthetic dentistry",
            title: "Treatments with a natural and confident result",
            body:
                "We help you with everything from cosmetic improvements to more advanced aesthetic dentistry in a calm and personal environment.",
            cta: "Explore our treatments",
            imageAlt: "Aesthetic dentistry at Tuve Tandvård",
        },
        benefits: {
            eyebrow: "Why patients choose us",
            title: "What our patients appreciate the most",
            items: [
                {
                    title: "Personal care",
                    description: "We listen carefully and tailor each visit to your needs.",
                },
                {
                    title: "Wide expertise",
                    description: "From general dentistry to surgery, implants and aesthetic treatments.",
                },
                {
                    title: "Safe environment",
                    description: "Modern equipment and clear guidance throughout your visit.",
                },
                {
                    title: "Easy contact",
                    description: "Book online or call us directly for quick help and advice.",
                },
            ],
        },
        location: {
            hoursTitle: "Opening hours",
            hours: [
                { label: "Monday–Friday", value: "By appointment" },
                { label: "Emergency care", value: "When needed" },
                { label: "Contact", value: baseContent.phone },
            ],
        },
    },
    tr: {
        topbar: {
            highlights: [
                "Gerektiğinde acil randevu",
                "Tuve'de modern diş bakımı",
                "Klinikte çok dilli hizmet",
            ],
            bookButton: "Randevu al",
        },
        hero: {
            quickActions: [
                { label: "Bizi arayın", value: baseContent.phone, href: "tel:0707554448" },
                { label: "Online randevu", value: "Hızlı dönüş", href: "#boka-tid" },
                { label: "Bizi bulun", value: "Gunnestorpsvägen 109", href: "#karta" },
            ],
            ratingNote: "Yüksek hasta memnuniyetine sahip güvenli diş bakımı.",
        },
        promo: {
            eyebrow: "Estetik diş hekimliği",
            title: "Doğal ve taze bir görünüm için tedaviler",
            body:
                "Sakin ve kişisel bir ortamda kozmetik iyileştirmelerden daha gelişmiş estetik diş tedavilerine kadar yardımcı oluyoruz.",
            cta: "Tedavilerimizi keşfedin",
            imageAlt: "Tuve Tandvård estetik diş tedavisi",
        },
        benefits: {
            eyebrow: "Hastalar neden bizi seçiyor",
            title: "Hastalarımızın en çok takdir ettiği noktalar",
            items: [
                {
                    title: "Kişisel yaklaşım",
                    description: "Sizi dinler ve tedaviyi ihtiyaçlarınıza göre planlarız.",
                },
                {
                    title: "Geniş uzmanlık",
                    description: "Genel diş bakımından implant ve estetik tedavilere kadar geniş hizmet.",
                },
                {
                    title: "Güvenli ortam",
                    description: "Modern ekipman ve net bilgilendirme ile rahat bir deneyim.",
                },
                {
                    title: "Kolay iletişim",
                    description: "Online randevu alın ya da hızlı destek için bizi arayın.",
                },
            ],
        },
        location: {
            hoursTitle: "Çalışma saatleri",
            hours: [
                { label: "Pazartesi–Cuma", value: "Randevu ile" },
                { label: "Acil bakım", value: "Gerektiğinde" },
                { label: "İletişim", value: baseContent.phone },
            ],
        },
    },
    ku: {
        topbar: {
            highlights: [
                "Wextên acîl dema pêwîst be",
                "Lênihêrîna diranan a nûjen li Tuve",
                "Xizmeta pir-zimanî li klînîkê",
            ],
            bookButton: "Dem bistîne",
        },
        hero: {
            quickActions: [
                { label: "Telefon bikin", value: baseContent.phone, href: "tel:0707554448" },
                { label: "Tomarkirina online", value: "Bersiva bilez", href: "#boka-tid" },
                { label: "Me bibînin", value: "Gunnestorpsvägen 109", href: "#karta" },
            ],
            ratingNote: "Lênihêrîna ewle ya diranan bi nirxandinên baş ên nexweşan.",
        },
        promo: {
            eyebrow: "Diranpizişkiya estetîk",
            title: "Tedawiyên bi encamek xwezayî û xweş",
            body:
                "Em ji başkirinên kozmetîk heta diranpizişkiya estetîk a pêşketî di derdorê de bi aramî û kesayetî alîkariyê dikin.",
            cta: "Tedawiyên me bibînin",
            imageAlt: "Diranpizişkiya estetîk li Tuve Tandvård",
        },
        benefits: {
            eyebrow: "Çima nexweş em hilbijêrin",
            title: "Tiştên ku nexweşên me herî zêde jê hez dikin",
            items: [
                {
                    title: "Pêşwaziya kesane",
                    description: "Em guhdarî dikin û planê li gorî hewcedariyên we çêdikin.",
                },
                {
                    title: "Şarezayiya fireh",
                    description: "Ji lênihêrîna giştî heta implant û tedawiyên estetîk.",
                },
                {
                    title: "Hewşeya ewle",
                    description: "Amûrên nûjen û agahdariya zelal di hemû serdanê de.",
                },
                {
                    title: "Têkiliya hêsan",
                    description: "Online tomar bikin an jî ji bo alîkariya bilez telefon bikin.",
                },
            ],
        },
        location: {
            hoursTitle: "Demjimêr",
            hours: [
                { label: "Duşem–În", value: "Bi tomarê" },
                { label: "Lênihêrîna acîl", value: "Dema pêwîst be" },
                { label: "Têkilî", value: baseContent.phone },
            ],
        },
    },
    ar: {
        topbar: {
            highlights: [
                "مواعيد طارئة عند الحاجة",
                "رعاية أسنان حديثة في Tuve",
                "خدمة بعدة لغات في العيادة",
            ],
            bookButton: "احجز الآن",
        },
        hero: {
            quickActions: [
                { label: "اتصل بنا", value: baseContent.phone, href: "tel:0707554448" },
                { label: "حجز عبر الإنترنت", value: "رد سريع", href: "#boka-tid" },
                { label: "اعثر علينا", value: "Gunnestorpsvägen 109", href: "#karta" },
            ],
            ratingNote: "رعاية أسنان موثوقة مع تقييمات ممتازة من المرضى.",
        },
        promo: {
            eyebrow: "طب الأسنان التجميلي",
            title: "علاجات بنتيجة طبيعية وواثقة",
            body:
                "نساعدك في كل شيء من التحسينات التجميلية إلى العلاجات المتقدمة في بيئة هادئة وشخصية.",
            cta: "اكتشف علاجاتنا",
            imageAlt: "علاج تجميلي للأسنان في Tuve Tandvård",
        },
        benefits: {
            eyebrow: "لماذا يختارنا المرضى",
            title: "أكثر ما يقدّره مرضانا لدينا",
            items: [
                {
                    title: "اهتمام شخصي",
                    description: "نستمع جيدًا ونكيّف كل علاج حسب احتياجاتك.",
                },
                {
                    title: "خبرة واسعة",
                    description: "من طب الأسنان العام إلى الزراعة والعلاجات التجميلية.",
                },
                {
                    title: "بيئة آمنة",
                    description: "أجهزة حديثة ومعلومات واضحة طوال زيارتك.",
                },
                {
                    title: "تواصل سهل",
                    description: "احجز عبر الإنترنت أو اتصل بنا مباشرة للحصول على مساعدة سريعة.",
                },
            ],
        },
        location: {
            hoursTitle: "ساعات العمل",
            hours: [
                { label: "الاثنين–الجمعة", value: "حسب الموعد" },
                { label: "الرعاية الطارئة", value: "عند الحاجة" },
                { label: "التواصل", value: baseContent.phone },
            ],
        },
    },
    lt: {
        topbar: {
            highlights: [
                "Skubūs laikai prireikus",
                "Moderni odontologija Tuve",
                "Klinikoje kalbame keliomis kalbomis",
            ],
            bookButton: "Rezervuoti",
        },
        hero: {
            quickActions: [
                { label: "Skambinkite", value: baseContent.phone, href: "tel:0707554448" },
                { label: "Rezervuokite online", value: "Greitas atsakas", href: "#boka-tid" },
                { label: "Raskite mus", value: "Gunnestorpsvägen 109", href: "#karta" },
            ],
            ratingNote: "Patikima odontologija su puikiais pacientų atsiliepimais.",
        },
        promo: {
            eyebrow: "Estetinė odontologija",
            title: "Procedūros su natūraliu ir gaiviu rezultatu",
            body:
                "Padedame tiek su kosmetiniais patobulinimais, tiek su pažangesne estetine odontologija ramioje ir jaukioje aplinkoje.",
            cta: "Atraskite mūsų procedūras",
            imageAlt: "Estetinė odontologija Tuve Tandvård klinikoje",
        },
        benefits: {
            eyebrow: "Kodėl pacientai renkasi mus",
            title: "Ką mūsų pacientai vertina labiausiai",
            items: [
                {
                    title: "Asmeniškas požiūris",
                    description: "Klausomės jūsų ir pritaikome gydymą pagal poreikius.",
                },
                {
                    title: "Plati kompetencija",
                    description: "Nuo bendrosios odontologijos iki implantų ir estetikos.",
                },
                {
                    title: "Saugi aplinka",
                    description: "Moderni įranga ir aiški informacija viso vizito metu.",
                },
                {
                    title: "Patogus kontaktas",
                    description: "Rezervuokite internetu arba skambinkite greitai pagalbai.",
                },
            ],
        },
        location: {
            hoursTitle: "Darbo laikas",
            hours: [
                { label: "Pirmadienis–Penktadienis", value: "Pagal rezervaciją" },
                { label: "Skubi pagalba", value: "Prireikus" },
                { label: "Kontaktas", value: baseContent.phone },
            ],
        },
    },
};

export const defaultLocale = "sv";
export const localeOptions = ["sv", "en", "tr", "ku", "ar", "lt"].map((code) => ({
    code,
    label: translations[code].languageName,
}));

export function isSupportedLocale(locale) {
    return Object.hasOwn(translations, locale);
}

export function getTranslation(locale) {
    const selectedLocale = isSupportedLocale(locale) ? locale : defaultLocale;
    const translation = translations[selectedLocale] ?? translations[defaultLocale];
    const enhancements =
        translationEnhancements[selectedLocale] ?? translationEnhancements[defaultLocale];

    return {
        ...translation,
        topbar: {
            ...(enhancements.topbar ?? {}),
        },
        hero: {
            ...translation.hero,
            ...(enhancements.hero ?? {}),
        },
        promo: {
            ...(enhancements.promo ?? {}),
        },
        benefits: {
            ...(enhancements.benefits ?? {}),
        },
        location: {
            ...translation.location,
            ...(enhancements.location ?? {}),
        },
    };
}
