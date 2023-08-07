import Archive from "./archive";

import { getPaginatedTSGs } from "@/lib/sanity/client";

const POSTS_PER_PAGE = 6;

export default async function ArchivePage() {
  const tsgs = await getPaginatedTSGs(POSTS_PER_PAGE);
  return <Archive tsgs={tsgs} />;
}

// export const revalidate = 60;
