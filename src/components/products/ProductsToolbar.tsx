import React from "react";

type SortOption = "featured" | "price-low" | "price-high" | "rating" | "newest";

type ViewMode = "grid" | "list";

interface ProductsToolbarProps {
  totalProducts: number;
  sortBy: SortOption;
  viewMode: ViewMode;
  onSortChange: (sort: SortOption) => void;
  onViewChange: (view: ViewMode) => void;
  onFilterToggle?: () => void;
}

export const ProductsToolbar: React.FC<ProductsToolbarProps> = ({
  totalProducts,
  sortBy,
  viewMode,
  onSortChange,
  onViewChange,
  onFilterToggle,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left: Results count + Filter button (mobile) */}
        <div className="flex items-center gap-3">
          {/* Mobile filter toggle button */}
          <button
            onClick={onFilterToggle}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">Filters</span>
          </button>

          {/* Results count */}
          <div className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">{totalProducts}</span>{" "}
            {totalProducts === 1 ? "product" : "products"}
          </div>
        </div>

        {/* Right: Sort dropdown + View toggle */}
        <div className="flex items-center gap-3">
          {/* Sort dropdown */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-sm text-gray-600 whitespace-nowrap hidden sm:block"
            >
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-[#FBBF24] focus:border-[#FBBF24] outline-none cursor-pointer transition-all"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => onViewChange("grid")}
              className={`p-2 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              title="Grid view"
            >
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
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button
              onClick={() => onViewChange("list")}
              className={`p-2 rounded-lg transition-all ${
                viewMode === "list"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              title="List view"
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
