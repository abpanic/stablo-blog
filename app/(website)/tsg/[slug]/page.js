import TSGPage from "./default";

import { getAllTSGsSlugs, getTSGBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllTSGsSlugs();
}

export async function generateMetadata({ params }) {
  const tsg = await getTSGBySlug(params.slug);
  return { title: tsg.title };
}

export default async function TSGDefault({ params }) {
  const tsg = await getTSGBySlug(params.slug);
  return <TSGPage tsg={tsg} />;
}

// export const revalidate = 60;
