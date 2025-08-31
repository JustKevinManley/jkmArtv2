import {defineType, defineField} from 'sanity'

export const heroHeadline = defineType({
  name: 'heroHeadline',
  title: 'Hero Headline',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'accentWords',
      title: 'Accent Words',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Words/phrases in the headline to render in editor red',
    }),
    defineField({name: 'subcopy', title: 'Subcopy', type: 'text'}),
    defineField({name: 'cta', title: 'CTA', type: 'link'}),
    defineField({name: 'media', title: 'Media', type: 'media'}),
  ],
})

export const marquee = defineType({
  name: 'marquee',
  title: 'Marquee',
  type: 'object',
  fields: [
    defineField({name: 'text', title: 'Text', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'alternateText', title: 'Alternate Text', type: 'string'}),
    defineField({name: 'speed', title: 'Speed', type: 'number', initialValue: 1}),
  ],
})

export const workGrid = defineType({
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
        {title: 'Masonry', value: 'masonry'},
        {title: 'Grid', value: 'grid'},
      ]},
      initialValue: 'grid',
    })
  ],
})

export const pullQuote = defineType({
  name: 'pullQuote',
  title: 'Pull Quote',
  type: 'object',
  fields: [
    defineField({name: 'text', title: 'Text', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({name: 'accent', title: 'Accent?', type: 'boolean'}),
  ],
})

export const contactFormIntro = defineType({
  name: 'contactFormIntro',
  title: 'Contact Form Intro',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string'}),
    defineField({name: 'sub', title: 'Sub', type: 'string'}),
  ],
})


