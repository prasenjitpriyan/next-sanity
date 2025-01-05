import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const config = defineConfig({
  projectId: 'zf5e749w',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2025-01-05',
  basePath: '/admin',
  plugins: [deskTool()]
})

export default config
