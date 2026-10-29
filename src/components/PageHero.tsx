import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumb?: { label: string; path?: string }[];
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge,
  breadcrumb = []
}) => {
  return (
    <div className="relative bg-dts-navy text-white py-16 sm:py-20 overflow-hidden subtle-blueprint-bg border-b border-slate-800">
      {/* Decorative technical grid overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none industrial-grid-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs font-medium text-slate-400 mb-6">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumb.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-dts-accent font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-400/20 mb-4 tracking-wider uppercase">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

