import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="section-title mb-4">Featured Collection</h2>
            <p className="text-muted-foreground max-w-md">
              Handpicked styles that define the season
            </p>
          </div>
          <Link to="/shop" className="mt-4 md:mt-0 nav-link">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
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
