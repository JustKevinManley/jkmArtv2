import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { createClient } from '@sanity/client'

const projectId = typeof process !== 'undefined' ? process.env.SANITY_PROJECT_ID : undefined
const dataset = typeof process !== 'undefined' ? process.env.SANITY_DATASET : undefined

const client = createClient({ projectId: projectId || '', dataset: dataset || '', apiVersion: '2023-05-03', useCdn: true })
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export function buildSrcSet(source: SanityImageSource, widths: number[] = [400, 640, 828, 1080, 1280, 1536, 1920]) {
  return widths
    .map((w) => `${urlFor(source).width(w).fit('max').auto('format').url()} ${w}w`)
    .join(', ')
}

export function sizesAttr(defaultSizes: string = '(min-width: 1024px) 50vw, 100vw') {
  return defaultSizes
}


