import { createClient } from '@sanity/client'

export function getSanityClient() {
  const projectId = process.env.SANITY_PROJECT_ID
  const dataset = process.env.SANITY_DATASET
  if (!projectId || !dataset) throw new Error('Missing SANITY env vars')
  return createClient({ projectId, dataset, apiVersion: '2023-05-03', useCdn: true })
}



