import React from 'react'
import { Form, useActionData, useNavigation } from '@remix-run/react'

export function ContactForm() {
  const action = useActionData<{ ok?: boolean; error?: string }>()
  const nav = useNavigation()
  const busy = nav.state !== 'idle'
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <h2 className="sr-only">Contact</h2>
      <Form method="post" action="/contact" className="max-w-xl space-y-4" replace>
        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="block text-sm text-grey">Name</span>
            <input name="name" type="text" required className="mt-1 block w-full rounded-md border border-grey/30 bg-white px-3 py-2" />
          </label>
          <label className="block">
            <span className="block text-sm text-grey">Email</span>
            <input name="email" type="email" required className="mt-1 block w-full rounded-md border border-grey/30 bg-white px-3 py-2" />
          </label>
          <label className="block">
            <span className="block text-sm text-grey">Message</span>
            <textarea name="message" rows={5} required className="mt-1 block w-full rounded-md border border-grey/30 bg-white px-3 py-2" />
          </label>
          {/* Honeypot */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        </div>
        <div className="flex items-center gap-3">
          <button disabled={busy} className="bg-editor text-light px-5 py-3 rounded-md text-btn">
            {busy ? 'Sending…' : "Let's do this"}
          </button>
          <a href="mailto:hello@jkm.art" className="text-grey underline">or email directly</a>
        </div>
        <div role="status" aria-live="polite" className="text-sm">
          {action?.ok ? <span className="text-green-700">Thanks! I’ll reply shortly.</span> : action?.error ? <span className="text-red-600">{action.error}</span> : null}
        </div>
      </Form>
    </section>
  )
}


