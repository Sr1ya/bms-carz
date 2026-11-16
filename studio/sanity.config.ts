import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import project from '../sanity.json';
import { car } from './schemaTypes/car';

export default defineConfig({
  name: 'default',
  title: 'BMS Carz',
  projectId: project.projectId,
  dataset: project.dataset,
  plugins: [structureTool()],
  schema: { types: [car] },
});
