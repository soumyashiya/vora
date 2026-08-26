import type { Metadata } from "next";
import { PRIVACY_POLICY } from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";
import PolicyPage from "@/components/policy/PolicyPage";

export const metadata: Metadata = pageMetadata({
  path: "/privacy-policy",
  title: "Research Peptides, Research Compounds | Vora Labs",
  description:
    "Explore Vora Labs for premium research peptides and research compounds. Laboratory research products, access Certificates of Analysis (COAs).",
});

export default function PrivacyPolicyPage() {
  return <PolicyPage content={PRIVACY_POLICY} />;
}
