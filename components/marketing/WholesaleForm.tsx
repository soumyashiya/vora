"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

type Status = "idle" | "loading" | "success" | "error";

const FIELD =
  "h-12 w-full rounded-2xl border border-sand bg-white px-4 text-[15px] text-navy placeholder:text-navy/40 focus:border-navy/40 focus:outline-none disabled:opacity-60";

const LABEL = "block text-[13px] font-semibold uppercase tracking-[0.1em] text-navy/55";

const QUANTITIES = [
  "1 – 10 units",
  "10 – 50 units",
  "50 – 100 units",
  "100 – 250 units",
  "250 – 500 units",
  "500+ units",
];

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Ireland",
  "New Zealand",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Belgium",
  "Switzerland",
  "Austria",
  "Denmark",
  "Sweden",
  "Norway",
  "Finland",
  "Poland",
  "Portugal",
  "Czechia",
  "Japan",
  "Singapore",
  "South Korea",
  "United Arab Emirates",
  "South Africa",
  "Brazil",
  "Mexico",
  "India",
  "Other",
];

export default function WholesaleForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [ref, setRef] = useState<string | null>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    // capture before awaiting — React nulls currentTarget once the handler returns
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/wholesale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setRef(data.ref ?? null);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Couldn't send your inquiry. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[28px] border border-sand bg-white p-8 sm:p-10">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#cdee7a] text-navy">
          <FiCheck size={26} />
        </span>
        <h3 className="mt-6 font-serif text-3xl text-navy">Inquiry received</h3>
        <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-navy/70">
          Thanks for getting in touch. Our research supply team will review your
          requirements and reply within two business days.
          {ref && (
            <>
              {" "}
              Your reference is <strong className="text-navy">{ref}</strong>.
            </>
          )}
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setRef(null);
          }}
          className="btn-ghost mt-7"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[28px] border border-sand bg-white p-7 sm:p-9"
    >
      {/* honeypot — hidden from people, tempting to bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="w-name">
            Full Name
          </label>
          <input
            id="w-name"
            name="name"
            required
            disabled={status === "loading"}
            placeholder="Your full name"
            className={`${FIELD} mt-2`}
          />
        </div>

        <div>
          <label className={LABEL} htmlFor="w-email">
            Email
          </label>
          <input
            id="w-email"
            name="email"
            type="email"
            required
            disabled={status === "loading"}
            placeholder="you@example.com"
            className={`${FIELD} mt-2`}
          />
        </div>

        <div>
          <label className={LABEL} htmlFor="w-phone">
            Contact Number
          </label>
          <input
            id="w-phone"
            name="phone"
            type="tel"
            required
            disabled={status === "loading"}
            placeholder="+44 7700 000000"
            className={`${FIELD} mt-2`}
          />
        </div>

        <div>
          <label className={LABEL} htmlFor="w-quantity">
            Quantity
          </label>
          <select
            id="w-quantity"
            name="quantity"
            required
            defaultValue=""
            disabled={status === "loading"}
            className={`${FIELD} mt-2 appearance-none`}
          >
            <option value="" disabled>
              Select quantity
            </option>
            {QUANTITIES.map((q) => (
              <option key={q}>{q}</option>
            ))}
          </select>
        </div>

        {/* last field in an odd-numbered set — span both columns so it doesn't
            leave a gap beside it */}
        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="w-country">
            Country
          </label>
          <select
            id="w-country"
            name="country"
            required
            defaultValue=""
            disabled={status === "loading"}
            className={`${FIELD} mt-2 appearance-none`}
          >
            <option value="" disabled>
              Select country
            </option>
            {COUNTRIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 rounded-2xl bg-beige/60 px-4 py-3 text-[13px] leading-relaxed text-navy/70">
        By submitting this form you confirm the products are intended for
        laboratory R&amp;D use only, and not for human or veterinary
        consumption.
      </p>

      {status === "error" && (
        <p role="alert" className="mt-4 text-[14px] text-red-600">
          {message}
        </p>
      )}

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "loading"}
        className="mt-6 h-14 w-full rounded-2xl bg-navy text-[16px] font-semibold text-ivory transition-colors hover:bg-navy/90 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Submit Inquiry"}
      </motion.button>
    </form>
  );
}
