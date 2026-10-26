export type Category = 'Sedan' | 'SUV' | 'Hatchback';

export interface Car {
  id: string;
  make: string;
  model: string;
  colour: string;
  cat: Category;
  /** Number of photos in public/stock/<id>/ (01.webp, 02.webp, …). */
  photos: number;
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

// Current stock. Make, model and colour were read off the photos; add year, price, kms,
// fuel and gearbox per car as they're confirmed, and they appear on the site automatically.
export const CARS: Car[] = [
  { id: 'audi-a3-black', make: 'Audi', model: 'A3', colour: 'Black', cat: 'Sedan', photos: 9 },
  { id: 'mercedes-c-class-black', make: 'Mercedes-Benz', model: 'C-Class', colour: 'Black', cat: 'Sedan', photos: 8 },
  { id: 'mercedes-s-class-white', make: 'Mercedes-Benz', model: 'S-Class', colour: 'White', cat: 'Sedan', photos: 8 },
  { id: 'mercedes-gle-silver', make: 'Mercedes-Benz', model: 'GLE', colour: 'Silver', cat: 'SUV', photos: 8 },
  { id: 'mercedes-e-class-brown', make: 'Mercedes-Benz', model: 'E-Class', colour: 'Brown', cat: 'Sedan', photos: 7 },
  { id: 'jeep-wrangler-red', make: 'Jeep', model: 'Wrangler', colour: 'Red', cat: 'SUV', photos: 8 },
  { id: 'mini-cooper-red', make: 'Mini', model: 'Cooper', colour: 'Red', cat: 'Hatchback', photos: 8 },
  { id: 'mercedes-ml-white', make: 'Mercedes-Benz', model: 'ML', colour: 'White', cat: 'SUV', photos: 10 },
  { id: 'bmw-5-series-black', make: 'BMW', model: '5 Series', colour: 'Black', cat: 'Sedan', photos: 10 },
  { id: 'mercedes-gl-white', make: 'Mercedes-Benz', model: 'GL', colour: 'White', cat: 'SUV', photos: 10 },
  { id: 'bmw-1-series-red', make: 'BMW', model: '1 Series', colour: 'Red', cat: 'Hatchback', photos: 9 },
  { id: 'mini-countryman-green', make: 'Mini', model: 'Countryman', colour: 'Green', cat: 'SUV', photos: 10 },
  { id: 'volvo-xc90-white', make: 'Volvo', model: 'XC90', colour: 'White', cat: 'SUV', photos: 9 },
  { id: 'volvo-s90-silver', make: 'Volvo', model: 'S90', colour: 'Silver', cat: 'Sedan', photos: 6 },
  { id: 'porsche-cayenne-grey', make: 'Porsche', model: 'Cayenne', colour: 'Grey', cat: 'SUV', photos: 10 },
  { id: 'mercedes-e-class-white', make: 'Mercedes-Benz', model: 'E-Class', colour: 'White', cat: 'Sedan', photos: 10 },
  { id: 'porsche-panamera-black', make: 'Porsche', model: 'Panamera', colour: 'Black', cat: 'Sedan', photos: 10 },
  { id: 'bmw-x5-white', make: 'BMW', model: 'X5', colour: 'White', cat: 'SUV', photos: 10 },
  { id: 'mercedes-gl-black', make: 'Mercedes-Benz', model: 'GL', colour: 'Black', cat: 'SUV', photos: 10 },
  { id: 'mercedes-ml-black', make: 'Mercedes-Benz', model: 'ML', colour: 'Black', cat: 'SUV', photos: 10 },
  { id: 'mini-cooper-s-red', make: 'Mini', model: 'Cooper S', colour: 'Red', cat: 'Hatchback', photos: 10 },
];

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

export const photo = (c: Car, n = 1) => `/stock/${c.id}/${String(n).padStart(2, '0')}.webp`;

/** The card/spec line: whichever of kms, fuel and gearbox are known, else colour and body. */
export const summary = (c: Car) => {
  const known = [c.kms, c.fuel, c.gearbox].filter(Boolean);
  return (known.length ? known : [c.colour, c.cat]).join(' · ');
};
