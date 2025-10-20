import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "center",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-8 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[color:var(--brand-800)] to-[color:var(--brand-700)] bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-primary-700 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};
