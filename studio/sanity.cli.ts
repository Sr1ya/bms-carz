import { defineCliConfig } from 'sanity/cli';
import project from './project.json';

export default defineCliConfig({
  api: { projectId: project.projectId, dataset: project.dataset },
  // The Studio is hosted by Sanity at https://bmscarz.sanity.studio after `npm run deploy`.
  studioHost: 'bmscarz',
  deployment: { appId: 'mmga9mulh4zozziw7xug4je1' },
});
