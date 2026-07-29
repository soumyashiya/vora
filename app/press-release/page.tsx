import type { Metadata } from "next";
import { PRESS_RELEASE } from "@/lib/policies";
import PolicyPage from "@/components/policy/PolicyPage";

export const metadata: Metadata = {
  title: "Press Release — Vora Labs",
  description:
    "Official statements from Vora Labs on our research-only status, regulatory standing, and brand protection.",
};

export default function PressReleasePage() {
  return <PolicyPage content={PRESS_RELEASE} />;
}
