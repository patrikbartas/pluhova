# Changelog

Všetky podstatné zmeny v tomto projekte sú zaznamenané tu.
Formát vychádza z [Keep a Changelog](https://keepachangelog.com/sk/1.1.0/)
a projekt používa [sémantické verzovanie](https://semver.org/lang/sk/).

## [0.1.0] — 2026-06-03

### Pridané
- Prvá verejná verzia stránky o **cyklistickom protismere na Pluhovej** (Bratislava).
- Stránky: **Domov, Situácia, Legislatíva, Denník** (zoznam + detail záznamu).
- Podpisová **schéma ulice** (`Lane`) — statická na domovskej, **animovaná** na
  Situácii (auto vybočí do blikajúceho vynechaného miesta), riešené cez SMIL,
  aby fungovalo aj v Safari / pri „Reduce Motion".
- **Denník** ako obsahová kolekcia (`src/content/dennik/*.mdoc`).
- **Keystatic** CMS na pridávanie záznamov.
- **Legislatíva** — vecné zhrnutia s odkazmi na Slov-Lex
  (zákon č. 8/2009 Z. z., vyhláška č. 30/2020 Z. z.).
- Dizajn v štýle **dopravného značenia** (asfalt + papier, hi-vis žltá),
  fonty Bricolage Grotesque + Hanken Grotesk + IBM Plex Mono.

### Nasadenie
- Nasadené na **Vercel**, auto-deploy pri `git push` do `main`.
- Keystatic v **GitHub režime** — admin (web aj mobil) commituje záznamy do repa.

[0.1.0]: https://github.com/patrikbartas/pluhova/releases/tag/v0.1.0
