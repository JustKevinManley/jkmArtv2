import project from './project'
import settings from './settings'
import page from './page'
import typeStyle from './objects/typeStyle'
import seo from './objects/seo'
import link from './objects/link'
import media from './objects/media'
import portableText from './objects/portableText'
import { heroHeadline, marquee, workGrid, pullQuote, contactFormIntro } from './objects/blocks'

export const schemaTypes = [
  // documents
  settings,
  page,
  project,
  // objects
  typeStyle,
  seo,
  link,
  media,
  portableText,
  heroHeadline,
  marquee,
  workGrid,
  pullQuote,
  contactFormIntro,
]
