import { Link } from "react-router-dom";
import { brands } from "@/data/products";

export function BrandsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Our Premium Brands</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We partner with the world's most trusted fashion houses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              to={`/shop?brand=${brand.name}`}
              className="brand-card"
            >
              <span className="font-heading text-2xl md:text-3xl font-medium text-foreground/80 group-hover:text-foreground">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/brands" className="btn-outline">
            View All Brands
          </Link>
        </div>
      </div>
    </section>
  );
}
