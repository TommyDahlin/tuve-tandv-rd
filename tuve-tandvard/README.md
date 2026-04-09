# Tuve Tandvård

En enkel React/Vite-hemsida för `Tuve Tandvård`.

## Kom igång

```bash
npm install
npm run dev
```

## Muntra-bokning

Sidan har nu en färdig sektion för **Muntra-widgeten** i `#boka-tid`.

> Bara `div`-taggen räcker inte i React/Vite — widgetens externa script måste också laddas.

### Testa lokalt
Skapa en `.env.local` i projektroten och lägg in den script-URL ni fått från Muntra:

```env
VITE_MUNTRA_WIDGET_SCRIPT_URL=https://.../widget.js
```

När scriptet finns på plats renderas denna container på sidan:

```html
<div class="muntra-widget primary" muntra_clinic_id="6301" muntra_referral_source="tuvetandvard.se"></div>
```

Om widgeten inte laddar visas fortfarande en säker fallback med telefonlänk till kliniken.

## Google-recensioner

Sidan har nu stöd för att visa **live-recensioner från Google Places API**.

### 1. Skapa en Google API-nyckel
Aktivera dessa tjänster i Google Cloud:

- `Maps JavaScript API`
- `Places API`

Begränsa gärna nyckeln till rätt domäner och `localhost`.

### 2. Lägg till en `.env.local`
Skapa en fil som heter `.env.local` i projektroten:

```env
VITE_GOOGLE_MAPS_API_KEY=din_google_maps_nyckel
VITE_GOOGLE_PLACE_ID=ditt_google_place_id
```

### 3. Starta om utvecklingsservern
När variablerna finns på plats visas recensionerna direkt i sektionen `Google-recensioner`.

Om nyckel eller `Place ID` saknas visas istället en säker fallback-länk till Google.
