import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-semibold">Michael's Clothing</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your Style, Your Brands, One Store. Curating the finest fashion from the world's top brands since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium uppercase tracking-wider text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/shop" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Shop All
              </Link>
              <Link to="/brands" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Our Brands
              </Link>
              <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-medium uppercase tracking-wider text-sm">Categories</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/shop?category=men" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Men's Collection
              </Link>
              <Link to="/shop?category=women" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Women's Collection
              </Link>
              <Link to="/shop?category=kids" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Kids' Collection
              </Link>
              <Link to="/shop?category=accessories" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Accessories
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-medium uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-primary-foreground/70 text-sm">
              Subscribe for exclusive offers and new arrivals.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
              />
              <button type="submit" className="px-4 py-2 bg-primary-foreground text-primary text-sm font-medium hover:bg-primary-foreground/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Michael's Clothing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
