import { defineField, defineType } from 'sanity';

// The two lists the website's collection page filters by. Each car links to one of each.
// A brand or body type shows as a filter once at least one published car uses it,
// and Sanity won't let one be deleted while cars still link to it.
const list = (name: string, title: string, example: string) =>
  defineType({
    name,
    title,
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        description: `As it should read on the website, e.g. ${example}.`,
        validation: (r) => r.required(),
      }),
    ],
    preview: { select: { title: 'name' } },
  });

export const brand = list('brand', 'Brand', 'Mercedes-Benz');
export const bodyType = list('bodyType', 'Body type', 'SUV');
