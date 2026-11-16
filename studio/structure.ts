import type { StructureResolver } from 'sanity/structure';

// The sidebar: every car, the same cars filtered by brand or by body type, then the two lists themselves.
const carsBy = (S: Parameters<StructureResolver>[0], type: 'brand' | 'bodyType', title: string) =>
  S.listItem()
    .title(`Cars by ${title.toLowerCase()}`)
    .child(
      S.documentTypeList(type)
        .title(title)
        .child((id) =>
          S.documentList()
            .title('Cars')
            .schemaType('car')
            .filter(`_type == "car" && ${type}._ref == $id`)
            .params({ id }),
        ),
    );

export const structure: StructureResolver = (S) =>
  S.list()
    .title('BMS Carz')
    .items([
      S.documentTypeListItem('car').title('All cars'),
      carsBy(S, 'brand', 'Brand'),
      carsBy(S, 'bodyType', 'Body type'),
      S.divider(),
      S.documentTypeListItem('brand').title('Brands'),
      S.documentTypeListItem('bodyType').title('Body types'),
    ]);
