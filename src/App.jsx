import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import komponen halaman
import Ideas from './pages/Ideas';
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
          <Route path="/" element={<Ideas />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;