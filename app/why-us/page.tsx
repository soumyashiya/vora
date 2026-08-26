import type { Metadata } from "next";
import { WHY_US_PAGE } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import InfoPage from "@/components/marketing/InfoPage";

export const metadata: Metadata = pageMetadata({
  path: "/why-us",
  title: "Why Us — Vora Labs",
  description:
    "Independent testing, traceable batches and documented quality — why researchers choose Vora Labs for controlled laboratory R&D.",
});

export default function WhyUsPage() {
  return <InfoPage content={WHY_US_PAGE} />;
}
