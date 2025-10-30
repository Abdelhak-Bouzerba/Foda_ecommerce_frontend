import React from "react";
import type { Product } from "../../data/products";

interface ProductListItemProps {
  product: Product;
}

export const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
}) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">
          ({product.reviewCount})
        </span>
      </div>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300 group">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0 sm:w-48 h-48 sm:h-32">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex-grow min-w-0">
          <div className="flex flex-col h-full">
            {/* Top: Title, brand, rating */}
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-[var(--brand-600)] transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-500 font-medium">
                  {product.brand}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-gray-500">
                  {product.category}
                </span>
              </div>
              {renderStars(product.rating)}
            </div>

            {/* Middle: Description */}
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {product.description}
            </p>

            {/* Bottom: Features (first 3) */}
            {product.features && product.features.length > 0 && (
              <div className="mb-3">
                <ul className="space-y-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {product.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 sm:w-48 flex-shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 sm:border-l border-gray-200 sm:pl-4">
          {/* Price */}
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </div>
            {product.originalPrice && (
              <div className="flex items-center gap-2 justify-end">
                <span className="text-sm text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                {product.discount && (
                  <span className="text-xs font-semibold text-red-500">
                    -{product.discount}% OFF
                  </span>
                )}
              </div>
            )}
            <div className="mt-2">
              {product.inStock ? (
                <span className="text-xs text-green-600 font-medium">
                  ✓ In Stock ({product.stockCount} left)
                </span>
              ) : (
                <span className="text-xs text-red-600 font-medium">
                  Out of Stock
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            disabled={!product.inStock}
            className={`w-full sm:w-auto px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              product.inStock
                ? "bg-gradient-to-r from-[var(--brand-800)] to-[var(--brand-700)] text-white hover:shadow-lg hover:scale-105"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {product.inStock ? (
              <span className="flex items-center gap-2 whitespace-nowrap">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </span>
            ) : (
              "Out of Stock"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
