import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'object',
  fields: [
    defineField({
      name: 'kind',
      title: 'Kind',
      type: 'string',
      options: {list: [
        {title: 'Image', value: 'image'},
        {title: 'Video URL', value: 'video'},
      ]},
      initialValue: 'image'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {name: 'alt', title: 'Alt', type: 'string'},
      ],
      hidden: ({parent}) => parent?.kind !== 'image'
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      hidden: ({parent}) => parent?.kind !== 'video'
    }),
  ]
})


