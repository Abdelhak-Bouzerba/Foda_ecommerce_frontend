import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { ProductCard } from "../products/ProductCard";
import type { Product } from "../products/ProductCard";

const bestSellers: Product[] = [
  {
    id: 9,
    name: "Ultra HD 4K Monitor",
    price: 449.99,
    oldPrice: 599.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    rating: 4.9,
  },
  {
    id: 10,
    name: "Gaming Mouse RGB",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    rating: 4.7,
  },
  {
    id: 11,
    name: "Portable Speaker",
    price: 99.99,
    oldPrice: 149.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.6,
  },
  {
    id: 12,
    name: "Fitness Tracker",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    rating: 4.8,
  },
];

export const BestSellers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product.name);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bestSellers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + bestSellers.length) % bestSellers.length
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Best Sellers"
          subtitle="Our most popular products loved by customers"
        />

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {bestSellers.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-2">
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {bestSellers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[color:var(--brand-700)] w-6"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
