import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <span className="text-6xl font-extrabold text-dts-accent font-mono">
          404
        </span>
        <h1 className="text-2xl font-bold text-dts-navy">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The requested page could not be located. Please check the URL or return to the Dynamic Tooling Systems homepage.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-dts-navy hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

