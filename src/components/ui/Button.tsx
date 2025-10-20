import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-[color:var(--brand-800)] to-[color:var(--brand-700)] text-white hover:shadow-lg hover:scale-105 focus:ring-[color:var(--brand-700)]",
    secondary:
      "bg-secondary-400 text-primary-900 hover:bg-secondary-500 hover:shadow-md focus:ring-secondary-400",
    outline:
      "border-2 border-[color:var(--brand-700)] text-[color:var(--brand-700)] hover:bg-[color:var(--brand-700)] hover:text-white focus:ring-[color:var(--brand-700)]",
    ghost: "text-primary-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
