import React from "react";
import { SectionHeader } from "../ui/SectionHeader";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      rating: 5,
      comment:
        "Amazing quality and fast shipping! Will definitely order again.",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "MC",
      rating: 5,
      comment:
        "Great customer service and excellent products. Highly recommended!",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "ER",
      rating: 4,
      comment:
        "Good prices and reliable delivery. Very satisfied with my purchase.",
      date: "2 weeks ago",
    },
  ];

  const trustBadges = [
    { id: 1, icon: "🔒", label: "SSL Secure" },
    { id: 2, icon: "✓", label: "Money Back" },
    { id: 3, icon: "⚡", label: "Fast Delivery" },
    { id: 4, icon: "💯", label: "Top Quality" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Customers Say"
          subtitle="Join thousands of satisfied customers worldwide"
        />

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--brand-700)] to-[color:var(--brand-800)] rounded-full flex items-center justify-center text-white font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "text-secondary-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-700">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8">
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="flex items-center gap-2 text-primary-700"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-semibold">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
