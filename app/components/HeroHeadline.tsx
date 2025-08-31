import React from 'react'
import { Link } from '@remix-run/react'
import type { SerializeFrom } from '@remix-run/node'

type CTA = { label?: string; kind?: 'internal'|'external'; internal?: { _ref?: string }; external?: string }

export function HeroHeadline({ eyebrow, headline, subcopy, cta, accentWords = [] }: { eyebrow?: string; headline: string; subcopy?: string; cta?: CTA; accentWords?: string[] }) {
  const words = headline.split(/(\s+)/)
  return (
    <section className="min-h-screen grid grid-cols-12 items-end">
      <div className="col-span-12 md:col-start-8 md:col-span-5 px-[10px] md:px-0 pb-16">
        {eyebrow ? <p className="mb-4 tracking-wider uppercase text-grey">{eyebrow}</p> : null}
        <h1 className="text-h1 text-dark">
          {words.map((w, i) => (
            <span key={i} className={accentWords?.some(a => a && w.toLowerCase().includes(a.toLowerCase())) ? 'text-editor' : undefined}>{w}</span>
          ))}
        </h1>
        {subcopy ? <p className="mt-6 max-w-2xl text-body text-grey">{subcopy}</p> : null}
        {cta?.label ? (
          <div className="mt-6">
            <a href="#contact" className="inline-block bg-editor text-dark px-4 py-2 rounded-md text-btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-editor">
              {cta.label}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  )
}


