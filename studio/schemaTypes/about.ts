import { defineField, defineType } from 'sanity';

// One document: the About page's photo. The website reads it in src/data/about.ts.
export const about = defineType({
  name: 'about',
  title: 'About page',
  type: 'document',
  fields: [
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      description: 'Shown beside the About text, cropped to a tall 4:5 frame. Set the hotspot to keep the important part in view.',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Description', type: 'string', description: 'What the photo shows, for screen readers.' })],
    }),
  ],
  preview: { prepare: () => ({ title: 'About page' }) },
});
