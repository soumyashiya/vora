import type { Metadata } from "next";
import { TERMS_OF_SERVICE } from "@/lib/policies";
import PolicyPage from "@/components/policy/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service — Vora Labs",
  description: "The terms and conditions governing your use of voralabs.com.",
};

export default function TermsOfServicePage() {
  return <PolicyPage content={TERMS_OF_SERVICE} />;
}
