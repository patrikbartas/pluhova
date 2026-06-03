# Pluhová

Občianska stránka o **cyklistickom protismere na Pluhovej ulici** v Bratislave —
situácia, legislatíva a denník situácií na ceste.

**Naživo:** https://pluhova.vercel.app

Postavené v [Astro](https://astro.build) + [Keystatic](https://keystatic.com) (CMS),
nasadené na [Vercel](https://vercel.com) (auto-deploy pri `git push` do `main`).

## Stav

- ✅ Nasadené na Vercel, verejné
- ✅ Stránky: Domov, Situácia, Legislatíva, Denník (+ detail záznamu)
- ✅ Denník ako obsahová kolekcia (`src/content/dennik/*.mdoc`)
- ✅ Keystatic admin v **GitHub režime** — pridávanie záznamov z webu aj z mobilu
- ⏳ Zatiaľ placeholdre: fotky, mapka úseku; legislatíva sú vecné zhrnutia + odkazy (nie presné znenie paragrafov)

## Pridávanie záznamov do denníka

**Z webu / mobilu (produkcia):**
1. Otvor **https://pluhova.vercel.app/keystatic**
2. „Sign in with GitHub" — zapisovať môže len ten, kto má prístup k repu (t. j. vlastník)
3. Pridaj/uprav záznam → uloží sa **commitom do repa** → web sa sám prebuildne

**Lokálne (vývoj):**
```bash
npm install
npm run dev        # http://localhost:4321
```
Admin na `/keystatic` beží v **lokálnom režime** (zapisuje priamo do `src/content/dennik/`).

## Štruktúra

- Stránky: `src/pages/` — Domov, Situácia, Legislatíva, Denník (+ `[slug]`)
- Záznamy denníka: `src/content/dennik/*.mdoc`
- Kolekcia pre web: `src/content.config.ts`
- Model obsahu pre CMS: `keystatic.config.ts`
- Schéma ulice: `src/components/Lane.astro` (statická na domove, animovaná na Situácii)

## Nasadenie

Repo je napojené na Vercel — pri každom `git push` do `main` sa web sám nasadí.

Keystatic v produkcii používa **GitHub režim** (admin commituje do tohto repa).
Potrebné premenné (nastavené na Verceli, vzor v [`.env.example`](./.env.example)):

- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `KEYSTATIC_SECRET`
- `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

GitHub App: **`pluhova-keystatic-app`**.

## Build

```bash
npm run build
npm run preview
```

## Changelog

Pozri [CHANGELOG.md](./CHANGELOG.md).
