import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { CategoryCard } from "../categories/CategoryCard";
import type { Category } from "../categories/CategoryCard";

const categories: Category[] = [
  { id: 1, name: "Electronics", icon: "💻", count: 234 },
  { id: 2, name: "Fashion", icon: "👗", count: 567 },
  { id: 3, name: "Home & Garden", icon: "🏡", count: 189 },
  { id: 4, name: "Sports", icon: "⚽", count: 156 },
  { id: 5, name: "Books", icon: "📚", count: 423 },
  { id: 6, name: "Toys", icon: "🧸", count: 298 },
];

export const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Shop by Category"
          subtitle="Explore our wide range of products across different categories"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={(cat) => console.log("Clicked:", cat.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
