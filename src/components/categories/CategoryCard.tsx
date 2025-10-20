import React from "react";

export interface Category {
  id: number;
  name: string;
  icon: string;
  count?: number;
}

interface CategoryCardProps {
  category: Category;
  onClick?: (category: Category) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick?.(category)}
      className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center hover:-translate-y-1"
    >
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[color:var(--brand-300)]/20 to-[color:var(--accent-300)]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">{category.icon}</span>
      </div>

      {/* Category Name */}
      <h3 className="text-lg font-semibold text-primary-900 mb-1 group-hover:text-[color:var(--brand-700)] transition-colors">
        {category.name}
      </h3>

      {/* Product Count */}
      {category.count !== undefined && (
        <p className="text-sm text-gray-500">{category.count} products</p>
      )}
    </div>
  );
};
