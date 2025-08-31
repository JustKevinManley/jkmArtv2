import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'marquee',
  title: 'Marquee',
  type: 'object',
  fields: [
    defineField({name: 'text', title: 'Text', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'alternateText', title: 'Alternate Text', type: 'string'}),
    defineField({name: 'speed', title: 'Speed', type: 'number', initialValue: 20}),
  ],
})


