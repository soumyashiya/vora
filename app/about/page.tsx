import type { Metadata } from "next";
import { ABOUT_PAGE } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import InfoPage from "@/components/marketing/InfoPage";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About — Vora Labs",
  description:
    "Vora Labs supplies research-grade peptide compounds for controlled laboratory R&D, with a focus on documented quality, independent testing, and traceable sourcing.",
});

export default function AboutPage() {
  return <InfoPage content={ABOUT_PAGE} />;
}
