import HomePage from "./home";
import { getAllTSGs } from "@/lib/sanity/client";

export default async function IndexPage() {
  const tsgs = await getAllTSGs();
  return <HomePage tsgs={tsgs} />;
}

// export const revalidate = 60;
