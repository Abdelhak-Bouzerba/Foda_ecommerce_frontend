import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { ProductCard } from "../products/ProductCard";
import type { Product } from "../products/ProductCard";

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    oldPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch Series 7",
    price: 349.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Premium Camera Lens",
    price: 299.99,
    oldPrice: 399.99,
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Leather Backpack",
    price: 89.99,
    oldPrice: 139.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Wireless Keyboard",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    rating: 4.4,
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 119.99,
    oldPrice: 159.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Coffee Maker Pro",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
    rating: 4.5,
  },
];

export const FeaturedProducts: React.FC = () => {
  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product.name);
    // Add cart logic here
  };

  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Products"
          subtitle="Handpicked items just for you"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
