import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const Home = lazy(() => import('@/pages/Home').then(m => ({ default: m.Home })));
const Media = lazy(() => import('@/pages/Media').then(m => ({ default: m.Media })));
const Catalog = lazy(() => import('@/pages/Catalog').then(m => ({ default: m.Catalog })));
const Formation = lazy(() => import('@/pages/Formation').then(m => ({ default: m.Formation })));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Suspense fallback={<div style={{ minHeight: '80vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media" element={<Media />} />
            <Route path="/publications" element={<Catalog key="publications" initialCategory="publications" />} />
            <Route path="/living" element={<Catalog key="living" initialCategory="living" />} />
            <Route path="/retreats" element={<Formation />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
