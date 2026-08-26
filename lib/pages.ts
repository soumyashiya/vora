// Content for the standalone marketing pages (About, Why Us) rendered by
// components/marketing/InfoPage.tsx — kept beside lib/policies.ts so all
// long-form page copy lives in one place.

import {
  LuBadgeCheck,
  LuFileCheck,
  LuFlaskConical,
  LuMicroscope,
  LuScanBarcode,
  LuShieldCheck,
  LuSnowflake,
} from "react-icons/lu";
import type { IconType } from "react-icons";

export type InfoFeature = {
  title: string;
  body: string;
  icon: IconType;
};

export type InfoContent = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  /** Optional banner shown under the intro. Omit for a text-only page. */
  image?: { src: string; alt: string };
  featuresTitle: string;
  featuresIntro?: string;
  features: InfoFeature[];
  closingTitle?: string;
  closingParagraphs?: string[];
  kicker: string;
};

export const ABOUT_PAGE: InfoContent = {
  slug: "about",
  eyebrow: "About Vora Labs",
  title: "Research Built on Transparency",
  lead: "Vora Labs supplies research-grade peptide compounds for controlled laboratory R&D, with a focus on documented quality, independent testing, and traceable sourcing.",
  paragraphs: [
    "We believe researchers should have access to more than a product label. Our approach combines controlled development and filling with analytical testing, batch documentation, and stability-focused handling.",
  ],
  image: {
    src: "/images/update-img/about-hero.webp",
    alt: "NAD+ research compound presentation",
  },
  featuresTitle: "Quality You Can Review",
  featuresIntro:
    "Each stage of our process is designed to provide greater visibility into the research materials we supply.",
  features: [
    {
      title: "Independently Tested",
      body: "Research compounds are evaluated through third-party analytical testing.",
      icon: LuMicroscope,
    },
    {
      title: "Batch Traceable",
      body: "Lot-level information connects products with their supporting documentation.",
      icon: LuScanBarcode,
    },
    {
      title: "Clearly Documented",
      body: "Certificates of analysis and product specifications provide accessible quality data.",
      icon: LuFileCheck,
    },
    {
      title: "Research Focused",
      body: "Our products are developed specifically for controlled laboratory research and R&D applications.",
      icon: LuFlaskConical,
    },
  ],
  closingTitle: "Our Approach",
  closingParagraphs: [
    "From sourcing and formulation to testing and release, we focus on consistency, accountability, and clear information.",
    "Vora Labs research compounds backed by evidence, documentation, and transparency.",
  ],
  kicker: "For laboratory R&D use only. Not for human or veterinary consumption.",
};

export const WHY_US_PAGE: InfoContent = {
  slug: "why-us",
  eyebrow: "Why Choose Vora Labs?",
  title: "Research Quality You Can Verify",
  lead: "Choosing a research peptide supplier should not come down to a product label alone. Vora Labs focuses on the information behind every batch, giving researchers greater visibility into sourcing, testing, and product quality.",
  paragraphs: [],
  image: {
    src: "/images/update-img/compound-seo.webp",
    alt: "Analytical microscopes lined up on a Vora Labs laboratory bench",
  },
  featuresTitle: "What Sets Us Apart",
  features: [
    {
      title: "Independent Verification",
      body: "Our research compounds undergo independent analytical testing, with applicable batches supported by Janoshik analysis and certificates of analysis.",
      icon: LuShieldCheck,
    },
    {
      title: "Batch-Level Traceability",
      body: "Every released batch is assigned identifiable lot information, making it easier to connect a research product with its corresponding quality documentation.",
      icon: LuScanBarcode,
    },
    {
      title: "Clear Product Specifications",
      body: "We provide straightforward information on composition, purity, and other applicable specifications so researchers can evaluate products using documented data.",
      icon: LuFileCheck,
    },
    {
      title: "Stability-Focused Formulation",
      body: "Our formulations and handling processes are developed with product stability and integrity in mind throughout storage and transit.",
      icon: LuSnowflake,
    },
    {
      title: "Controlled Manufacturing",
      body: "From filling through final release, our processes are designed around consistency, quality control, and documented production standards.",
      icon: LuBadgeCheck,
    },
    {
      title: "Research-First Approach",
      body: "Vora Labs is focused on laboratory R&D, providing research compounds for controlled scientific applications rather than making consumer health or therapeutic claims.",
      icon: LuMicroscope,
    },
  ],
  closingParagraphs: ["Independent testing. Traceable batches. Documented quality."],
  kicker: "For laboratory R&D use only. Not for human or veterinary consumption.",
};
