import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { brands, products } from "@/data/products";

const Brands = () => {
  const getBrandProductCount = (brandName: string) => {
    return products.filter((p) => p.brand === brandName).length;
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <h1 className="section-title text-center mb-4">Our Brands</h1>
          <p className="text-muted-foreground text-center max-w-lg mx-auto">
            We partner with the world's most trusted fashion brands to bring you 
            the best in quality, style, and craftsmanship.
          </p>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <Link
              key={brand.name}
              to={`/shop?brand=${brand.name}`}
              className="group p-12 bg-card border border-border/50 hover:border-border hover:shadow-medium transition-all duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {brand.name}
                </h2>
                <p className="text-muted-foreground mt-4 text-sm uppercase tracking-wider">
                  {getBrandProductCount(brand.name)} Products
                </p>
                <span className="inline-block mt-6 text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                  Shop Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Brand Promise */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-medium mb-6">
            Why We Choose These Brands
          </h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/80 leading-relaxed">
            Every brand at Michael's Clothing is carefully selected based on quality, 
            sustainability, and design excellence. We believe in offering you only 
            the best, ensuring every piece you purchase meets our high standards.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="font-heading text-xl font-medium mb-2">Quality Assured</h3>
              <p className="text-primary-foreground/70 text-sm">
                Every item undergoes strict quality control before reaching our shelves.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-medium mb-2">Authentic Products</h3>
              <p className="text-primary-foreground/70 text-sm">
                100% authentic products sourced directly from brand partners.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-medium mb-2">Customer First</h3>
              <p className="text-primary-foreground/70 text-sm">
                Dedicated support team ready to help with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Brands;
