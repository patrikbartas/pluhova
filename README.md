# Pluhová

Občianska stránka o **cyklistickom protismere na Pluhovej ulici** v Bratislave —
situácia, legislatíva a denník situácií na ceste.

Postavené v [Astro](https://astro.build) + [Keystatic](https://keystatic.com) (CMS),
nasadené na [Vercel](https://vercel.com).

## Vývoj

```bash
npm install
npm run dev        # http://localhost:4321
```

Admin na pridávanie záznamov beží na **`/keystatic`**.
V deve sa záznamy ukladajú priamo do `src/content/dennik/` (lokálny režim).

## Štruktúra

- Stránky: `src/pages/` — Domov, Situácia, Legislatíva, Denník (+ detail záznamu)
- Záznamy denníka: `src/content/dennik/*.mdoc`
- Schéma kolekcie pre web: `src/content.config.ts`
- Model obsahu pre CMS: `keystatic.config.ts`
- Schéma ulice (komponent): `src/components/Lane.astro`

## Nasadenie (Vercel + GitHub)

Repo je napojené na Vercel — pri každom `git push` do `main` sa web sám nasadí.

V **produkcii** Keystatic ukladá záznamy cez **GitHub** (commit do tohto repa),
takže záznamy sa dajú pridávať aj z mobilu cez nasadené `/keystatic`.
Treba jednorazovo vytvoriť **GitHub App** (sprievodca priamo v `/keystatic`)
a na Verceli nastaviť premenné podľa [`.env.example`](./.env.example):

- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `KEYSTATIC_SECRET`
- `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

## Build

```bash
npm run build
npm run preview
```
