import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { createClient } from "@sanity/client";

import styles from "./styles/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "preload", href: "/fonts/PPNikkeiJournal-Regular.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
  { rel: "preload", href: "/fonts/PPNikkeiJournal-Ultrabold.woff", as: "font", type: "font/woff", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: styles },
];

type SettingsDoc = {
  brandColors?: { editor?: string; grey?: string; dark?: string; light?: string }
}

export async function loader({}: LoaderFunctionArgs) {
  const projectId = process.env.SANITY_PROJECT_ID
  const dataset = process.env.SANITY_DATASET
  if (!projectId || !dataset) return { cssVars: "" }
  const client = createClient({ projectId, dataset, apiVersion: '2023-05-03', useCdn: true })
  const settings = await client.fetch<SettingsDoc>(`*[_type=="settings"][0]{brandColors}`)
  const colors = settings?.brandColors || {}
  const cssVars = [
    colors.editor ? `--color-editor:${colors.editor}` : null,
    colors.grey ? `--color-grey:${colors.grey}` : null,
    colors.dark ? `--color-dark:${colors.dark}` : null,
    colors.light ? `--color-light:${colors.light}` : null,
  ].filter(Boolean).join(';')
  return { cssVars }
}

export default function App() {
  const data = useLoaderData<typeof loader>() as { cssVars?: string }
  const styleAttr = data?.cssVars ? { style: { cssText: `:root{${data.cssVars}}` } as any } : {}
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Inject runtime CSS variables from Sanity */}
        {data?.cssVars ? <style {...styleAttr} /> : null}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
