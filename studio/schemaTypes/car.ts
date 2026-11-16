import { defineArrayMember, defineField, defineType } from 'sanity';

// One document per car. The website reads these fields in src/data/cars.ts.
export const car = defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({ name: 'make', title: 'Make', type: 'string', description: 'e.g. Mercedes-Benz', validation: (r) => r.required() }),
    defineField({ name: 'model', title: 'Model', type: 'string', description: 'e.g. E-Class', validation: (r) => r.required() }),
    defineField({ name: 'colour', title: 'Colour', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Web address',
      type: 'slug',
      description: 'The end of the car\'s page address, e.g. mercedes-e-class-white. Press Generate; don\'t change it once the car is live.',
      options: {
        source: (doc) => [doc.make, doc.model, doc.colour].filter(Boolean).join(' '),
        maxLength: 80,
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Body type',
      type: 'string',
      options: { list: ['Sedan', 'SUV', 'Hatchback'], layout: 'radio', direction: 'horizontal' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      description: 'The first photo is the cover. Drag to reorder. Keep all photos of one car the same shape (all upright or all square).',
      of: [defineArrayMember({ type: 'image', options: { hotspot: false } })],
      options: { layout: 'grid' },
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'featured',
      title: 'Feature on the home page',
      type: 'boolean',
      description: 'Featured cars are listed first. The home page shows the first three cars.',
      initialValue: false,
    }),
    defineField({
      name: 'price',
      title: 'Price (lakhs)',
      type: 'number',
      description: 'In lakhs: 24.5 shows as ₹ 24.50 L, 125 shows as ₹ 1.25 Cr. Leave empty to show "Price on request".',
      validation: (r) => r.positive(),
    }),
    defineField({ name: 'year', title: 'Year', type: 'number', validation: (r) => r.integer().min(1950).max(2100) }),
    defineField({ name: 'kms', title: 'Kilometres', type: 'string', description: 'As it should read on the site, e.g. 42,000 km' }),
    defineField({ name: 'fuel', title: 'Fuel', type: 'string', options: { list: ['Petrol', 'Diesel', 'Hybrid', 'Electric', 'CNG'] } }),
    defineField({ name: 'gearbox', title: 'Gearbox', type: 'string', options: { list: ['Automatic', 'Manual'] } }),
    defineField({ name: 'blurb', title: 'Description', type: 'text', rows: 4, description: 'A short paragraph shown on the car\'s page. Optional.' }),
    defineField({
      name: 'specs',
      title: 'Extra details',
      type: 'array',
      description: 'Anything else worth listing, e.g. Owners: First, Registration: MH 43.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'spec',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'value', title: 'Value', type: 'string', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'label', subtitle: 'value' } },
        }),
      ],
    }),
  ],
  orderings: [
    { title: 'Newest first', name: 'newest', by: [{ field: '_createdAt', direction: 'desc' }] },
    { title: 'Make', name: 'make', by: [{ field: 'make', direction: 'asc' }, { field: 'model', direction: 'asc' }] },
  ],
  preview: {
    select: { make: 'make', model: 'model', colour: 'colour', year: 'year', price: 'price', featured: 'featured', media: 'photos.0' },
    prepare: ({ make, model, colour, year, price, featured, media }) => ({
      title: [year, make, model].filter(Boolean).join(' '),
      subtitle: [colour, price ? `₹ ${price} L` : 'Price on request', featured ? 'Featured' : null].filter(Boolean).join(' · '),
      media,
    }),
  },
});
