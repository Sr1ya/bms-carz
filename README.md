# BMS Carz

Website for BMS Carz, a pre-owned luxury car showroom in Kharghar, Navi Mumbai. Built with [Astro](https://astro.build).

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the production build
```

## Where things live

- `src/pages/` — home, collection, car detail (`cars/[id].astro`), about, contact
- `src/data/cars.ts` — loads the cars from Sanity when the site builds (see below)
- `studio/` — the Sanity Studio: the admin where cars are added and edited
- `studio/project.json` — the Sanity project id and dataset, shared by the site, the Studio and the import script
- `src/components/Loader.astro` — intro logo animation, generated from `public/images/bms-carz-logo-dark.svg`
- `public/video/` — hero film (`hero.webm` for desktop, `hero-720.mp4` for phones/tablets, `hero-1080.mp4` fallback, `hero-poster.jpg`)
- `public/images/` — logos, plus `bms-tradein.jpg` and `bms-about.jpg`

Forms currently confirm in place only; connect `src/scripts/forms.ts` to a form service to receive submissions.

## Cars (Sanity)

Cars are edited in the Studio at https://bmscarz.sanity.studio: make, model, colour, body type, photos, price and details. The site is static, so a change shows once the site has rebuilt (about a minute after publishing, via the webhook below).

Featured cars are listed first, then the newest; the home page shows the first three. A car needs at least one photo to appear. Unpublish or delete a car to take it off the site.

### Setup

The Sanity project is `5f3dmod9` (organization "BMS Carz"), and the 21 cars that were on the site have been imported. After changing the car form in `studio/schemaTypes/car.ts`, publish it with `npm run studio:deploy`.

Still to do, once: make the site rebuild on publish. In Vercel, create a Deploy Hook (Settings → Git → Deploy Hooks, branch `main`). At sanity.io/manage → API → Webhooks, add a webhook with that URL, dataset `production`, triggers create, update and delete, filter `_type == "car"`.

The old copies of the stock, `src/data/local-stock.ts`, `public/stock/`, `scripts/stock-sizes.mjs` and `scripts/sanity-import.mjs`, are no longer shown by the site. They can be deleted together with the `fromDisk` fallback in `src/data/cars.ts`, which still imports the first of them.

`npm run studio` runs the Studio locally at http://localhost:3333.
