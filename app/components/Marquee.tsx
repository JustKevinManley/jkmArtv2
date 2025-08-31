import React from 'react'

export function Marquee({ text, alternateText, speed = 20 }: { text: string; alternateText?: string; speed?: number }) {
  const duration = Math.max(5, Math.min(60, speed))
  return (
    <section className="overflow-hidden border-t border-b border-grey/20 select-none" aria-label="marquee">
      <div className="motion-safe:animate-marquee whitespace-nowrap py-4" style={{ ['--marquee-duration' as any]: `${duration}s` }}>
        <span className="mx-8 text-h3 font-primary">{text}</span>
        <span className="mx-8 text-h3 font-primary text-editor">{alternateText ?? text}</span>
        <span className="mx-8 text-h3 font-primary">{text}</span>
        <span className="mx-8 text-h3 font-primary text-editor">{alternateText ?? text}</span>
      </div>
      <noscript>
        <div className="py-4">
          <p className="text-h3">{text}</p>
        </div>
      </noscript>
    </section>
  )
}


