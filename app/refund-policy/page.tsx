import type { Metadata } from "next";
import { REFUND_POLICY } from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";
import PolicyPage from "@/components/policy/PolicyPage";

export const metadata: Metadata = pageMetadata({
  path: "/refund-policy",
  title: "Returns & Refunds for Research Peptides | Vora Labs",
  description:
    "Read the Vora Labs Refund Policy for information on eligible returns, refunds, damaged or incorrect orders, and customer support.",
});

export default function RefundPolicyPage() {
  return <PolicyPage content={REFUND_POLICY} />;
}
