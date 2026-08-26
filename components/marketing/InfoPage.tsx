import Image from "next/image";
import { LuSparkles } from "react-icons/lu";
import type { InfoContent } from "@/lib/pages";
import ShopHeader from "@/components/cart/ShopHeader";
import Footer from "@/components/Footer";
import { LimeButton, GhostButton } from "@/components/ui/Bits";

export default function InfoPage({ content }: { content: InfoContent }) {
  // Pick the column count that divides evenly — 6 features sit as 3×2, 4 sit as
  // a single row of 4. A count that doesn't divide strands an orphan card.
  const n = content.features.length;
  const featureCols =
    n % 3 === 0 ? "lg:grid-cols-3" : n % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-2";

  const [firstClosing, ...restClosing] = content.closingParagraphs ?? [];

  return (
    <main className="min-h-screen bg-ivory">
      <ShopHeader backHref="/" backLabel="Back to Home" />

      {/* Intro — heading and body sit side by side so the right half isn't empty */}
      <section className="section-pad-sm relative overflow-hidden">
        <div className="absolute inset-0 topo-grid opacity-50" />
        <div className="container-x relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <span className="eyebrow">
                <LuSparkles size={15} />
                {content.eyebrow}
              </span>
              <h1 className="display-2-sm mt-6 max-w-[16ch] text-navy">
                {content.title}
              </h1>
            </div>

            <div>
              <p className="text-[17px] leading-relaxed text-navy/70">
                {content.lead}
              </p>
              {content.paragraphs.map((p) => (
                <p key={p} className="mt-4 text-[17px] leading-relaxed text-navy/70">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* 16:9 matches the source frame, so the composition isn't cropped */}
          {content.image && (
            <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-[28px] lg:mt-14">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                priority
                quality={90}
                sizes="(max-width: 1320px) 100vw, 1320px"
                className="object-cover object-center"
              />
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="bg-beige/50 py-16 lg:py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-navy lg:text-4xl">
              {content.featuresTitle}
            </h2>
            {content.featuresIntro && (
              <p className="mt-4 text-[16px] leading-relaxed text-navy/70">
                {content.featuresIntro}
              </p>
            )}
          </div>

          <div className={`mt-10 grid gap-5 sm:grid-cols-2 ${featureCols}`}>
            {content.features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-[26px] border border-sand bg-white p-7"
                >
                  <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#cdee7a] text-navy">
                    <Icon size={26} />
                  </span>
                  <h3 className="font-serif text-2xl text-navy">{f.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy/70">
                    {f.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing — copy left, actions right, so the card doesn't run empty */}
      {firstClosing && (
        <section className="py-16 lg:py-20">
          <div className="container-x">
            <div className="rounded-[28px] border border-sand bg-white p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                {content.closingTitle ? (
                  <>
                    <h2 className="font-serif text-3xl text-navy lg:text-4xl">
                      {content.closingTitle}
                    </h2>
                    <p className="mt-5 text-[17px] leading-relaxed text-navy/70">
                      {firstClosing}
                    </p>
                  </>
                ) : (
                  // no heading — let the statement itself carry the block
                  <p className="font-serif text-2xl text-navy lg:text-3xl">
                    {firstClosing}
                  </p>
                )}
                {restClosing.map((p) => (
                  <p
                    key={p}
                    className="mt-4 text-[17px] leading-relaxed text-navy/70"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-0 lg:flex-none">
                <LimeButton href="/products">Browse peptides</LimeButton>
                <GhostButton href="/wholesale">Wholesale Enquiries</GhostButton>
              </div>
            </div>

            <p className="mt-10 text-[12px] uppercase tracking-[0.14em] text-navy/45">
              {content.kicker}
            </p>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
