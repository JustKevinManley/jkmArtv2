import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'typeStyle',
  title: 'Type Style',
  type: 'object',
  fields: [
    defineField({name: 'min', title: 'Min Size', type: 'string', description: 'e.g. 1rem'}),
    defineField({name: 'max', title: 'Max Size', type: 'string', description: 'e.g. 7.5rem'}),
    defineField({name: 'lineHeight', title: 'Line Height', type: 'string', description: 'e.g. 1, 1.1, 1.25'}),
    defineField({name: 'letterSpacing', title: 'Letter Spacing', type: 'string', description: 'e.g. -0.02em'}),
    defineField({name: 'weight', title: 'Font Weight', type: 'string', description: 'e.g. 400, 700, Ultrabold'}),
  ],
})


