import { Link } from "react-router-dom";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryKids from "@/assets/category-kids.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categories = [
  { id: "men", name: "Men", image: categoryMen },
  { id: "women", name: "Women", image: categoryWomen },
  { id: "kids", name: "Kids", image: categoryKids },
  { id: "accessories", name: "Accessories", image: categoryAccessories },
];

export function CategoriesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore our curated collections for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={`${category.name}'s collection`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl md:text-3xl text-background font-medium">
                  {category.name}
                </h3>
                <span className="inline-block mt-2 text-sm text-background/80 uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
