import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'zf5e749w',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2025-01-05',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config
