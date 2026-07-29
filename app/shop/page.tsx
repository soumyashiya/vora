import type { Metadata } from "next";
import { LuBadgeCheck, LuFlaskConical, LuShieldCheck } from "react-icons/lu";
import { TRUST_ITEMS } from "@/lib/data";
import ShopHeader from "@/components/cart/ShopHeader";
import ShopGrid from "@/components/shop/ShopGrid";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shop — Vora Labs",
  description:
    "Browse the full Vora Labs research peptide catalogue. Janoshik tested, 99%+ HPLC verified purity, batch-level Certificate of Analysis on every release.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <ShopHeader backHref="/" backLabel="Back to Home" />

      <section className="pb-[clamp(60px,8vw,130px)] pt-6 lg:pt-8">
        <div className="container-x">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <span className="eyebrow">
              <LuFlaskConical size={15} />
              Full Catalogue
            </span>
            <h1 className="display-2 text-navy">Research Peptides, Verified.</h1>
            <p className="text-[17px] leading-relaxed text-navy/65">
              Every compound is filled to precise concentration, HPLC analysed
              in-house, then independently verified by Janoshik before release —
              engineered for precision, validated by science.
            </p>
          </div>

          <div className="mt-16">
            <ShopGrid />
          </div>

          {/* Trust strip */}
          <div className="mt-24 rounded-[28px] border border-sand bg-white p-8 sm:p-10">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-beige text-navy">
                <LuShieldCheck size={22} />
              </span>
              <h2 className="font-serif text-2xl text-navy">
                Every Batch, Independently Verified
              </h2>
              <p className="max-w-lg text-navy/60">
                Each unit is batch-referenced end-to-end and released only
                after passing identity, purity and appearance criteria.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {TRUST_ITEMS.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-sand bg-beige/60 px-4 py-2 text-[13px] font-medium text-navy"
                >
                  <LuBadgeCheck size={14} className="text-navy/50" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-[12px] uppercase tracking-[0.14em] text-navy/45">
            For laboratory R&amp;D use only — not for human or veterinary
            consumption
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
