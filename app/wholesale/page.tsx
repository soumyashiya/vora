import type { Metadata } from "next";
import { LuSparkles } from "react-icons/lu";
import { pageMetadata } from "@/lib/seo";
import ShopHeader from "@/components/cart/ShopHeader";
import Footer from "@/components/Footer";
import WholesaleForm from "@/components/marketing/WholesaleForm";

export const metadata: Metadata = pageMetadata({
  path: "/wholesale",
  title: "Wholesale Enquiries — Vora Labs",
  description:
    "Bulk and recurring supply of research-grade peptide compounds for laboratories, universities and research organisations. Send a wholesale enquiry to Vora Labs.",
});

export default function WholesalePage() {
  return (
    <main className="min-h-screen bg-ivory">
      <ShopHeader backHref="/" backLabel="Back to Home" />

      <section className="section-pad-sm relative overflow-hidden">
        <div className="absolute inset-0 topo-grid opacity-50" />
        <div className="container-x relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="eyebrow">
              <LuSparkles size={15} />
              Wholesale Enquiries
            </span>
            <h1 className="display-2-sm mt-6 text-navy">
              Bulk Supply for Research Programmes
            </h1>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <WholesaleForm />
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-[12px] uppercase tracking-[0.14em] text-navy/45">
            For laboratory R&amp;D use only. Not for human or veterinary
            consumption.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
