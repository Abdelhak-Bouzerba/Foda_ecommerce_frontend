import React from "react";
import { Link } from "react-router-dom";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  footerText?: string;
  footerLinkText?: string;
  footerLinkTo?: string;
}

export const AuthCard: React.FC<AuthCardProps> = ({
  children,
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerLinkTo,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#8447ff] to-[#9a52ff] rounded-xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
              <span className="text-white text-2xl font-bold">F</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Foda</span>
          </Link>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
          </div>

          {/* Form Content */}
          <div>{children}</div>
        </div>

        {/* Footer Link */}
        {footerText && footerLinkText && footerLinkTo && (
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              {footerText}{" "}
              <Link
                to={footerLinkTo}
                className="text-[#2563EB] font-semibold hover:text-[#1d4ed8] transition-colors"
              >
                {footerLinkText}
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
