import React from "react";

export const PromoBanners: React.FC = () => {
  const promos = [
    {
      id: 1,
      icon: "🚚",
      title: "Free Shipping",
      description: "On orders over $50",
      bgColor:
        "from-[color:var(--brand-300)]/20 to-[color:var(--brand-400)]/20",
    },
    {
      id: 2,
      icon: "💳",
      title: "Secure Payment",
      description: "100% secure transactions",
      bgColor:
        "from-[color:var(--accent-300)]/20 to-[color:var(--violet-300)]/20",
    },
    {
      id: 3,
      icon: "🔄",
      title: "Easy Returns",
      description: "30-day return policy",
      bgColor: "from-secondary-400/20 to-secondary-500/20",
    },
    {
      id: 4,
      icon: "🎁",
      title: "Special Offers",
      description: "Save up to 50% off",
      bgColor:
        "from-[color:var(--brand-700)]/20 to-[color:var(--brand-800)]/20",
    },
  ];

  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className={`bg-gradient-to-br ${promo.bgColor} rounded-xl p-6 text-center transition-transform hover:scale-105 duration-300`}
            >
              <div className="text-4xl mb-3">{promo.icon}</div>
              <h3 className="text-lg font-bold text-primary-900 mb-1">
                {promo.title}
              </h3>
              <p className="text-sm text-primary-700">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
