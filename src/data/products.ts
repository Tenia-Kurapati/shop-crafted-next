export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  features: string[];
  specifications: Record<string, string>;
  isNew?: boolean;
  isSale?: boolean;
  isFeatured?: boolean;
}

export const categories = [
  { id: "electronics", name: "Electronics", description: "Latest gadgets and tech" },
  { id: "fashion", name: "Fashion", description: "Trendy clothing and accessories" },
  { id: "home", name: "Home & Garden", description: "Everything for your home" },
  { id: "beauty", name: "Beauty", description: "Skincare and cosmetics" },
  { id: "sports", name: "Sports", description: "Fitness and outdoor gear" },
  { id: "books", name: "Books", description: "Knowledge and entertainment" }
];

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear audio with our premium wireless headphones featuring advanced noise cancellation technology.",
    price: 299.99,
    originalPrice: 399.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=400&fit=crop"
    ],
    category: "electronics",
    subcategory: "audio",
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    stockCount: 45,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium leather comfort",
      "High-resolution audio"
    ],
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "280g",
      "Warranty": "2 years"
    },
    isNew: true,
    isSale: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and 7-day battery life.",
    price: 249.99,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&h=400&fit=crop"
    ],
    category: "electronics",
    subcategory: "wearables",
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    stockCount: 23,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "7-day battery life"
    ],
    specifications: {
      "Display": "1.4 inch AMOLED",
      "Battery": "7 days",
      "Water Resistance": "50M",
      "Compatibility": "iOS & Android"
    },
    isNew: true,
    isFeatured: true
  },
  {
    id: "3",
    name: "Luxury Leather Jacket",
    description: "Handcrafted from premium genuine leather, this jacket combines style with durability for the modern fashion enthusiast.",
    price: 399.99,
    originalPrice: 599.99,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1594822095675-42c6ab5cea3c?w=500&h=400&fit=crop"
    ],
    category: "fashion",
    subcategory: "outerwear",
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    stockCount: 12,
    features: [
      "Genuine leather",
      "Hand-crafted",
      "Multiple pockets",
      "Classic fit"
    ],
    specifications: {
      "Material": "100% Genuine Leather",
      "Care": "Dry clean only",
      "Origin": "Made in Italy",
      "Sizes": "XS - XXL"
    },
    isSale: true,
    isFeatured: true
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    description: "Boost your productivity with this ergonomically designed office chair featuring lumbar support and adjustable height.",
    price: 499.99,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop"
    ],
    category: "home",
    subcategory: "furniture",
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    stockCount: 8,
    features: [
      "Lumbar support",
      "Adjustable height",
      "Breathable mesh",
      "360° swivel"
    ],
    specifications: {
      "Weight Capacity": "300 lbs",
      "Height Range": "42-46 inches",
      "Material": "Mesh & Steel",
      "Warranty": "5 years"
    },
    isFeatured: true
  },
  {
    id: "5",
    name: "Professional Camera Lens",
    description: "Capture stunning photos with this professional-grade camera lens featuring advanced optics and image stabilization.",
    price: 899.99,
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=400&fit=crop"
    ],
    category: "electronics",
    subcategory: "photography",
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    stockCount: 15,
    features: [
      "Image stabilization",
      "Weather sealed",
      "Fast autofocus",
      "Professional optics"
    ],
    specifications: {
      "Focal Length": "24-70mm",
      "Aperture": "f/2.8",
      "Weight": "805g",
      "Mount": "Canon EF"
    },
    isNew: true
  },
  {
    id: "6",
    name: "Designer Sunglasses",
    description: "Protect your eyes in style with these designer sunglasses featuring UV protection and premium frames.",
    price: 199.99,
    originalPrice: 299.99,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=400&fit=crop"
    ],
    category: "fashion",
    subcategory: "accessories",
    rating: 4.5,
    reviewCount: 94,
    inStock: true,
    stockCount: 31,
    features: [
      "UV 400 protection",
      "Polarized lenses",
      "Lightweight frame",
      "Designer style"
    ],
    specifications: {
      "UV Protection": "100% UV400",
      "Frame Material": "Acetate",
      "Lens Material": "Polycarbonate",
      "Size": "Medium"
    },
    isSale: true
  }
];

export const featuredProducts = mockProducts.filter(product => product.isFeatured);
export const newProducts = mockProducts.filter(product => product.isNew);
export const saleProducts = mockProducts.filter(product => product.isSale);