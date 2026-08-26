import type { Metadata } from "next";
import { SHIPPING_POLICY } from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";
import PolicyPage from "@/components/policy/PolicyPage";

export const metadata: Metadata = pageMetadata({
  path: "/shipping-policy",
  title: "Shipping Policy | Vora Labs Research Compounds",
  description:
    "Review the Vora Labs Shipping Policy for information on ordering, payment methods, order processing.",
});

export default function ShippingPolicyPage() {
  return <PolicyPage content={SHIPPING_POLICY} />;
}
