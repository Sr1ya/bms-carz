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
- `public/images/` — logos

Forms currently confirm in place only; connect `src/scripts/forms.ts` to a form service to receive submissions.

## Cars (Sanity)

Cars are edited in the Studio at https://bmscarz.sanity.studio: brand, model, colour, body type, photos, price and details.

Brands and body types are their own lists in the Studio, and each car links to one of each. The collection page filters by both; a brand or body type shows as a filter once a published car uses it, and a filtered list can be linked to, e.g. `/collection/?brand=BMW&body=SUV`.

 The site is static, so a change shows once the site has rebuilt (about a minute after publishing, via the webhook below).

Featured cars are listed first, then the newest; the home page shows the first three. A car needs at least one photo to appear. Unpublish or delete a car to take it off the site.

### Setup

The Sanity project is `5f3dmod9` (organization "BMS Carz"), and the 21 cars that were on the site have been imported. After changing the car form in `studio/schemaTypes/car.ts`, publish it with `npm run studio:deploy`.

Publishing a car rebuilds the site: a Sanity webhook ("Rebuild website on car publish", sanity.io/manage → API → Webhooks) calls the Vercel deploy hook `sanity-publish` on the `bms-carz` project whenever a car, brand or body type is created, changed or deleted.

The About page's photo is also edited in the Studio ("About page" in the sidebar); set its hotspot to choose what stays in view in the tall frame.

`npm run studio` runs the Studio locally at http://localhost:3333.
