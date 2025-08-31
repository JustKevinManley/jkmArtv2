import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'role', title: 'Role', type: 'array', of: [{type:'string'}]}),
    defineField({ name: 'client', title: 'Client', type: 'string'}),
    defineField({ name: 'year', title: 'Year', type: 'string'}),
    defineField({ name: 'hero', title: 'Hero', type: 'media'}),
    defineField({ name: 'introCopy', title: 'Intro Copy', type: 'portableText'}),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'portableText'},
        {type: 'pullQuote'},
        {type: 'media'},
        {type: 'workGrid'},
      ],
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
