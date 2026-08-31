import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './schemas';


export default defineConfig({
  name: 'default',
  title: 'blue-echidna',

  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
