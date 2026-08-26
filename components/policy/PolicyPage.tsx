import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { LuScale } from "react-icons/lu";
import type { PolicyContent } from "@/lib/policies";
import ShopHeader from "@/components/cart/ShopHeader";
import Footer from "@/components/Footer";

const OTHER_POLICIES = [
  { label: "Press Release", href: "/press-release" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function PolicyPage({ content }: { content: PolicyContent }) {
  return (
    <main className="min-h-screen bg-ivory">
      <ShopHeader backHref="/" backLabel="Back to Home" />

      <section className="section-pad-sm">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_280px] lg:gap-16">
            {/* Main content */}
            <div className="min-w-0">
              <span className="eyebrow">
                <LuScale size={15} />
                {content.eyebrow}
              </span>
              <h1 className="mt-6 font-serif text-4xl leading-tight text-navy lg:text-5xl">
                {content.title}
              </h1>
              <p className="mt-3 text-[13px] uppercase tracking-[0.12em] text-navy/45">
                Last updated {content.updated}
              </p>

              {content.intro && (
                <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-navy/70">
                  {content.intro}
                </p>
              )}

              <div className="mt-10 divide-y divide-sand rounded-[28px] border border-sand bg-white">
                {content.sections.map((s) => (
                  <div key={s.heading} className="p-7 sm:p-8">
                    <h3 className="font-serif text-2xl text-navy">
                      {s.heading}
                    </h3>
                    {s.body && (
                      <p className="mt-3 text-[15.5px] leading-relaxed text-navy/70">
                        {s.body}
                      </p>
                    )}
                    {s.list && (
                      <ul className="mt-4 space-y-2.5">
                        {s.list.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-[15.5px] leading-relaxed text-navy/70"
                          >
                            <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-lime/50 text-navy">
                              <FiCheck size={12} />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.note && (
                      <p className="mt-4 rounded-xl bg-beige/60 px-4 py-3 text-[13.5px] leading-relaxed text-navy/75">
                        {s.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <p className="mx-auto mt-10 max-w-2xl text-[12px] uppercase tracking-[0.14em] text-navy/45">
                For laboratory R&amp;D use only. Not for human or veterinary
                consumption.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[24px] border border-sand bg-white p-6">
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-navy/50">
                  Legal &amp; Policies
                </p>
                <ul className="mt-4 space-y-1">
                  {OTHER_POLICIES.map((p) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className={`block rounded-xl px-3 py-2.5 text-[15px] transition-colors ${
                          p.href === `/${content.slug}`
                            ? "bg-beige font-medium text-navy"
                            : "text-navy/65 hover:bg-beige/60 hover:text-navy"
                        }`}
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-[24px] border border-sand bg-navy p-6 text-ivory">
                <p className="font-serif text-xl text-lime">Need help?</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ivory/70">
                  Reach our research support team any time.
                </p>
                <a
                  href="mailto:support@voralabs.com"
                  className="mt-4 inline-block text-[15px] font-medium text-lime hover:underline"
                >
                  support@voralabs.com
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
