import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import project from './project.json';
import { about } from './schemaTypes/about';
import { car } from './schemaTypes/car';
import { bodyType, brand } from './schemaTypes/lists';
import { structure } from './structure';

export default defineConfig({
  name: 'default',
  title: 'BMS Carz',
  projectId: project.projectId,
  dataset: project.dataset,
  plugins: [structureTool({ structure })],
  schema: {
    types: [car, brand, bodyType, about],
    // The About page is a single document, opened from the sidebar; don't offer to create more.
    templates: (templates) => templates.filter((t) => t.schemaType !== 'about'),
  },
  document: {
    actions: (actions, { schemaType }) =>
      schemaType === 'about' ? actions.filter((a) => a.action !== 'delete' && a.action !== 'duplicate') : actions,
  },
});
