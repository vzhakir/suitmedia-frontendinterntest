import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import komponen-komponen utama
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import komponen halaman
import Ideas from './pages/Ideas'; // Halaman yang sudah ada
import Work from './pages/Work';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import Contact from './pages/Contact';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          {/* Rute untuk halaman utama (Ideas) */}
          <Route path="/" element={<Ideas />} />
          
          {/* Rute untuk halaman Work */}
          <Route path="/work" element={<Work />} />

          {/* Rute untuk halaman Work */}
          <Route path="/about" element={<About />} />

          {/* Rute untuk halaman Work */}
          <Route path="/services" element={<Services />} />

          {/* Rute untuk halaman Work */}
          <Route path="/career" element={<Career />} />

          {/* Rute untuk halaman Work */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Anda bisa menambahkan rute lain di sini untuk About, Services, dll. */}
          {/* Contoh: <Route path="/about" element={<About />} /> */}

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;