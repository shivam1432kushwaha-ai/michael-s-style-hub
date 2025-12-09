import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export function NewArrivals() {
  const newProducts = products.filter((p) => p.isNew);

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
              Just Landed
            </span>
            <h2 className="section-title">New Arrivals</h2>
          </div>
          <Link to="/shop?filter=new" className="mt-4 md:mt-0 nav-link">
            Shop New Arrivals
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {newProducts.slice(0, 4).map((product, index) => (
            <div
              key={product.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
