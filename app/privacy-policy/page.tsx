import type { Metadata } from "next";
import { PRIVACY_POLICY } from "@/lib/policies";
import PolicyPage from "@/components/policy/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Vora Labs",
  description:
    "How Vora Labs collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return <PolicyPage content={PRIVACY_POLICY} />;
}
