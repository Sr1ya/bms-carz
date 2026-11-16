// One-off: uploads the pre-Sanity stock (src/data/local-stock.ts + public/stock/) to Sanity.
//   SANITY_WRITE_TOKEN=<token with Editor rights> npm run sanity-import
// Safe to run again: each car has a fixed document id, and Sanity recognises photos it already has.
// It replaces those car documents, so don't re-run it after editing the cars in the Studio.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { STOCK } from '../src/data/local-stock.ts';

const { projectId, dataset } = JSON.parse(readFileSync(join(process.cwd(), 'sanity.json'), 'utf8'));
const token = process.env.SANITY_WRITE_TOKEN;
if (!projectId) throw new Error('Set "projectId" in sanity.json first.');
if (!token) throw new Error('Set SANITY_WRITE_TOKEN to a token with Editor rights (sanity.io/manage → API → Tokens).');

const api = `https://${projectId}.api.sanity.io/v2025-02-19`;
const call = async (path, init) => {
  const res = await fetch(api + path, { ...init, headers: { Authorization: `Bearer ${token}`, ...init.headers } });
  if (!res.ok) throw new Error(`${path}: ${res.status} ${await res.text()}`);
  return res.json();
};

// The site lists newest first, so create the cars last to first to keep today's order.
for (const car of [...STOCK].reverse()) {
  const photos = [];
  for (let n = 1; n <= car.photos; n++) {
    const name = `${String(n).padStart(2, '0')}.webp`;
    const { document: asset } = await call(`/assets/images/${dataset}?filename=${car.id}-${name}`, {
      method: 'POST',
      headers: { 'Content-Type': 'image/webp' },
      body: readFileSync(join(process.cwd(), 'public', 'stock', car.id, name)),
    });
    photos.push({ _type: 'image', _key: `photo${n}`, asset: { _type: 'reference', _ref: asset._id } });
  }
  await call(`/data/mutate/${dataset}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      mutations: [{
        createOrReplace: {
          _id: `car-${car.id}`,
          _type: 'car',
          make: car.make,
          model: car.model,
          colour: car.colour,
          category: car.cat,
          slug: { _type: 'slug', current: car.id },
          featured: false,
          photos,
        },
      }],
    }),
  });
  console.log(`${car.id}: ${photos.length} photos`);
}
console.log(`Imported ${STOCK.length} cars.`);
