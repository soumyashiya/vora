import { PRODUCTS } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ShopGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((p, i) => (
        <ProductCard key={p.slug} product={p} index={i} />
      ))}
    </div>
  );
}
