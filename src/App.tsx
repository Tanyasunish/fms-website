import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Media } from './pages/Media';
import { Catalog } from './pages/Catalog';
import { Formation } from './pages/Formation';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/publications" element={<Catalog initialCategory="publications" />} />
          <Route path="/living" element={<Catalog initialCategory="living" />} />
          <Route path="/retreats" element={<Formation />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}