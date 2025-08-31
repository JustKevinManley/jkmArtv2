import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'workGrid',
  title: 'Work Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {list: [
        {title: 'Grid', value: 'grid'},
        {title: 'Masonry', value: 'masonry'},
      ]},
      initialValue: 'grid',
    }),
  ],
})


