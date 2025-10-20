import React from "react";
import { Button } from "../ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[color:var(--brand-200)]/30 via-[color:var(--brand-300)]/20 to-[color:var(--accent-300)]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 leading-tight">
              Discover Your
              <span className="block bg-gradient-to-r from-[color:var(--brand-800)] to-[color:var(--brand-700)] bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-700 mb-8 max-w-lg mx-auto md:mx-0">
              Shop the latest trends with unbeatable prices. Free shipping on
              orders over $50!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="secondary" size="lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                View Collections
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                alt="Hero"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[color:var(--brand-700)] to-[color:var(--brand-800)] rounded-full opacity-20 animate-pulse delay-75"></div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
