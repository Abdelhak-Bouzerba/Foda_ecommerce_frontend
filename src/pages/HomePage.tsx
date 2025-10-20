import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { HeroSlider } from "../components/home/HeroSlider";
import { Categories } from "../components/home/Categories";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { PromoBanners } from "../components/home/PromoBanners";
import { BestSellers } from "../components/home/BestSellers";
import { Testimonials } from "../components/home/Testimonials";
import { Newsletter } from "../components/home/Newsletter";
import { Footer } from "../components/layout/Footer";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content - Add padding-top to account for fixed navbar */}
      <main className="pt-16">
        {/* Hero Slider Section - Auto-cycling with manual controls */}
        <HeroSlider />

        {/* Categories Section */}
        <Categories />

        {/* Featured Products Section */}
        <FeaturedProducts />

        {/* Promo Banners */}
        <PromoBanners />

        {/* Best Sellers / Trending Section */}
        <BestSellers />

        {/* Testimonials / Trust Section */}
        <Testimonials />

        {/* Newsletter Signup */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
