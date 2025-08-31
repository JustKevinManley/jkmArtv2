import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [
        {type: 'heroHeadline'},
        {type: 'marquee'},
        {type: 'workGrid'},
        {type: 'pullQuote'},
        {type: 'richTextBlock'},
        {type: 'contactIntro'},
      ],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})


