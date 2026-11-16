import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import project from './project.json';
import { car } from './schemaTypes/car';
import { bodyType, brand } from './schemaTypes/lists';
import { structure } from './structure';

export default defineConfig({
  name: 'default',
  title: 'BMS Carz',
  projectId: project.projectId,
  dataset: project.dataset,
  plugins: [structureTool({ structure })],
  schema: { types: [car, brand, bodyType] },
});
