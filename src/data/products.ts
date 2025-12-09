import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: "men" | "women" | "kids" | "accessories";
  image: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  description: string;
  material: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Polo Shirt",
    brand: "Nike",
    price: 89,
    category: "men",
    image: product1,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "White", "Black"],
    isNew: true,
    isFeatured: true,
    description: "A timeless polo shirt crafted from premium cotton piqué. Perfect for both casual and smart-casual occasions.",
    material: "100% Premium Cotton Piqué",
  },
  {
    id: "2",
    name: "Belted Trench Coat",
    brand: "H&M",
    price: 249,
    originalPrice: 299,
    category: "women",
    image: product2,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Beige", "Black", "Navy"],
    isFeatured: true,
    description: "An elegant trench coat with a classic belted silhouette. Water-resistant fabric keeps you stylish in any weather.",
    material: "Cotton blend with water-resistant finish",
  },
  {
    id: "3",
    name: "Essential Sneakers",
    brand: "Adidas",
    price: 120,
    category: "accessories",
    image: product3,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Gray"],
    isNew: true,
    description: "Minimalist white sneakers with premium leather upper. Versatile design pairs with any outfit.",
    material: "Full-grain leather upper, rubber sole",
  },
  {
    id: "4",
    name: "Slim Fit Jeans",
    brand: "Levi's",
    price: 98,
    category: "men",
    image: product4,
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Indigo", "Black", "Light Wash"],
    isFeatured: true,
    description: "Classic slim-fit jeans with just the right amount of stretch for all-day comfort.",
    material: "98% Cotton, 2% Elastane",
  },
  {
    id: "5",
    name: "Leather Tote Bag",
    brand: "Puma",
    price: 185,
    category: "accessories",
    image: product5,
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tan"],
    description: "Sophisticated leather tote with gold-tone hardware. Spacious interior with multiple pockets.",
    material: "Genuine Italian leather",
  },
  {
    id: "6",
    name: "Merino Wool Sweater",
    brand: "H&M",
    price: 79,
    originalPrice: 99,
    category: "men",
    image: product6,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Navy", "Burgundy"],
    description: "Luxuriously soft merino wool sweater. Breathable and temperature-regulating for year-round wear.",
    material: "100% Extra Fine Merino Wool",
  },
  {
    id: "7",
    name: "Floral Midi Dress",
    brand: "H&M",
    price: 129,
    category: "women",
    image: product7,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral Print", "Blue Print"],
    isNew: true,
    isFeatured: true,
    description: "Romantic floral midi dress with flowing silhouette. Perfect for garden parties and summer events.",
    material: "100% Viscose",
  },
  {
    id: "8",
    name: "Italian Leather Belt",
    brand: "Levi's",
    price: 65,
    category: "accessories",
    image: product8,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Brown", "Black", "Tan"],
    description: "Handcrafted Italian leather belt with polished silver buckle. A refined essential for any wardrobe.",
    material: "100% Italian Full-Grain Leather",
  },
];

export const brands = [
  { name: "Nike", logo: "Nike" },
  { name: "Adidas", logo: "Adidas" },
  { name: "Levi's", logo: "Levi's" },
  { name: "H&M", logo: "H&M" },
  { name: "Puma", logo: "Puma" },
  { name: "Zara", logo: "Zara" },
];

export const categories = [
  { id: "men", name: "Men" },
  { id: "women", name: "Women" },
  { id: "kids", name: "Kids" },
  { id: "accessories", name: "Accessories" },
];
