import React from 'react'

export function PullQuote({ text, accent }: { text: string; accent?: boolean }) {
  const [head, tail] = text.split(/([.!?]\s.*$)/)
  return (
    <blockquote className="container mx-auto px-4 py-12">
      <p className="text-h3 text-dark font-primary">
        {head}
        {tail ? <span className={accent ? 'text-editor' : ''}>{tail}</span> : null}
      </p>
    </blockquote>
  )
}


