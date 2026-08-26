import type { Metadata } from "next";
import { PRESS_RELEASE } from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";
import PolicyPage from "@/components/policy/PolicyPage";

export const metadata: Metadata = pageMetadata({
  path: "/press-release",
  title: "Research Peptides, COAs & Quality Assurance",
  description:
    "Official public statement regarding recent news coverage, research peptides, research compounds, Vora Lab testing.",
});

export default function PressReleasePage() {
  return <PolicyPage content={PRESS_RELEASE} />;
}
