import type { Category } from './cars.ts';

export interface StockCar {
  id: string;
  make: string;
  model: string;
  colour: string;
  cat: Category;
  /** Number of photos in public/stock/<id>/ (01.webp, 02.webp, …). */
  photos: number;
}

// The stock as it was before the cars moved to Sanity. The site shows this list only while
// studio/project.json has no projectId, and scripts/sanity-import.mjs uploads it to Sanity.
// Once the cars are in Sanity, this file and public/stock/ can be deleted.
export const STOCK: StockCar[] = [
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
