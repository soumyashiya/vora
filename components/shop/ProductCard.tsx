"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiPlus } from "react-icons/fi";
import { useCart } from "@/components/cart/CartContext";
import type { Product } from "@/lib/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add(
      {
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      1
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-[28px] border border-sand bg-white transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-50px_rgba(4,52,96,0.5)]"
    >
      <Link href={`/products/${product.slug}`} className="flex flex-1 flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-beige">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-navy backdrop-blur-sm">
            {product.id}
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-navy/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-lime backdrop-blur-sm">
            R&amp;D Only
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-navy/50">
            {product.category}
          </p>
          <h3 className="mt-2 font-serif text-2xl leading-snug text-navy">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-navy/60">
            {product.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.slice(0, 2).map((t) => (
              <span key={t} className="chip chip-soft text-[12px] py-1.5 px-3">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-sand pt-5">
            <span className="font-serif text-2xl text-navy">
              {product.priceLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-navy/70 transition-colors group-hover:text-navy">
              View Details
              <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </div>
        </div>
      </Link>

      <button
        onClick={handleAdd}
        aria-label={`Add ${product.name} to cart`}
        className="absolute bottom-[86px] right-5 z-10 grid h-12 w-12 place-items-center rounded-full bg-lime-btn text-navy shadow-[0_14px_30px_-14px_rgba(4,52,96,0.6)] transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:bg-[#e6f9a6]"
      >
        <AnimatePresence mode="wait" initial={false}>
          {added ? (
            <motion.span
              key="added"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiCheck size={18} />
            </motion.span>
          ) : (
            <motion.span
              key="add"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiPlus size={18} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}
