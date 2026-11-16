import sanity from '../../studio/project.json';

export interface Photo {
  src: string;
  width: number;
  height: number;
}

export interface Car {
  id: string;
  /** The brand's name, e.g. Mercedes-Benz. Brands and body types are their own lists in Sanity. */
  make: string;
  model: string;
  colour: string;
  /** The body type's name, e.g. SUV. */
  cat: string;
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
const QUERY = `*[_type == "car" && defined(slug.current) && defined(brand->name) && defined(bodyType->name) && count(photos[defined(asset)]) > 0]
  | order(coalesce(featured, false) desc, _createdAt desc) {
    "id": slug.current, "make": brand->name, model, colour, "cat": bodyType->name, year, price, kms, fuel, gearbox, blurb,
    "specs": specs[]{ label, value },
    "photos": photos[defined(asset)]{
      "src": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  }`;

interface SanityCar extends Omit<Car, 'specs' | 'unit'> {
  specs?: { label?: string; value?: string }[];
}

async function fromSanity(): Promise<Car[]> {
  // api.sanity.io, not the cached apicdn: a build started by a publish must see that publish.
  const url = `https://${sanity.projectId}.api.sanity.io/v2025-02-19/data/query/${sanity.dataset}?perspective=published&query=${encodeURIComponent(QUERY)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not load the cars from Sanity: ${res.status} ${await res.text()}`);
  const { result } = (await res.json()) as { result: SanityCar[] };
  return result.map(({ price, specs, ...car }) => {
    // Editors set the price in lakhs; drop empty values so the pages' "is it known?" checks hold.
    const known = Object.fromEntries(Object.entries(car).filter(([, v]) => v != null && v !== '')) as typeof car;
    return {
      ...known,
      ...(price == null ? {} : price >= 100 ? { price: price / 100, unit: 'cr' as const } : { price }),
      specs: specs?.filter((s) => s.label && s.value).map((s) => [s.label!, s.value!] as [string, string]),
    };
  });
}

if (!sanity.projectId) throw new Error('studio/project.json has no projectId, so there are no cars to load.');

export const CARS: Car[] = await fromSanity();

/** The brands and body types that have cars right now, A to Z: the collection page's filters. */
const names = (pick: (c: Car) => string) => [...new Set(CARS.map(pick))].sort((a, b) => a.localeCompare(b));
export const BRANDS = names((c) => c.make);
export const BODY_TYPES = names((c) => c.cat);

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
export const photo = (c: Car, n = 1) => cdn(pic(c, n), FULL);
/** A smaller copy: 720 or 400px wide, or 160px for thumbnails. */
export const photoAt = (c: Car, n: number, w: 720 | 400 | 160) => cdn(pic(c, n), w, w > 200 ? 75 : 60);
/** srcset for a photo: the smaller copies plus the full size. */
export const photoSrcset = (c: Car, n = 1) =>
  `${photoAt(c, n, 400)} 400w, ${photoAt(c, n, 720)} 720w, ${photo(c, n)} ${Math.min(pic(c, n).width, FULL)}w`;

/** The card/spec line: whichever of kms, fuel and gearbox are known, else colour and body. */
export const summary = (c: Car) => {
  const known = [c.kms, c.fuel, c.gearbox].filter(Boolean);
  return (known.length ? known : [c.colour, c.cat]).join(' · ');
};
