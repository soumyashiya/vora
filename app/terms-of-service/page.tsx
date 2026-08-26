import type { Metadata } from "next";
import { TERMS_OF_SERVICE } from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";
import PolicyPage from "@/components/policy/PolicyPage";

export const metadata: Metadata = pageMetadata({
  path: "/terms-of-service",
  title: "Terms of Service | Vora Labs",
  description:
    "The Terms and Conditions governing your use of voralabs.com.",
});

export default function TermsOfServicePage() {
  return <PolicyPage content={TERMS_OF_SERVICE} />;
}
