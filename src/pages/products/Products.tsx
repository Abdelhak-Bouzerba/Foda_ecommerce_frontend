import React, { useState, useMemo } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { FilterSidebar } from "../../components/products/FilterSidebar";
import { ProductsToolbar } from "../../components/products/ProductsToolbar";
import { ProductGrid } from "../../components/products/ProductGrid";
import { products } from "../../data/products";

type SortOption = "featured" | "price-low" | "price-high" | "rating" | "newest";

type ViewMode = "grid" | "list";

export const Products: React.FC = () => {
  // Filter states
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const [selectedBrand, setSelectedBrand] = useState<string>("All Brands");
  const [selectedPriceRange, setSelectedPriceRange] = useState<{
    min: number;
    max: number;
  }>({ min: 0, max: Infinity });
  const [minRating, setMinRating] = useState<number>(0);
  const [showInStockOnly, setShowInStockOnly] = useState<boolean>(false);

  // View states
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  const itemsPerPage = 12;

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (
        selectedCategory !== "All Categories" &&
        product.category !== selectedCategory
      ) {
        return false;
      }

      // Brand filter
      if (selectedBrand !== "All Brands" && product.brand !== selectedBrand) {
        return false;
      }

      // Price range filter
      if (
        product.price < selectedPriceRange.min ||
        product.price > selectedPriceRange.max
      ) {
        return false;
      }

      // Rating filter
      if (product.rating < minRating) {
        return false;
      }

      // Stock filter
      if (showInStockOnly && !product.inStock) {
        return false;
      }

      return true;
    });
  }, [
    selectedCategory,
    selectedBrand,
    selectedPriceRange,
    minRating,
    showInStockOnly,
  ]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "featured":
      default:
        // Keep original order for featured
        break;
    }

    return sorted;
  }, [filteredProducts, sortBy]);

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCategory("All Categories");
    setSelectedBrand("All Brands");
    setSelectedPriceRange({ min: 0, max: Infinity });
    setMinRating(0);
    setShowInStockOnly(false);
    setCurrentPage(1);
  };

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategory,
    selectedBrand,
    selectedPriceRange,
    minRating,
    showInStockOnly,
    sortBy,
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-[var(--brand-800)] to-[var(--brand-700)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Shop All Products</h1>
          <p className="text-lg text-white/90">
            Discover our complete collection of quality products
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          {/* Mobile Sidebar Drawer */}
          <FilterSidebar
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
            selectedPriceRange={selectedPriceRange}
            minRating={minRating}
            showInStockOnly={showInStockOnly}
            onCategoryChange={setSelectedCategory}
            onBrandChange={setSelectedBrand}
            onPriceRangeChange={setSelectedPriceRange}
            onRatingChange={setMinRating}
            onInStockChange={setShowInStockOnly}
            onClearFilters={handleClearFilters}
            isMobileOpen={isMobileFilterOpen}
            onMobileClose={() => setIsMobileFilterOpen(false)}
          />

          {/* Products Area */}
          <div className="flex-grow min-w-0">
            {/* Toolbar */}
            <ProductsToolbar
              totalProducts={sortedProducts.length}
              sortBy={sortBy}
              viewMode={viewMode}
              onSortChange={setSortBy}
              onViewChange={setViewMode}
              onFilterToggle={() => setIsMobileFilterOpen(true)}
            />

            {/* Product Grid/List */}
            <ProductGrid
              products={sortedProducts}
              viewMode={viewMode}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
