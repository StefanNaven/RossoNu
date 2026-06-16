# RossoNu

Webbplats för Rossö samhälls- och fritidsförening. Publiceras via GitHub Pages.

## Sidor

| Menynamn | Fil |
|---|---|
| Hem | `index.html` |
| Upptäck Rossö | `discover.html` |
| Historia | `history.html` |
| Gemenskap | `community.html` |
| Besöka Rossö | `visit.html` |
| Om föreningen | `about.html` |

## Struktur

```text
RossoNu/
├── index.html
├── discover.html
├── history.html
├── community.html
├── visit.html
├── about.html
├── css/
│   └── style.css
├── js/
│   └── site.js
├── data/
│   └── hero-media.json
├── images/
│   ├── shared/
│   │   └── icons/
│   ├── index/
│   │   └── hero/
│   ├── discover/
│   ├── history/
│   ├── community/
│   ├── visit/
│   └── about/
├── documents/
└── README.md
```

## Bildprincip

Bilder läggs i mappen för den sida där de används:

- `images/index/` – startsidan och bildspelet
- `images/discover/` – Upptäck Rossö
- `images/history/` – historiasidan
- `images/community/` – Gemenskap
- `images/visit/` – Besöka Rossö
- `images/about/` – Om föreningen
- `images/shared/` – logotyp, favicon och bilder som används på flera sidor

Använd små bokstäver, inga mellanslag eller å/ä/ö och kebab-case, exempelvis `kockholmen-solnedgang.webp`.

## Dokument

Stadgar, protokoll och andra filer kan läggas i `documents/`. Använd tydliga filnamn, exempelvis `stadgar.pdf` eller `arsmotesprotokoll-2026.pdf`.

## Startsidan och Facebook

Föreningens egen Facebook-sida visas på startsidan och används som primär kanal för aktuella meddelanden. Övriga Facebook-grupper och verksamheter länkas från de sidor där de hör hemma.

## GitHub Pages

- **Repository:** `RossoNu`
- **Settings → Pages**
- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/root`
