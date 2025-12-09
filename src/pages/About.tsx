import { Layout } from "@/components/layout/Layout";
import { Award, Heart, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Michael's Clothing store"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container relative z-10 text-center text-background">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium mb-4">
            Our Story
          </h1>
          <p className="text-background/80 max-w-lg mx-auto text-lg">
            Curating the finest fashion from the world's top brands since 2010
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8">About Michael's Clothing</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2010 by Michael Anderson, Michael's Clothing began with a simple 
                vision: to create a destination where fashion enthusiasts could find the 
                best from multiple premium brands, all in one place.
              </p>
              <p>
                What started as a small boutique in downtown has grown into a beloved 
                destination for style-conscious shoppers. We've built our reputation on 
                carefully curating collections from brands like Nike, Adidas, Levi's, 
                H&M, Puma, and many more.
              </p>
              <p>
                Today, we continue to uphold our founding principles: exceptional quality, 
                personalized service, and a passion for helping our customers express 
                their unique style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-16">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality First",
                description: "We partner only with brands that meet our strict quality standards.",
              },
              {
                icon: Heart,
                title: "Customer Love",
                description: "Your satisfaction is our priority. We're here to help you find your perfect style.",
              },
              {
                icon: Users,
                title: "Community",
                description: "We believe fashion brings people together. Join our growing community.",
              },
              {
                icon: Target,
                title: "Authenticity",
                description: "100% authentic products. Every item is sourced directly from brand partners.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-heading text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To democratize access to premium fashion by bringing together the 
                world's best brands under one roof, making quality style accessible 
                to everyone.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that great style shouldn't require visiting multiple stores. 
                That's why we've created a destination where you can explore, compare, 
                and discover pieces from various brands that match your unique aesthetic.
              </p>
            </div>
            <div>
              <h2 className="section-title mb-6">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To become the most trusted multi-brand fashion destination, known for 
                our curated selection, exceptional service, and commitment to helping 
                customers express their personal style.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where sustainable fashion practices are the norm, 
                and we're committed to partnering with brands that share our values 
                of quality and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-medium mb-6">
            Ready to Discover Your Style?
          </h2>
          <p className="text-primary-foreground/80 max-w-md mx-auto mb-8">
            Explore our curated collection and find pieces that speak to you.
          </p>
          <a href="/shop" className="inline-block px-8 py-3 bg-primary-foreground text-primary font-medium uppercase tracking-wider text-sm hover:bg-primary-foreground/90 transition-colors">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
