// Sheet-driven SEO metadata for Vora Labs.
// Titles / descriptions below come from the SEO keyword sheet — keep them in
// sync with that sheet rather than editing copy ad hoc in the route files.

import type { Metadata } from "next";

export const SITE_NAME = "Vora Labs";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vorahealthcare.com";

type PageSeo = {
  title: string;
  description: string;
  /** Route path used to build the canonical URL, e.g. "/products". */
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * Per-product title, meta description and H1, keyed by product slug.
 * `h1` is the on-page heading from the sheet — it deliberately differs from the
 * product name on some products, so the product name is rendered alongside it.
 */
export const PRODUCT_SEO: Record<
  string,
  { title: string; description: string; h1: string }
> = {
  "bpc-157-tb-500-40mg": {
    title: "BPC-157 & TB-500 40mg | Vora Labs",
    description:
      "Explore Vora Labs BPC-157 & TB-500 40mg for muscle, tissue and inflammation pathway research. Janoshik tested. Research use only.",
    h1: "BPC-157 & TB-500 40mg",
  },
  "glow-70mg": {
    title: "GHK Copper Research Peptide, Glow 70mg | Vora Labs",
    description:
      "Vora Labs Glow 70mg GHK-Cu research peptide. GHK copper peptides for skin and glow research. Janoshik tested.",
    h1: "Glow 70mg",
  },
  "nad-1000mg": {
    title: "NAD+ 1,000mg Research Peptide | Vora Labs",
    description:
      "NAD+ 1,000mg by Vora Labs supports research into cellular metabolism, mitochondrial function, DNA repair mechanisms, cell signaling.",
    h1: "Mitochondrial function",
  },
  "retatrutide-20mg": {
    title: "Retatrutide 20mg Peptide | Vora Labs",
    description:
      "Retatrutide 20mg by Vora Labs for peptide research on hormone receptors, metabolic pathways and immune receptors.",
    h1: "research on hormone receptors,",
  },
  "retatrutide-40mg": {
    title: "Retatrutide 40mg | Vora Labs",
    description:
      "Retatrutide 40mg by Vora Labs for peptide research on hormone receptors, metabolic pathways, immune receptors and cell signaling.",
    h1: "Retatrutide 40mg",
  },
  "tirzepatide-40mg": {
    title: "Tirzepatide research products | Vora Labs",
    description:
      "Explore the best research peptides for bodybuilding, their potential research applications, mechanisms of action and important safety considerations.",
    h1: "Metabolic peptide research",
  },
};
