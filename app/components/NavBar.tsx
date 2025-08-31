import React from 'react'
import { Link } from '@remix-run/react'

export function NavBar({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const base = variant === 'dark' ? 'text-light' : 'text-dark'
  const hover = 'hover:text-editor focus-visible:text-editor'
  return (
    <nav className={`w-full sticky top-0 z-50 ${base}`} aria-label="Primary">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className={`inline-flex items-center gap-2 ${hover} focus:outline-none focus-visible:ring-2 focus-visible:ring-editor focus-visible:ring-offset-2`}> 
          <img src="/images/logo-jkm.svg" alt="JKM" className="h-6 w-auto" />
        </Link>
        <ul className="flex items-center gap-8 text-h4">
          <li>
            <a href="#work" className={`${hover} focus:outline-none focus-visible:ring-2 focus-visible:ring-editor focus-visible:ring-offset-2`}>WORK.</a>
          </li>
          <li>
            <a href="#words" className={`${hover} focus:outline-none focus-visible:ring-2 focus-visible:ring-editor focus-visible:ring-offset-2`}>WORDS.</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}



