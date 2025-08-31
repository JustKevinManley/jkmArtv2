import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSanityClient } from "~/utils/sanity.server";
import { HeroHeadline } from "~/components/HeroHeadline";
import { Marquee } from "~/components/Marquee";
import { WorkGrid } from "~/components/WorkGrid";
import { PullQuote } from "~/components/PullQuote";
import { ContactForm } from "~/components/ContactForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Your Project Name" },
    { name: "description", content: "Welcome to your Remix with Sanity integration!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const client = getSanityClient();
  const data = await client.fetch(`{
    "settings": *[_type=="settings"][0]{nav, footer},
    "page": *[_type=="page" && _id=="home" || slug.current=="home"][0]{
      title,
      blocks[]{
        ...,
        media->{..., asset->},
        items[]->{ _id, title, slug, mainImage, hero, year, client }
      }
    }
  }`)
  return data
}

export default function Index() {
  const data = useLoaderData<typeof loader>() as any
  const blocks = data?.page?.blocks || []
  return (
    <main>
      {blocks.map((b: any, idx: number) => {
        switch (b._type) {
          case 'heroHeadline':
            return <>
              <HeroHeadline key={idx} eyebrow={b.eyebrow} headline={b.headline} subcopy={b.subcopy} cta={b.cta} accentWords={b.accentWords} />
            </>
          case 'marquee':
            return <Marquee key={idx} text={b.text} alternateText={b.alternateText} speed={b.speed} />
          case 'workGrid':
            return <WorkGrid key={idx} items={b.items} />
          case 'pullQuote':
            return <PullQuote key={idx} text={b.text} accent={b.accent} />
          case 'portableText':
            return <section key={idx} className="container mx-auto px-4 py-8 text-body" />
          case 'contactFormIntro':
            return <ContactForm key={idx} />
          default:
            return null
        }
      })}
    </main>
  )
}
