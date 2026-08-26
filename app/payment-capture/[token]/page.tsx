"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiAlertCircle,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiCopy,
  FiCreditCard,
  FiHash,
  FiHome,
  FiLoader,
  FiPackage,
  FiTag,
  FiUploadCloud,
  FiXCircle,
} from "react-icons/fi";
import ShopHeader from "@/components/cart/ShopHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import { ApiError } from "@/lib/apiClient";
import { formatMoney } from "@/lib/format";
import { cn } from "@/lib/utils";
import {
  validateCaptureToken,
  applyCapturePromo,
  uploadCaptureScreenshot,
} from "@/services/paymentCapture.service";
import type { PaymentCaptureValidateResponse, PaymentCaptureStatus } from "@/types/api";

const INPUT =
  "w-full rounded-2xl border border-sand bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy/30 transition-colors focus:border-navy/40 focus:outline-none";

// Maps the OCR verification service's documented reason codes to plain-English copy.
function explainRejection(reasons: string[] | undefined): string[] {
  if (!reasons || reasons.length === 0) {
    return ["We couldn't confirm the payment details from this screenshot."];
  }
  const map: Record<string, string> = {
    amount_mismatch: "The amount in the screenshot doesn't match your order total.",
    payee_missing_or_mismatch: "We couldn't find the correct payee name in the screenshot.",
    sort_code_not_found: "The sort code wasn't visible in the screenshot.",
    account_number_not_found: "The account number wasn't visible in the screenshot.",
    bank_signals_missing: "We couldn't detect enough bank transfer details in the screenshot.",
  };
  const explained = reasons.map((r) => map[r]).filter((v): v is string => Boolean(v));
  return explained.length > 0 ? explained : ["We couldn't confirm the payment details from this screenshot."];
}

