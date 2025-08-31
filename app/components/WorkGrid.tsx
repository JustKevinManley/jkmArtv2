import React from 'react'
import { urlFor, buildSrcSet, sizesAttr } from '~/utils/sanityImage'

type GridItem = {
  _id: string
  title?: string
  category?: string
  mainImage?: any
  slug?: { current: string }
}

export function WorkGrid({ items = [] }: { items?: GridItem[] }) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item._id} className="group relative overflow-hidden rounded-md bg-dark/5">
            {item.mainImage ? (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                src={urlFor(item.mainImage).width(640).fit('max').auto('format').url() || ''}
                srcSet={buildSrcSet(item.mainImage)}
                sizes={sizesAttr()}
                loading="lazy"
                decoding="async"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-baseline justify-between">
              <h3 className="text-h4 text-light">{item.title}</h3>
              {item.category ? <span className="text-h4 text-editor">{item.category}</span> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}


