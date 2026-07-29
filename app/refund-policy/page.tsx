import type { Metadata } from "next";
import { REFUND_POLICY } from "@/lib/policies";
import PolicyPage from "@/components/policy/PolicyPage";

export const metadata: Metadata = {
  title: "Refund Policy — Vora Labs",
  description:
    "Vora Labs returns and refund policy for research peptide orders.",
};

export default function RefundPolicyPage() {
  return <PolicyPage content={REFUND_POLICY} />;
}
