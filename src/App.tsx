import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { ProductsPage } from './pages/ProductsPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

// ScrollToTop component ensures navigation brings user to top of page
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow DOM to settle, then scroll to targeted section
      setTimeout(() => {
        const elem = document.getElementById(hash.replace('#', ''));
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  const basename = import.meta.env.PROD
    ? import.meta.env.BASE_URL.replace(/\/$/, '')
    : undefined;

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="flex min-w-0 flex-col min-h-screen">
        <Navbar />
        <main className="min-w-0 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
