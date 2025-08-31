import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'kind',
      title: 'Kind',
      type: 'string',
      options: {list: [
        {title: 'Internal', value: 'internal'},
        {title: 'External', value: 'external'},
      ]},
      initialValue: 'internal',
    }),
    defineField({
      name: 'internal',
      title: 'Internal Target',
      type: 'reference',
      to: [{type: 'page'}, {type: 'project'}],
      hidden: ({parent}) => parent?.kind !== 'internal'
    }),
    defineField({
      name: 'external',
      title: 'External URL',
      type: 'url',
      hidden: ({parent}) => parent?.kind !== 'external'
    }),
  ],
})


