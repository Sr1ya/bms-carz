# BMS Carz

Website for BMS Carz, a pre-owned luxury car showroom in Bengaluru. Built with [Astro](https://astro.build).

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the production build
```

## Where things live

- `src/pages/` — home, collection, car detail (`cars/[id].astro`), about, contact
- `src/data/cars.ts` — the car inventory, prices and specs
- `src/components/Loader.astro` — intro logo animation, generated from `public/images/bms-carz-logo-dark.svg`
- `public/video/` — hero film (`hero.webm` for desktop, `hero-720.mp4` for phones/tablets, `hero-1080.mp4` fallback, `hero-poster.jpg`)
- `public/images/` — logos; drop car photos here named `car-<id>.jpg` (e.g. `car-m340i.jpg`), plus `bms-tradein.jpg` and `bms-about.jpg`

Forms currently confirm in place only; connect `src/scripts/forms.ts` to a form service to receive submissions.
