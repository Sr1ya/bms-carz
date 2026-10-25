export type Category = 'Sedan' | 'SUV' | 'Performance';

export interface Car {
  id: string;
  year: number;
  make: string;
  model: string;
  /** Lakhs, or crores when unit is "cr". */
  price: number;
  unit?: 'cr';
  cat: Category;
  kms: string;
  fuel: string;
  gearbox: string;
  blurb: string;
  specs: [string, string][];
}

export const CARS: Car[] = [
  { id: 'm340i', year: 2022, make: 'BMW', model: 'M340i xDrive', price: 62.5, cat: 'Performance', kms: '18,400 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'One owner, Portimao Blue, serviced at Navnit from new. The B58 straight-six with adaptive M suspension — factory warranty live until early 2027.',
    specs: [['Engine', '3.0L I6 Turbo'], ['Power', '382 bhp'], ['0–100', '4.4 s'], ['Owners', '1'], ['Insurance', 'Valid to 03/27'], ['Registration', 'KA-01'], ['Colour', 'Portimao Blue'], ['Service', 'Full, Navnit']] },
  { id: 'carrera', year: 2019, make: 'Porsche', model: '911 Carrera S', price: 1.42, unit: 'cr', cat: 'Performance', kms: '12,100 km', fuel: 'Petrol', gearbox: 'PDK',
    blurb: 'Sport Chrono, PASM and the sports exhaust. Two enthusiast owners, complete Porsche Centre history, and wheels without a single mark.',
    specs: [['Engine', '3.0L Flat-6'], ['Power', '443 bhp'], ['0–100', '3.7 s'], ['Owners', '2'], ['Insurance', 'Valid to 05/27'], ['Registration', 'KA-51'], ['Colour', 'GT Silver'], ['Service', 'Full, PC Bengaluru']] },
  { id: 'g350', year: 2022, make: 'Mercedes-Benz', model: 'G 350d', price: 1.68, unit: 'cr', cat: 'SUV', kms: '14,300 km', fuel: 'Diesel', gearbox: 'Automatic',
    blurb: 'Obsidian Black with the AMG Line pack and 20-inch wheels. Delivered new in Bengaluru to a single owner, still under manufacturer warranty.',
    specs: [['Engine', '3.0L I6 Diesel'], ['Power', '286 bhp'], ['Drive', '4MATIC'], ['Owners', '1'], ['Insurance', 'Valid to 01/27'], ['Registration', 'KA-01'], ['Colour', 'Obsidian Black'], ['Service', 'Full, Sundaram']] },
  { id: 'c300d', year: 2021, make: 'Mercedes-Benz', model: 'C 300d AMG Line', price: 48.9, cat: 'Sedan', kms: '31,200 km', fuel: 'Diesel', gearbox: 'Automatic',
    blurb: 'Burmester audio and panoramic roof. Chauffeur-driven and garaged; original paint across every panel on the depth gauge.',
    specs: [['Engine', '2.0L I4 Diesel'], ['Power', '245 bhp'], ['0–100', '5.9 s'], ['Owners', '1'], ['Insurance', 'Valid to 08/26'], ['Registration', 'KA-05'], ['Colour', 'Selenite Grey'], ['Service', 'Full, Sundaram']] },
  { id: 'rs5', year: 2020, make: 'Audi', model: 'RS5 Sportback', price: 78.0, cat: 'Performance', kms: '24,900 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Twin-turbo V6 with the RS sport exhaust and ceramic front brakes. Sparingly used and kept on a trickle charger between drives.',
    specs: [['Engine', '2.9L V6 Biturbo'], ['Power', '450 bhp'], ['0–100', '3.9 s'], ['Owners', '2'], ['Insurance', 'Valid to 11/26'], ['Registration', 'KA-03'], ['Colour', 'Nardo Grey'], ['Service', 'Full, Audi BLR']] },
  { id: 'velar', year: 2021, make: 'Land Rover', model: 'Range Rover Velar', price: 59.5, cat: 'SUV', kms: '27,600 km', fuel: 'Diesel', gearbox: 'Automatic',
    blurb: 'R-Dynamic SE with full-length panoramic roof and Meridian audio. Air suspension serviced last year; new tyres at 25,000 km.',
    specs: [['Engine', '2.0L I4 Diesel'], ['Power', '201 bhp'], ['Drive', 'AWD'], ['Owners', '1'], ['Insurance', 'Valid to 09/26'], ['Registration', 'KA-04'], ['Colour', 'Santorini Black'], ['Service', 'Full, JLR BLR']] },
  { id: '530i', year: 2021, make: 'BMW', model: '530i M Sport', price: 51.4, cat: 'Sedan', kms: '29,500 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Gesture-control iDrive and Harman Kardon audio. Serviced every 10,000 km without exception since new.',
    specs: [['Engine', '2.0L I4 Turbo'], ['Power', '248 bhp'], ['0–100', '6.2 s'], ['Owners', '1'], ['Insurance', 'Valid to 04/27'], ['Registration', 'KA-02'], ['Colour', 'Mineral White'], ['Service', 'Full, Navnit']] },
  { id: 'macan', year: 2020, make: 'Porsche', model: 'Macan S', price: 74.5, cat: 'SUV', kms: '22,700 km', fuel: 'Petrol', gearbox: 'PDK',
    blurb: 'Air suspension, Sport Chrono and 21-inch RS Spyder wheels. Garage-kept, original paint, PDK serviced ahead of schedule.',
    specs: [['Engine', '3.0L V6 Turbo'], ['Power', '348 bhp'], ['0–100', '5.1 s'], ['Owners', '1'], ['Insurance', 'Valid to 10/26'], ['Registration', 'KA-41'], ['Colour', 'Dolomite Silver'], ['Service', 'Full, PC Bengaluru']] },
  { id: 'e300', year: 2022, make: 'Mercedes-Benz', model: 'E 300 Exclusive', price: 64.2, cat: 'Sedan', kms: '20,100 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Long-wheelbase E-Class in Exclusive trim — executive rear seats, Burmester audio, and the softest ride in the collection.',
    specs: [['Engine', '2.0L I4 Turbo'], ['Power', '254 bhp'], ['Wheelbase', 'LWB'], ['Owners', '1'], ['Insurance', 'Valid to 02/27'], ['Registration', 'KA-05'], ['Colour', 'Obsidian Black'], ['Service', 'Full, Akshaya']] },
  { id: '718', year: 2019, make: 'Porsche', model: '718 Cayman', price: 82.0, cat: 'Performance', kms: '9,800 km', fuel: 'Petrol', gearbox: 'Manual',
    blurb: 'A rare six-speed manual under 10,000 km, a weekend car its whole life. Sport Seats Plus, PASM, and an untouched underbody.',
    specs: [['Engine', '2.0L Flat-4'], ['Power', '300 bhp'], ['0–100', '4.9 s'], ['Owners', '1'], ['Insurance', 'Valid to 12/26'], ['Registration', 'KA-01'], ['Colour', 'Racing Yellow'], ['Service', 'Full, PC Bengaluru']] },
];

export const SCORES: [string, number][] = [
  ['Engine & drivetrain', 96],
  ['Body & paint', 92],
  ['Interior & electronics', 94],
  ['Tyres & brakes', 88],
];

export const CATEGORIES = ['All', 'Sedan', 'SUV', 'Performance'] as const;

export const lakhs = (c: Car) => (c.unit === 'cr' ? c.price * 100 : c.price);

export const money = (c: Car) =>
  c.unit === 'cr' ? `₹ ${c.price.toFixed(2)} Cr` : `₹ ${c.price.toFixed(2)} L`;

/** 80% financed over 60 months at 8.4% p.a. */
export function emi(c: Car) {
  const p = lakhs(c) * 100000 * 0.8, r = 0.084 / 12, n = 60;
  const m = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return '₹ ' + Math.round(m).toLocaleString('en-IN');
}

export const carName = (c: Car) => `${c.year} ${c.make} ${c.model}`;
