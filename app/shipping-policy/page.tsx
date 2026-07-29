import type { Metadata } from "next";
import { SHIPPING_POLICY } from "@/lib/policies";
import PolicyPage from "@/components/policy/PolicyPage";

export const metadata: Metadata = {
  title: "Shipping Policy — Vora Labs",
  description:
    "How Vora Labs processes, dispatches, and delivers research peptide orders.",
};

export default function ShippingPolicyPage() {
  return <PolicyPage content={SHIPPING_POLICY} />;
}
