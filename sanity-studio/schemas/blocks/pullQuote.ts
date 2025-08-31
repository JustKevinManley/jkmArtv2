import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pullQuote',
  title: 'Pull Quote',
  type: 'object',
  fields: [
    defineField({name: 'text', title: 'Text', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({name: 'accent', title: 'Accent?', type: 'boolean'}),
  ],
})



