import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import type {StructureBuilder} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const homeSingletonId = 'home'

export default defineConfig({
  name: 'default',
  title: 'Your Project Name',

  projectId: process.env.SANITY_PROJECT_ID || 'vcbcy2as',
  dataset: process.env.SANITY_DATASET || 'production',

  plugins: [
    deskTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('settings').documentId('settings')),
            S.listItem()
              .title('Home')
              .child(S.document().schemaType('page').documentId(homeSingletonId)),
            S.divider(),
            S.documentTypeListItem('page'),
            S.documentTypeListItem('project'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
