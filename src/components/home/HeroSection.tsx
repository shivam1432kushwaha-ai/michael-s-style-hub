import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion models wearing designer clothing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl space-y-6">
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-muted-foreground opacity-0 animate-fade-up">
            New Season Collection
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-tight opacity-0 animate-fade-up stagger-1">
            Your Style, Your Brands, One Store
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg opacity-0 animate-fade-up stagger-2">
            Discover premium fashion from the world's most iconic brands, all in one place. Elevate your wardrobe today.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-3">
            <Link to="/shop" className="btn-primary">
              Shop Now
            </Link>
            <Link to="/brands" className="btn-outline">
              Browse Brands
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in stagger-5">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent" />
      </div>
    </section>
  );
}
