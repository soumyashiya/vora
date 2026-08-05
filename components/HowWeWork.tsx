"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import {
  LuFlaskConical,
  LuDroplets,
  LuActivity,
  LuShieldCheck,
} from "react-icons/lu";
import { STEPS } from "@/lib/data";
import { SectionHeading, LimeButton } from "./ui/Bits";

const ICONS = [LuFlaskConical, LuDroplets, LuActivity, LuShieldCheck];

export default function HowWeWork() {
  return (
    <section id="process" className="section-pad relative overflow-hidden bg-navy">
      <span className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-lime/10 blur-[100px]" />
      <span className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-lime/10 blur-[100px]" />

      <div className="container-x relative">
        <SectionHeading eyebrow="Quality Assurance" title="Verified Through Testing" light />

        <div className="relative mt-20">
          <span className="absolute left-7 top-3 bottom-3 hidden w-px bg-gradient-to-b from-lime/40 via-lime/15 to-transparent sm:block" />

          <div className="flex flex-col">
            {STEPS.map((s, i) => {
              const Icon = ICONS[i];
              const isLast = i === STEPS.length - 1;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                  className="relative flex flex-col gap-6 sm:flex-row sm:gap-10"
                >
                  <div className="relative z-10 flex flex-none items-center gap-4 sm:w-[140px] sm:flex-col sm:items-start">
                    <span className="grid h-14 w-14 flex-none place-items-center rounded-full border-2 border-lime bg-navy font-serif text-lg text-lime">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-lime text-navy sm:mt-1">
                      <Icon size={22} />
                    </span>
                  </div>

                  <div
                    className={`flex-1 pb-14 sm:pb-16 ${
                      isLast ? "" : "border-b border-white/10"
                    }`}
                  >
                    <h3 className="font-serif text-3xl text-ivory lg:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ivory/65">
                      {s.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {s.points.map((pt) => (
                        <span key={pt} className="chip gap-2">
                          <span className="grid h-4 w-4 flex-none place-items-center rounded-full bg-lime text-navy">
                            <FaCheck size={7} />
                          </span>
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-5 text-center">
          <p className="max-w-md text-[15px] text-ivory/65">
            Every stage is logged, batch-referenced and available for independent review.
          </p>
          <LimeButton href="#verify">View Lab Reports</LimeButton>
        </div>
      </div>
    </section>
  );
}
