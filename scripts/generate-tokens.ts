import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import {createClient} from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET

if (!projectId || !dataset) {
  console.error('Missing SANITY_PROJECT_ID or SANITY_DATASET')
  process.exit(1)
}

const client = createClient({ projectId, dataset, apiVersion: '2023-05-03', useCdn: false })

type TypeStyle = {
  min?: string
  max?: string
  lineHeight?: string
  letterSpacing?: string
  weight?: string
}

type SettingsDoc = {
  brandColors?: { editor?: string; grey?: string; dark?: string; light?: string }
  fontPrimary?: string
  typeScale?: { h1?: TypeStyle; pb?: TypeStyle; h3?: TypeStyle; h4?: TypeStyle; btn?: TypeStyle; p?: TypeStyle }
  radii?: Record<string, string>
  shadows?: Record<string, string>
  containerWidth?: string
  gridGap?: string
}

function toCssVars(settings: SettingsDoc) {
  const colors = settings.brandColors || {}
  const lines: string[] = []
  const add = (k: string, v?: string) => { if (v) lines.push(`  --${k}: ${v};`) }
  add('color-editor', colors.editor)
  add('color-grey', colors.grey)
  add('color-dark', colors.dark)
  add('color-light', colors.light)
  add('font-primary', settings.fontPrimary || 'PP Nikkei Journal, ui-serif, Georgia, serif')
  if (settings.containerWidth) add('container-width', settings.containerWidth)
  if (settings.gridGap) add('grid-gap', settings.gridGap)
  const radius = settings.radii || {}
  Object.entries(radius).forEach(([k,v]) => add(`radius-${k}`, v))
  const shadows = settings.shadows || {}
  Object.entries(shadows).forEach(([k,v]) => add(`shadow-${k}`, v))
  const ts = settings.typeScale || {}
  const keys: Array<keyof NonNullable<SettingsDoc['typeScale']>> = ['h1','pb','h3','h4','btn','p']
  keys.forEach((key) => {
    const s = (ts as any)[key] as TypeStyle | undefined
    if (!s) return
    if (s.min && s.max) {
      // clamp(min, 1rem + vw, max) – author provides min/max; middle fluid term left to utilities
      add(`${String(key)}-size-min`, s.min)
      add(`${String(key)}-size-max`, s.max)
    }
    if (s.lineHeight) add(`${String(key)}-leading`, s.lineHeight)
    if (s.letterSpacing) add(`${String(key)}-tracking`, s.letterSpacing)
    if (s.weight) add(`${String(key)}-weight`, s.weight)
  })
  return `:root{\n${lines.join('\n')}\n}`
}

function toTailwindTheme(settings: SettingsDoc) {
  const colors = settings.brandColors || {}
  const theme = {
    colors: {
      editor: `var(--color-editor)`,
      grey: `var(--color-grey)`,
      dark: `var(--color-dark)`,
      light: `var(--color-light)`,
    },
    fontFamily: {
      primary: `var(--font-primary)` as unknown as any,
    },
    extend: {
      borderRadius: {},
      boxShadow: {},
      container: {},
    },
  } as any
  const radii = settings.radii || {}
  Object.entries(radii).forEach(([k,v]) => { theme.extend.borderRadius[k] = `var(--radius-${k})` })
  const shadows = settings.shadows || {}
  Object.entries(shadows).forEach(([k,v]) => { theme.extend.boxShadow[k] = `var(--shadow-${k})` })
  if (settings.containerWidth) theme.extend.container.center = true
  return theme
}

async function main() {
  const settings = await client.fetch<SettingsDoc>(`*[_type=="settings"][0]`)
  if (!settings) {
    console.warn('No settings document found. Skipping token generation.')
    return
  }

  const outDir = path.join(process.cwd(), 'app')
  const genPath = path.join(outDir, 'tokens.generated.ts')
  const cssPath = path.join(outDir, 'tokens.css')

  const cssVars = toCssVars(settings)
  fs.writeFileSync(cssPath, cssVars)

  const theme = toTailwindTheme(settings)
  const gen = `export const theme = ${JSON.stringify(theme, null, 2)} as const\n`
  fs.writeFileSync(genPath, gen)

  const twExtend = {
    extend: {
      colors: theme.colors,
      borderRadius: theme.extend.borderRadius,
      boxShadow: theme.extend.boxShadow,
      fontFamily: {
        primary: ["var(--font-primary)", "ui-serif", "Georgia", "serif"],
      },
    },
  }
  const twPath = path.join(process.cwd(), 'tailwind.theme.cjs')
  const twContent = `module.exports = ${JSON.stringify(twExtend, null, 2)}\n`
  fs.writeFileSync(twPath, twContent)
  console.log('Generated', genPath, 'and', cssPath, 'and', twPath)
}

main().catch((err) => { console.error(err); process.exit(1) })


