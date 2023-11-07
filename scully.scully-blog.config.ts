import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-blog',
  // distFolder: './dist/[PROJECT_NAME]', 
  // Up here is the output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  // defaultPostRenderers: [],
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },},
};