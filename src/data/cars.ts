import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import sanity from '../../studio/project.json';
import { STOCK } from './local-stock.ts';

export type Category = 'Sedan' | 'SUV' | 'Hatchback';

export interface Photo {
  src: string;
  width: number;
  height: number;
  /** On Sanity's image CDN (resized by URL) rather than a file in public/stock/. */
  remote: boolean;
}

export interface Car {
  id: string;
  make: string;
  model: string;
  colour: string;
  cat: Category;
  /** At least one; the first is the cover. */
  photos: Photo[];
  year?: number;
  /** Lakhs, or crores when unit is "cr". Leave out to show "Price on request". */
  price?: number;
  unit?: 'cr';
  kms?: string;
  fuel?: string;
  gearbox?: string;
  blurb?: string;
  specs?: [string, string][];
}

// The cars are edited in Sanity (see studio/ and the README) and fetched here when the site builds.
// Featured cars come first, then newest first; the home page shows the first three.
const QUERY = `*[_type == "car" && defined(slug.current) && count(photos[defined(asset)]) > 0]
  | order(coalesce(featured, false) desc, _createdAt desc) {
    "id": slug.current, make, model, colour, "cat": category, year, price, kms, fuel, gearbox, blurb,
    "specs": specs[]{ label, value },
    "photos": photos[defined(asset)]{
      "src": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  }`;

interface SanityCar extends Omit<Car, 'photos' | 'specs' | 'unit'> {
  photos: Omit<Photo, 'remote'>[];
  specs?: { label?: string; value?: string }[];
}

async function fromSanity(): Promise<Car[]> {
  // api.sanity.io, not the cached apicdn: a build started by a publish must see that publish.
  const url = `https://${sanity.projectId}.api.sanity.io/v2025-02-19/data/query/${sanity.dataset}?perspective=published&query=${encodeURIComponent(QUERY)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not load the cars from Sanity: ${res.status} ${await res.text()}`);
  const { result } = (await res.json()) as { result: SanityCar[] };
  return result.map(({ price, specs, photos, ...car }) => {
    // Editors set the price in lakhs; drop empty values so the pages' "is it known?" checks hold.
    const known = Object.fromEntries(Object.entries(car).filter(([, v]) => v != null && v !== '')) as typeof car;
    return {
      ...known,
      ...(price == null ? {} : price >= 100 ? { price: price / 100, unit: 'cr' as const } : { price }),
      specs: specs?.filter((s) => s.label && s.value).map((s) => [s.label!, s.value!] as [string, string]),
      photos: photos.map((p) => ({ ...p, remote: true })),
    };
  });
}

/** Width and height of a WebP, read from its header (lossy, lossless or extended). */
function webpSize(file: string): [number, number] {
  const b = readFileSync(file);
  const kind = b.toString('ascii', 12, 16);
  if (kind === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
  if (kind === 'VP8L') { const n = b.readUInt32LE(21); return [(n & 0x3fff) + 1, ((n >> 14) & 0x3fff) + 1]; }
  return [b.readUIntLE(24, 3) + 1, b.readUIntLE(27, 3) + 1];
}

/** The pre-Sanity stock in public/stock/, used until studio/project.json names a project. */
const fromDisk = (): Car[] =>
  STOCK.map((car) => ({
    ...car,
    photos: Array.from({ length: car.photos }, (_, i) => {
      const src = `/stock/${car.id}/${String(i + 1).padStart(2, '0')}.webp`;
      const [width, height] = webpSize(join(process.cwd(), 'public', src));
      return { src, width, height, remote: false };
    }),
  }));

export const CARS: Car[] = sanity.projectId ? await fromSanity() : fromDisk();

export const CATEGORIES = ['All', 'Sedan', 'SUV', 'Hatchback'] as const;

export const lakhs = (c: Car) => (c.price === undefined ? undefined : c.unit === 'cr' ? c.price * 100 : c.price);

export const money = (c: Car) =>
  c.price === undefined ? 'Price on request'
  : c.unit === 'cr' ? `₹ ${c.price.toFixed(2)} Cr` : `₹ ${c.price.toFixed(2)} L`;

/** 80% financed over 60 months at 8.4% p.a. */
export function emi(c: Car) {
  const l = lakhs(c);
  if (l === undefined) return undefined;
  const p = l * 100000 * 0.8, r = 0.084 / 12, n = 60;
  const m = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return '₹ ' + Math.round(m).toLocaleString('en-IN');
}

export const carName = (c: Car) => [c.year, c.make, c.model].filter(Boolean).join(' ');

const pic = (c: Car, n: number) => c.photos[n - 1];
/** Sanity's image CDN resizes on request and never enlarges; it serves WebP/AVIF where the browser takes it. */
const cdn = (p: Photo, w: number, q = 75) => `${p.src}?w=${w}&fit=max&q=${q}&auto=format`;
const FULL = 1600;

/** The nth photo (from 1) at full size. */
export const photo = (c: Car, n = 1) => (pic(c, n).remote ? cdn(pic(c, n), FULL) : pic(c, n).src);
/** A smaller copy: 720 or 400px wide, or 160px for thumbnails. */
export const photoAt = (c: Car, n: number, w: 720 | 400 | 160) => {
  const p = pic(c, n);
  // Local stock: copies made by scripts/stock-sizes.mjs in public/stock/<id>/<w>/.
  return p.remote ? cdn(p, w, w > 200 ? 75 : 60) : p.src.replace(/\/([^/]+)$/, `/${w}/$1`);
};
/** srcset for a photo: the smaller copies plus the full size. */
export const photoSrcset = (c: Car, n = 1) =>
  `${photoAt(c, n, 400)} 400w, ${photoAt(c, n, 720)} 720w, ${photo(c, n)} ${Math.min(pic(c, n).width, FULL)}w`;

/** The card/spec line: whichever of kms, fuel and gearbox are known, else colour and body. */
export const summary = (c: Car) => {
  const known = [c.kms, c.fuel, c.gearbox].filter(Boolean);
  return (known.length ? known : [c.colour, c.cat]).join(' · ');
};
