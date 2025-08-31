import React from 'react'
import { Link } from '@remix-run/react'
import type { SerializeFrom } from '@remix-run/node'

type CTA = { label?: string; kind?: 'internal'|'external'; internal?: { _ref?: string }; external?: string }

export function HeroHeadline({ eyebrow, headline, subcopy, cta }: { eyebrow?: string; headline: string; subcopy?: string; cta?: CTA }) {
  const parts = headline.split(' ')
  const accentIndex = parts.findIndex((p) => /cool|bold|red/i.test(p))
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {eyebrow ? <p className="mb-4 tracking-wider uppercase text-grey">{eyebrow}</p> : null}
      <h1 className="text-h1 text-dark">
        {parts.map((w, i) => (
          <span key={i} className={i === accentIndex ? 'text-editor' : undefined}>{w} </span>
        ))}
      </h1>
      {subcopy ? <p className="mt-6 max-w-2xl text-body text-grey">{subcopy}</p> : null}
      {cta?.label ? (
        <div className="mt-10">
          <a href="#contact" className="inline-block bg-editor text-light px-5 py-3 rounded-md text-btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-editor">
            {cta.label}
          </a>
        </div>
      ) : null}
    </section>
  )
}


