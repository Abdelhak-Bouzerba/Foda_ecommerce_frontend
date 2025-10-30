import React from "react";
import { categories, brands, priceRanges } from "../../data/products";

interface FilterSidebarProps {
  selectedCategory: string;
  selectedBrand: string;
  selectedPriceRange: { min: number; max: number };
  minRating: number;
  showInStockOnly: boolean;
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onPriceRangeChange: (range: { min: number; max: number }) => void;
  onRatingChange: (rating: number) => void;
  onInStockChange: (inStock: boolean) => void;
  onClearFilters: () => void;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  selectedBrand,
  selectedPriceRange,
  minRating,
  showInStockOnly,
  onCategoryChange,
  onBrandChange,
  onPriceRangeChange,
  onRatingChange,
  onInStockChange,
  onClearFilters,
  isMobileOpen = false,
  onMobileClose,
}) => {
  const sidebarContent = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        <button
          onClick={onClearFilters}
          className="text-sm text-[#2563EB] hover:text-[#1d4ed8] font-medium transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
                className="w-4 h-4 text-[#FBBF24] focus:ring-[#FBBF24] focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          Price Range
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="priceRange"
                checked={
                  selectedPriceRange.min === range.min &&
                  selectedPriceRange.max === range.max
                }
                onChange={() =>
                  onPriceRangeChange({ min: range.min, max: range.max })
                }
                className="w-4 h-4 text-[#FBBF24] focus:ring-[#FBBF24] focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Brand</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => onBrandChange(brand)}
                className="w-4 h-4 text-[#FBBF24] focus:ring-[#FBBF24] focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          Minimum Rating
        </h3>
        <div className="space-y-2">
          {[4, 3, 2, 1, 0].map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={minRating === rating}
                onChange={() => onRatingChange(rating)}
                className="w-4 h-4 text-[#FBBF24] focus:ring-[#FBBF24] focus:ring-offset-0 cursor-pointer"
              />
              <span className="flex items-center gap-1 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                {rating === 0 ? (
                  "All Ratings"
                ) : (
                  <>
                    {rating}
                    <svg
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    & up
                  </>
                )}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* In Stock Filter */}
      <div className="pt-4 border-t border-gray-200">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={showInStockOnly}
            onChange={(e) => onInStockChange(e.target.checked)}
            className="w-4 h-4 rounded text-[#FBBF24] focus:ring-[#FBBF24] focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
            Show In Stock Only
          </span>
        </label>
      </div>
    </div>
  );

  // Desktop sidebar
  if (!isMobileOpen) {
    return (
      <div className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-20 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          {sidebarContent}
        </div>
      </div>
    );
  }

  // Mobile sidebar (drawer)
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onMobileClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-xl transform transition-transform duration-300 lg:hidden overflow-y-auto ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Filters</h2>
            <button
              onClick={onMobileClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {sidebarContent}
        </div>
      </div>
    </>
  );
};
