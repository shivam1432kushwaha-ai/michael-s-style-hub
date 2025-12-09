import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Fashion Blogger",
    content: "Michael's Clothing has become my go-to destination. The brand selection is incredible, and the quality is always top-notch.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Creative Director",
    content: "I love how they curate the best from multiple brands. It saves me time and I always find exactly what I'm looking for.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Entrepreneur",
    content: "The shopping experience is seamless, and the customer service is exceptional. Highly recommend for anyone who values quality fashion.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Join thousands of satisfied customers who trust Michael's Clothing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="p-8 bg-card border border-border/50 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
