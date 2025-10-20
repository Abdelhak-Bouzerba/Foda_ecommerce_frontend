import React, { useState } from "react";
import { Button } from "../ui/Button";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
    // Add subscription logic here
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[color:var(--brand-700)] to-[color:var(--brand-800)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Get the latest updates on new products and upcoming sales
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-primary-900"
          />
          <Button type="submit" variant="secondary" size="md">
            Subscribe
          </Button>
        </form>

        <p className="text-sm text-white/70 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};
