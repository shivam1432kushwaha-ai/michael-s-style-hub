import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { products, brands, categories } from "@/data/products";
import { SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "Over $200", min: 200, max: Infinity },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const selectedCategory = searchParams.get("category");
  const selectedBrand = searchParams.get("brand");
  const selectedPrice = searchParams.get("price");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory && product.category !== selectedCategory) return false;
      if (selectedBrand && product.brand !== selectedBrand) return false;
      if (selectedPrice) {
        const range = priceRanges[parseInt(selectedPrice)];
        if (range && (product.price < range.min || product.price > range.max)) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, selectedPrice]);

  const updateFilter = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedBrand || selectedPrice;

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <h1 className="section-title text-center mb-4">Shop All</h1>
          <p className="text-muted-foreground text-center max-w-md mx-auto">
            Explore our complete collection of premium fashion from top brands
          </p>
        </div>
      </section>

      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            className="lg:hidden flex items-center justify-center gap-2 py-3 border border-border rounded"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sidebar Filters */}
          <aside
            className={cn(
              "lg:w-64 shrink-0 space-y-8",
              isFilterOpen ? "block" : "hidden lg:block"
            )}
          >
            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="pb-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">Active Filters</span>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Clear All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory && (
                    <button
                      onClick={() => updateFilter("category", null)}
                      className="filter-chip filter-chip-active flex items-center gap-1"
                    >
                      {selectedCategory}
                      <X className="w-3 h-3" />
                    </button>
                  )}
                  {selectedBrand && (
                    <button
                      onClick={() => updateFilter("brand", null)}
                      className="filter-chip filter-chip-active flex items-center gap-1"
                    >
                      {selectedBrand}
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Categories */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => updateFilter("category", selectedCategory === category.id ? null : category.id)}
                    className={cn(
                      "block w-full text-left py-2 text-sm transition-colors",
                      selectedCategory === category.id
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Brand</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <button
                    key={brand.name}
                    onClick={() => updateFilter("brand", selectedBrand === brand.name ? null : brand.name)}
                    className={cn(
                      "block w-full text-left py-2 text-sm transition-colors",
                      selectedBrand === brand.name
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {brand.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range, index) => (
                  <button
                    key={range.label}
                    onClick={() => updateFilter("price", selectedPrice === String(index) ? null : String(index))}
                    className={cn(
                      "block w-full text-left py-2 text-sm transition-colors",
                      selectedPrice === String(index)
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                {filteredProducts.length} products
              </p>
              <select className="px-4 py-2 border border-border rounded bg-background text-sm">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products found matching your filters.</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