export default function PaymentCapturePage() {
  const params = useParams<{ token: string }>();
  const token = params.token;

  const [data, setData] = useState<PaymentCaptureValidateResponse | null>(null);
  const [loadError, setLoadError] = useState("");
  const [loading, setLoading] = useState(true);

  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoLoading, setPromoLoading] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | PaymentCaptureStatus>(
    "idle"
  );
  const [uploadError, setUploadError] = useState("");
  const [rejectionReasons, setRejectionReasons] = useState<string[]>([]);
  const [screenshotUrl, setScreenshotUrl] = useState("");

  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;
    validateCaptureToken(token)
      .then((res) => setData(res))
      .catch((err) => {
        const msg =
          err instanceof ApiError && (err.status === 400 || err.status === 404)
            ? "This payment link is invalid or has expired."
            : err instanceof Error
              ? err.message
              : "Failed to load payment details.";
        setLoadError(msg);
      })
      .finally(() => setLoading(false));
  }, [token]);

  const applyPromo = async () => {
    const code = promoInput.trim().toUpperCase();
    if (!code || promoLoading) return;
    setPromoLoading(true);
    setPromoError("");
    try {
      await applyCapturePromo(token, code);
      const fresh = await validateCaptureToken(token);
      setData(fresh);
      setPromoInput("");
    } catch (err) {
      setPromoError(err instanceof Error ? err.message : "Could not apply promo.");
    } finally {
      setPromoLoading(false);
    }
  };

  const uploadScreenshot = async () => {
    if (!file || uploadStatus === "uploading") return;
    setUploadStatus("uploading");
    setUploadError("");
    setRejectionReasons([]);
    try {
      const res = await uploadCaptureScreenshot(token, file);
      setUploadStatus(res.payment_status);
      setScreenshotUrl(res.screenshotUrl);
      if (res.verification_error) setUploadError(res.verification_error);
      if (res.payment_status === "rejected") {
        setRejectionReasons(explainRejection(res.verification?.verdict?.reasons));
      }
    } catch (err) {
      setUploadStatus("idle");
      setUploadError(err instanceof Error ? err.message : "Upload failed.");
    }
  };

  const pickFile = (f: File | null | undefined) => {
    if (f) setFile(f);
  };

  const copyField = (key: string, value: string) => {
    navigator.clipboard?.writeText(value).then(() => {
      setCopiedField(key);
      setTimeout(() => setCopiedField((k) => (k === key ? null : k)), 1600);
    });
  };

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col bg-ivory">
        <ShopHeader />
        <div className="container-x flex flex-1 items-center justify-center py-24">
          <FiLoader className="h-7 w-7 animate-spin text-navy/40" />
        </div>
        <Footer />
      </main>
    );
  }

  if (loadError || !data) {
    return (
      <main className="flex min-h-screen flex-col bg-ivory">
        <ShopHeader />
        <div className="container-x flex flex-1 flex-col items-center justify-center py-24 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-red-50 text-red-500">
            <FiAlertCircle size={26} />
          </span>
          <h1 className="mt-6 font-serif text-3xl text-navy lg:text-4xl">Link unavailable</h1>
          <p className="mt-3 max-w-md text-navy/60">{loadError || "Payment link not found."}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/track" className="btn-lime">
              Track an order
              <span className="icon-circle">
                <FiPackage size={16} />
              </span>
            </Link>
            <Link href="/#products" className="btn-ghost">
              Back to shop
            </Link>
          </div>

          <p className="mt-8 text-[13px] text-navy/45">
            Need help? Email{" "}
            <a
              href="mailto:support@voralabs.com"
              className="font-semibold text-navy underline-offset-4 hover:underline"
            >
              support@voralabs.com
            </a>
          </p>
        </div>
        <Footer />
      </main>
    );
  }

  const order = data.order;
  const total = Number(order.total ?? 0);
  const orderNumber = order.order_number;

  if (uploadStatus === "received") {
    return (
      <main className="flex min-h-screen flex-col bg-ivory">
        <ShopHeader />
        <div className="container-x flex flex-1 flex-col items-center justify-center py-24 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-lime/40 text-navy">
            <FiCheckCircle size={26} />
          </span>
          <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-navy/50">
            Order {orderNumber}
          </p>
          <h1 className="mt-2 font-serif text-4xl text-navy lg:text-5xl">Payment confirmed</h1>
          <p className="mt-4 max-w-md text-navy/60">
            Thank you, your transfer was verified and your order is being prepared.
          </p>
          {screenshotUrl && (
            <a
              href={screenshotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-[14px] font-medium text-navy underline underline-offset-4 hover:text-navy/70"
            >
              View uploaded screenshot ↗
            </a>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href={`/track?order=${encodeURIComponent(orderNumber)}`} className="btn-lime">
              Track order
              <span className="icon-circle">
                <FiPackage size={16} />
              </span>
            </Link>
            <Link href="/" className="btn-ghost">
              Back to home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-ivory">
      <ShopHeader />

      <div className="container-x flex-1 py-12 lg:py-16">
        <Reveal>
          <div className="border-b border-sand pb-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-navy/50">
              Complete payment
            </p>
            <h1 className="mt-2 font-serif text-4xl text-navy lg:text-5xl">
              Order {orderNumber}
            </h1>
            <p className="mt-3 max-w-xl text-navy/60">
              Transfer the total below to the account, then upload a screenshot of your
              transfer so we can confirm it.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          {/* Left — order summary + amount + bank details */}
          <div className="flex flex-col gap-6">
            {data.items.length > 0 && (
              <Reveal className="rounded-[28px] border border-sand bg-white p-7 sm:p-8">
                <h2 className="flex items-center gap-2 font-serif text-xl text-navy">
                  <FiPackage size={16} className="text-navy/50" /> Order summary
                </h2>
                <ul className="mt-4 flex flex-col divide-y divide-sand">
                  {data.items.map((it) => (
                    <li key={it.id} className="flex items-center justify-between gap-4 py-3">
                      <div className="min-w-0">
                        <p className="truncate text-[15px] font-medium text-navy">{it.name}</p>
                        <p className="text-[13px] text-navy/50">
                          Qty {it.quantity} · {formatMoney(it.unit_price)} each
                        </p>
                      </div>
                      <p className="shrink-0 text-[15px] text-navy">
                        {formatMoney(it.line_total)}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-1 flex flex-col gap-2 border-t border-sand pt-4 text-[15px]">
                  {order.subtotal != null && (
                    <div className="flex justify-between text-navy/60">
                      <span>Subtotal</span>
                      <span>{formatMoney(order.subtotal)}</span>
                    </div>
                  )}
                  {Number(order.discount_amount) > 0 && (
                    <div className="flex justify-between text-navy/60">
                      <span>Discount{order.promo_code ? ` (${order.promo_code})` : ""}</span>
                      <span className="text-green-700">
                        −{formatMoney(order.discount_amount)}
                      </span>
                    </div>
                  )}
                </div>
              </Reveal>
            )}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[28px] bg-navy p-7 text-ivory"
            >
              <p className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-ivory/60">
                <FiCreditCard size={14} /> Amount due
              </p>
              <p className="mt-3 font-serif text-4xl text-lime">{formatMoney(total)}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3 rounded-[28px] border border-sand bg-beige p-6"
            >
              <BankRow
                icon={FiHome}
                label="Payee"
                value={data.bank.payeeName}
                onCopy={() => copyField("payeeName", data.bank.payeeName)}
                copied={copiedField === "payeeName"}
              />
              <BankRow
                icon={FiHash}
                label="Reference"
                value={data.bank.reference}
                mono
                onCopy={() => copyField("reference", data.bank.reference)}
                copied={copiedField === "reference"}
              />
              <BankRow
                icon={FiCreditCard}
                label="Sort code"
                value={data.bank.sortCode}
                mono
                onCopy={() => copyField("sortCode", data.bank.sortCode)}
                copied={copiedField === "sortCode"}
              />
              <BankRow
                icon={FiHash}
                label="Account number"
                value={data.bank.accountNumber}
                mono
                onCopy={() => copyField("accountNumber", data.bank.accountNumber)}
                copied={copiedField === "accountNumber"}
              />
            </motion.div>

            {data.allowPromo && (
              <Reveal className="rounded-[28px] border border-sand bg-white p-7">
                <h2 className="flex items-center gap-2 font-serif text-xl text-navy">
                  <FiTag size={16} className="text-navy/50" /> Promo code
                </h2>
                <div className="mt-4 flex gap-2">
                  <input
                    value={promoInput}
                    onChange={(e) => {
                      setPromoInput(e.target.value);
                      setPromoError("");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        applyPromo();
                      }
                    }}
                    placeholder="Enter code"
                    className={cn(INPUT, "uppercase tracking-wide")}
                  />
                  <button
                    type="button"
                    onClick={applyPromo}
                    disabled={promoLoading}
                    className="shrink-0 rounded-2xl border border-sand bg-white px-5 text-[15px] font-semibold text-navy transition-colors hover:border-navy/40 disabled:opacity-60"
                  >
                    {promoLoading ? "…" : "Apply"}
                  </button>
                </div>
                {promoError && <p className="mt-2 text-[13px] text-red-600">{promoError}</p>}
              </Reveal>
            )}
          </div>

          {/* Right — upload proof */}
          <Reveal className="h-fit rounded-[28px] border border-sand bg-white p-7 lg:sticky lg:top-28">
            <h2 className="flex items-center gap-2 font-serif text-xl text-navy">
              <FiUploadCloud size={18} className="text-navy/50" /> Upload payment screenshot
            </h2>
            <p className="mt-2 text-[14px] text-navy/55">PNG, JPG, or PDF · max 25 MB.</p>

            <label
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                pickFile(e.dataTransfer.files?.[0]);
              }}
              className={cn(
                "mt-5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors",
                dragOver ? "border-navy/50 bg-beige" : "border-sand bg-ivory hover:border-navy/30"
              )}
            >
              <FiUploadCloud
                size={26}
                className={dragOver ? "text-navy" : "text-navy/40"}
              />
              {file ? (
                <p className="text-[15px] font-semibold text-navy">{file.name}</p>
              ) : (
                <>
                  <p className="text-[15px] font-semibold text-navy">
                    Drop your screenshot here, or browse
                  </p>
                  <p className="text-[13px] text-navy/50">Click to select a file</p>
                </>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => pickFile(e.target.files?.[0])}
                className="hidden"
              />
            </label>

            {uploadError && (
              <StatusBanner tone="error" icon={FiXCircle}>
                {uploadError}
              </StatusBanner>
            )}
            {uploadStatus === "pending" && (
              <StatusBanner tone="pending" icon={FiClock}>
                Screenshot received. Verification is queued; we&rsquo;ll email you with the
                result.
              </StatusBanner>
            )}
            {uploadStatus === "rejected" && (
              <StatusBanner tone="error" icon={FiXCircle}>
                <p>
                  We couldn&rsquo;t verify this screenshot. Please re-upload a clearer image of
                  the transfer.
                </p>
                {rejectionReasons.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-4">
                    {rejectionReasons.map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                )}
              </StatusBanner>
            )}

            <button
              type="button"
              onClick={uploadScreenshot}
              disabled={!file || uploadStatus === "uploading"}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-lime-btn py-4 text-[15px] font-semibold text-navy transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:bg-[#e6f9a6] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {uploadStatus === "uploading" ? (
                <>
                  <FiLoader size={16} className="animate-spin" /> Uploading…
                </>
              ) : (
                "Submit screenshot"
              )}
            </button>
          </Reveal>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function BankRow({
  icon: Icon,
  label,
  value,
  mono = false,
  onCopy,
  copied,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  mono?: boolean;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-sand bg-white px-4 py-3.5">
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-beige text-navy/70">
          <Icon size={16} />
        </span>
        <div className="min-w-0">
          <p className="text-[12px] uppercase tracking-wider text-navy/50">{label}</p>
          <p
            className={cn(
              "truncate text-[15px] font-semibold text-navy",
              mono && "font-mono tracking-wide"
            )}
          >
            {value}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onCopy}
        aria-label={`Copy ${label}`}
        className="grid h-8 w-8 flex-none place-items-center rounded-full text-navy/50 transition-colors hover:bg-beige hover:text-navy"
      >
        {copied ? <FiCheck size={15} className="text-navy" /> : <FiCopy size={15} />}
      </button>
    </div>
  );
}

function StatusBanner({
  tone,
  icon: Icon,
  children,
}: {
  tone: "success" | "pending" | "error";
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}) {
  const styles = {
    success: "border-lime/50 bg-lime/10 text-navy",
    pending: "border-amber-300 bg-amber-50 text-navy",
    error: "border-red-200 bg-red-50 text-red-700",
  } as const;
  const iconColor = {
    success: "text-navy",
    pending: "text-amber-500",
    error: "text-red-500",
  } as const;

  return (
    <div
      className={cn(
        "mt-4 flex items-start gap-2.5 rounded-2xl border px-4 py-3 text-[13px] font-medium",
        styles[tone]
      )}
    >
      <Icon size={16} className={cn("mt-0.5 flex-none", iconColor[tone])} />
      <span>{children}</span>
    </div>
  );
}
