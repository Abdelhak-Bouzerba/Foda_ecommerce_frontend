import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [cartCount] = useState(3); // Mock cart count
  const [isLoggedIn] = useState(false); // Mock login state

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[color:var(--brand-800)] to-[color:var(--brand-700)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-bold text-primary-900">Foda</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-primary-700 hover:text-[color:var(--brand-700)] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-primary-700 hover:text-[color:var(--brand-700)] transition-colors font-medium"
            >
              Shop
            </Link>
            <div className="relative group">
              <button className="text-primary-700 hover:text-[color:var(--brand-700)] transition-colors font-medium flex items-center gap-1">
                Categories
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/categories/electronics"
                  className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-100 rounded-t-lg"
                >
                  Electronics
                </Link>
                <Link
                  to="/categories/fashion"
                  className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-100"
                >
                  Fashion
                </Link>
                <Link
                  to="/categories/home"
                  className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-100 rounded-b-lg"
                >
                  Home & Garden
                </Link>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-700)] focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-primary-700 hover:text-[color:var(--brand-700)] transition-colors"
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-secondary-500 to-secondary-400 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile Dropdown */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 text-primary-700 hover:text-[color:var(--brand-700)] transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[color:var(--brand-700)] to-[color:var(--brand-800)] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">JD</span>
                  </div>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-100 rounded-t-lg"
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-100"
                    >
                      Orders
                    </Link>
                    <button className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-b-lg">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
                <>
                <Link
                  to="/login"
                  className="text-primary-700 hover:text-[color:var(--brand-700)] transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-primary-700 hover:text-[color:var(--brand-700)] transition-colors font-medium"
                >
                  Register
                </Link>
                </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-primary-700 hover:text-[color:var(--brand-700)] transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-700)]"
              />
            </div>
            <Link
              to="/"
              className="block py-2 text-primary-700 hover:text-[color:var(--brand-700)] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block py-2 text-primary-700 hover:text-[color:var(--brand-700)] transition-colors font-medium"
            >
              Shop
            </Link>
            <Link
              to="/categories"
              className="block py-2 text-primary-700 hover:text-[color:var(--brand-700)] transition-colors font-medium"
            >
              Categories
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
