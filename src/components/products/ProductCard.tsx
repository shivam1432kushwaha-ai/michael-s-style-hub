import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={cn("product-card group", className)}>
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-wider">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs uppercase tracking-wider">
              Sale
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors shadow-soft">
            <Heart className="w-4 h-4" />
          </button>
          <button className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors shadow-soft">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Add to Cart */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full py-3 bg-primary text-primary-foreground text-sm uppercase tracking-wider font-medium flex items-center justify-center gap-2 hover:bg-charcoal-light transition-colors">
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          {product.brand}
        </span>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium mt-1 hover:text-muted-foreground transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
