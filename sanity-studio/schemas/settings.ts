import {defineField, defineType} from 'sanity'
import typeStyle from './objects/typeStyle'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  // singleton: use fixed ID and hide create/duplicate
  options: {singleton: true},
  fields: [
    defineField({
      name: 'brandColors',
      title: 'Brand Colors',
      type: 'object',
      fields: [
        {name: 'editor', title: 'Editor', type: 'string', description: 'Hex, e.g. #f14747'},
        {name: 'grey', title: 'Grey', type: 'string'},
        {name: 'dark', title: 'Dark', type: 'string'},
        {name: 'light', title: 'Light', type: 'string'},
      ],
    }),
    defineField({
      name: 'fontPrimary',
      title: 'Primary Font Family',
      type: 'string',
      description: 'e.g. "PP Nikkei Journal" with fallbacks handled in code',
    }),
    defineField({ name: 'globalSeo', title: 'Global SEO', type: 'seo'}),
    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'array',
      of: [{type: 'link'}],
    }),
    defineField({
      name: 'footer',
      title: 'Footer Links',
      type: 'array',
      of: [{type: 'link'}],
    }),
    defineField({
      name: 'typeScale',
      title: 'Type Scale',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({name: 'h1', type: 'typeStyle'}),
        defineField({name: 'pb', type: 'typeStyle'}),
        defineField({name: 'h3', type: 'typeStyle'}),
        defineField({name: 'h4', type: 'typeStyle'}),
        defineField({name: 'btn', type: 'typeStyle'}),
        defineField({name: 'p', type: 'typeStyle'}),
      ],
    }),
    defineField({
      name: 'radii',
      title: 'Radii',
      type: 'object',
      fields: [
        {name: 'sm', type: 'string'},
        {name: 'md', type: 'string'},
        {name: 'lg', type: 'string'},
        {name: 'xl', type: 'string'},
      ],
    }),
    defineField({
      name: 'shadows',
      title: 'Shadows',
      type: 'object',
      fields: [
        {name: 'sm', type: 'string'},
        {name: 'md', type: 'string'},
        {name: 'lg', type: 'string'},
      ],
    }),
    defineField({name: 'containerWidth', title: 'Container Width', type: 'string'}),
    defineField({name: 'gridGap', title: 'Grid Gap', type: 'string'}),
  ],
})


