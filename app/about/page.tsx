import About from "components/about";

import { Client } from "libs/client";

import { SectionContent } from "types/cms/section";

async function fetchSections(): Promise<SectionContent[]> {
  const res = await Client.getList<SectionContent>({ endpoint: "about" });
  return res.contents;
}

export default async function AboutPage() {
  const sections = await fetchSections();
  return <About contents={sections} />;
}
