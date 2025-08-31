import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactIntro',
  title: 'Contact Intro',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string'}),
    defineField({name: 'sub', title: 'Sub', type: 'string'}),
  ],
})



