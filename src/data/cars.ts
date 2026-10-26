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
  { id: 'carrera', year: 2020, make: 'Porsche', model: '911 Carrera S', price: 1.42, unit: 'cr', cat: 'Performance', kms: '12,100 km', fuel: 'Petrol', gearbox: 'PDK',
    blurb: 'Sport Chrono, PASM and the sports exhaust. Two enthusiast owners, complete Porsche Centre history, and wheels without a single mark.',
    specs: [['Engine', '3.0L Flat-6 Turbo'], ['Power', '443 bhp'], ['0–100', '3.7 s'], ['Owners', '2'], ['Insurance', 'Valid to 05/27'], ['Registration', 'KA-51'], ['Colour', 'Carrara White'], ['Service', 'Full, PC Bengaluru']] },
  { id: 'g350', year: 2022, make: 'Mercedes-Benz', model: 'G 350d', price: 1.68, unit: 'cr', cat: 'SUV', kms: '14,300 km', fuel: 'Diesel', gearbox: 'Automatic',
    blurb: 'Obsidian Black with the AMG Line pack and 20-inch wheels. Delivered new in Bengaluru to a single owner, still under manufacturer warranty.',
    specs: [['Engine', '3.0L I6 Diesel'], ['Power', '286 bhp'], ['Drive', '4MATIC'], ['Owners', '1'], ['Insurance', 'Valid to 01/27'], ['Registration', 'KA-01'], ['Colour', 'Obsidian Black'], ['Service', 'Full, Sundaram']] },
  { id: 'c300d', year: 2023, make: 'Mercedes-Benz', model: 'C 300d AMG Line', price: 48.9, cat: 'Sedan', kms: '31,200 km', fuel: 'Diesel', gearbox: 'Automatic',
    blurb: 'The new-shape C-Class with Burmester audio and panoramic roof. Chauffeur-driven and garaged; original paint across every panel on the depth gauge.',
    specs: [['Engine', '2.0L I4 Diesel'], ['Power', '261 bhp'], ['0–100', '5.7 s'], ['Owners', '1'], ['Insurance', 'Valid to 08/26'], ['Registration', 'KA-05'], ['Colour', 'Polar White'], ['Service', 'Full, Sundaram']] },
  { id: 'rs5', year: 2021, make: 'Audi', model: 'RS5 Sportback', price: 78.0, cat: 'Performance', kms: '24,900 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Twin-turbo V6 with the RS sport exhaust and ceramic front brakes. Sparingly used and kept on a trickle charger between drives.',
    specs: [['Engine', '2.9L V6 Biturbo'], ['Power', '450 bhp'], ['0–100', '3.9 s'], ['Owners', '2'], ['Insurance', 'Valid to 11/26'], ['Registration', 'KA-03'], ['Colour', 'Tango Red'], ['Service', 'Full, Audi BLR']] },
  { id: 'velar', year: 2021, make: 'Land Rover', model: 'Range Rover Velar', price: 59.5, cat: 'SUV', kms: '27,600 km', fuel: 'Diesel', gearbox: 'Automatic',
    blurb: 'R-Dynamic SE with full-length panoramic roof and Meridian audio. Air suspension serviced last year; new tyres at 25,000 km.',
    specs: [['Engine', '2.0L I4 Diesel'], ['Power', '201 bhp'], ['Drive', 'AWD'], ['Owners', '1'], ['Insurance', 'Valid to 09/26'], ['Registration', 'KA-04'], ['Colour', 'Fuji White'], ['Service', 'Full, JLR BLR']] },
  { id: '530i', year: 2022, make: 'BMW', model: '530i M Sport', price: 51.4, cat: 'Sedan', kms: '29,500 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Gesture-control iDrive and Harman Kardon audio. Serviced every 10,000 km without exception since new.',
    specs: [['Engine', '2.0L I4 Turbo'], ['Power', '248 bhp'], ['0–100', '6.2 s'], ['Owners', '1'], ['Insurance', 'Valid to 04/27'], ['Registration', 'KA-02'], ['Colour', 'Mineral White'], ['Service', 'Full, Navnit']] },
  { id: 'macan', year: 2022, make: 'Porsche', model: 'Macan S', price: 92.5, cat: 'SUV', kms: '22,700 km', fuel: 'Petrol', gearbox: 'PDK',
    blurb: 'Air suspension, Sport Chrono and 21-inch RS Spyder wheels. Garage-kept, original paint, PDK serviced ahead of schedule.',
    specs: [['Engine', '2.9L V6 Biturbo'], ['Power', '375 bhp'], ['0–100', '4.8 s'], ['Owners', '1'], ['Insurance', 'Valid to 10/26'], ['Registration', 'KA-41'], ['Colour', 'Chalk'], ['Service', 'Full, PC Bengaluru']] },
  { id: 'e300', year: 2022, make: 'Mercedes-Benz', model: 'E 300 Exclusive', price: 64.2, cat: 'Sedan', kms: '20,100 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Long-wheelbase E-Class in Exclusive trim — executive rear seats, Burmester audio, and the softest ride in the collection.',
    specs: [['Engine', '2.0L I4 Turbo'], ['Power', '254 bhp'], ['Wheelbase', 'LWB'], ['Owners', '1'], ['Insurance', 'Valid to 02/27'], ['Registration', 'KA-05'], ['Colour', 'Obsidian Black'], ['Service', 'Full, Akshaya']] },
  { id: '718', year: 2022, make: 'Porsche', model: '718 Cayman GT4', price: 1.58, unit: 'cr', cat: 'Performance', kms: '6,900 km', fuel: 'Petrol', gearbox: 'Manual',
    blurb: 'The naturally aspirated 4.0-litre flat-six with a six-speed manual, under 7,000 km. Weekend car its whole life — Clubsport-style seats, PCCB-ready brakes, untouched underbody.',
    specs: [['Engine', '4.0L Flat-6'], ['Power', '414 bhp'], ['0–100', '4.4 s'], ['Owners', '1'], ['Insurance', 'Valid to 12/26'], ['Registration', 'KA-01'], ['Colour', 'Racing Yellow'], ['Service', 'Full, PC Bengaluru']] },
  { id: 'urus', year: 2023, make: 'Lamborghini', model: 'Urus S', price: 3.85, unit: 'cr', cat: 'SUV', kms: '8,200 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Matte grey over black with carbon exterior pack and Akrapovič exhaust. One owner, ANIMA modes untouched by tuning, and a complete Lamborghini Bangalore history.',
    specs: [['Engine', '4.0L V8 Biturbo'], ['Power', '657 bhp'], ['0–100', '3.5 s'], ['Owners', '1'], ['Insurance', 'Valid to 06/27'], ['Registration', 'KA-01'], ['Colour', 'Grigio Titans Matt'], ['Service', 'Full, Lamborghini BLR']] },
  { id: 'contgt', year: 2021, make: 'Bentley', model: 'Continental GT V8', price: 3.05, unit: 'cr', cat: 'Performance', kms: '11,600 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'White Sand over linen hide with the Mulliner Driving Specification — diamond-quilted seats, rotating display and 22-inch wheels. Garaged and driven gently.',
    specs: [['Engine', '4.0L V8 Biturbo'], ['Power', '542 bhp'], ['0–100', '4.0 s'], ['Owners', '1'], ['Insurance', 'Valid to 07/27'], ['Registration', 'KA-03'], ['Colour', 'White Sand'], ['Service', 'Full, Bentley BLR']] },
  { id: 'ghost', year: 2019, make: 'Rolls-Royce', model: 'Ghost Series II', price: 3.95, unit: 'cr', cat: 'Sedan', kms: '19,800 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Diamond Black with the Starlight headliner, picnic tables and lambswool rugs. Chauffeur-driven by one family, with every service carried out by the dealer.',
    specs: [['Engine', '6.6L V12 Biturbo'], ['Power', '563 bhp'], ['0–100', '4.9 s'], ['Owners', '1'], ['Insurance', 'Valid to 02/27'], ['Registration', 'KA-01'], ['Colour', 'Diamond Black'], ['Service', 'Full, RR Bengaluru']] },
  { id: 'maybach', year: 2022, make: 'Mercedes-Maybach', model: 'S 580 4MATIC', price: 2.45, unit: 'cr', cat: 'Sedan', kms: '13,400 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Executive rear seats with calf massage, rear-seat entertainment and the champagne refrigerator. Obsidian Black, chauffeur-driven, under manufacturer warranty.',
    specs: [['Engine', '4.0L V8 Biturbo'], ['Power', '496 bhp'], ['Drive', '4MATIC'], ['Owners', '1'], ['Insurance', 'Valid to 04/27'], ['Registration', 'KA-01'], ['Colour', 'Obsidian Black'], ['Service', 'Full, Sundaram']] },
  { id: 'rrlwb', year: 2023, make: 'Land Rover', model: 'Range Rover Autobiography LWB', price: 3.25, unit: 'cr', cat: 'SUV', kms: '9,700 km', fuel: 'Diesel', gearbox: 'Automatic',
    blurb: 'The new-generation Range Rover in long wheelbase, with Executive Class rear seats, Meridian Signature audio and four-corner air suspension. Santorini Black.',
    specs: [['Engine', '3.0L I6 Diesel'], ['Power', '346 bhp'], ['Wheelbase', 'LWB'], ['Owners', '1'], ['Insurance', 'Valid to 05/27'], ['Registration', 'KA-05'], ['Colour', 'Santorini Black'], ['Service', 'Full, JLR BLR']] },
  { id: 'x7', year: 2022, make: 'BMW', model: 'X7 xDrive40i M Sport', price: 1.12, unit: 'cr', cat: 'SUV', kms: '21,300 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Seven seats, Sky Lounge panoramic roof and Bowers & Wilkins audio. The facelifted split headlamps, Brooklyn Grey paint and a spotless service record.',
    specs: [['Engine', '3.0L I6 Turbo'], ['Power', '375 bhp'], ['0–100', '5.8 s'], ['Owners', '1'], ['Insurance', 'Valid to 09/26'], ['Registration', 'KA-02'], ['Colour', 'Brooklyn Grey'], ['Service', 'Full, Navnit']] },
  { id: 'roma', year: 2021, make: 'Ferrari', model: 'Roma', price: 3.45, unit: 'cr', cat: 'Performance', kms: '5,400 km', fuel: 'Petrol', gearbox: 'DCT',
    blurb: 'Bianco Cervino with red-stitched Cuoio leather and the passenger display. Barely 5,000 km, seven-year Ferrari maintenance programme still active.',
    specs: [['Engine', '3.9L V8 Biturbo'], ['Power', '612 bhp'], ['0–100', '3.4 s'], ['Owners', '1'], ['Insurance', 'Valid to 03/27'], ['Registration', 'KA-51'], ['Colour', 'Bianco Cervino'], ['Service', 'Full, Ferrari BLR']] },
  { id: 'rsq8', year: 2021, make: 'Audi', model: 'RS Q8', price: 1.72, unit: 'cr', cat: 'SUV', kms: '17,900 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Mythos Black with the black optics pack, carbon-ceramic brakes and rear-wheel steering. A super-SUV that still does the school run without complaint.',
    specs: [['Engine', '4.0L V8 Biturbo'], ['Power', '592 bhp'], ['0–100', '3.8 s'], ['Owners', '2'], ['Insurance', 'Valid to 10/26'], ['Registration', 'KA-03'], ['Colour', 'Mythos Black'], ['Service', 'Full, Audi BLR']] },
  { id: 'm4', year: 2022, make: 'BMW', model: 'M4 Competition', price: 1.38, unit: 'cr', cat: 'Performance', kms: '10,200 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Alpine White with M Carbon bucket seats and the M Drive Professional pack. Never tracked, on its original Michelin Pilot Sport 4S tyres.',
    specs: [['Engine', '3.0L I6 Biturbo'], ['Power', '503 bhp'], ['0–100', '3.9 s'], ['Owners', '1'], ['Insurance', 'Valid to 08/27'], ['Registration', 'KA-01'], ['Colour', 'Alpine White'], ['Service', 'Full, Navnit']] },
  { id: 'cayenne', year: 2023, make: 'Porsche', model: 'Cayenne Coupé S', price: 1.48, unit: 'cr', cat: 'SUV', kms: '7,800 km', fuel: 'Petrol', gearbox: 'Tiptronic',
    blurb: 'Jet Black with the lightweight sport package, adaptive air suspension and Bose surround. Practically new, with Porsche Approved warranty to 2027.',
    specs: [['Engine', '2.9L V6 Biturbo'], ['Power', '434 bhp'], ['0–100', '5.0 s'], ['Owners', '1'], ['Insurance', 'Valid to 11/27'], ['Registration', 'KA-41'], ['Colour', 'Jet Black'], ['Service', 'Full, PC Bengaluru']] },
  { id: 'gt63', year: 2020, make: 'Mercedes-AMG', model: 'GT 63 S 4-Door Coupé', price: 1.85, unit: 'cr', cat: 'Performance', kms: '16,500 km', fuel: 'Petrol', gearbox: 'Automatic',
    blurb: 'Hand-built V8 with AMG Dynamic Plus and the aerodynamics package. Four doors, four seats, and 0–100 in barely more than three seconds.',
    specs: [['Engine', '4.0L V8 Biturbo'], ['Power', '630 bhp'], ['0–100', '3.2 s'], ['Owners', '2'], ['Insurance', 'Valid to 01/27'], ['Registration', 'KA-05'], ['Colour', 'Graphite Grey'], ['Service', 'Full, Sundaram']] },
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
