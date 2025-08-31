import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroHeadline',
  title: 'Hero Headline',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'accentWords', title: 'Accent Words', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'subcopy', title: 'Subcopy', type: 'text'}),
    defineField({name: 'cta', title: 'CTA', type: 'link'}),
    defineField({name: 'media', title: 'Media', type: 'media'}),
  ],
})


