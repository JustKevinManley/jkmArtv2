import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'canonical', title: 'Canonical URL', type: 'url'}),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {name: 'alt', title: 'Alt', type: 'string'}
      ]
    }),
    defineField({name: 'twitterHandle', title: 'Twitter Handle', type: 'string'}),
  ],
})


