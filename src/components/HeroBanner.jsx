import React, { useEffect, useRef } from 'react';
import styles from './HeroBanner.module.css';

// Komponen sekarang menerima prop 'imageUrl'
const HeroBanner = ({ imageUrl }) => {
  // useRef untuk mendapatkan referensi ke elemen DOM
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  // useEffect untuk menambahkan event listener saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      // Cek apakah elemen ada sebelum memanipulasi style
      if (bgRef.current) {
        // Efek parallax untuk background image
        bgRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
      if (contentRef.current) {
        // Efek parallax untuk teks konten
        contentRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    // Tambahkan event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array dependensi kosong agar useEffect hanya berjalan sekali

  return (
    <section className={styles.heroBanner}>
      {/* Gunakan ref dan inline style untuk background image dari prop */}
      <div 
        ref={bgRef} 
        className={styles.heroBg} 
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
      </div>

      <div className={styles.heroOverlay}></div>

      {/* Gunakan ref untuk konten */}
      <div ref={contentRef} className={styles.heroContent}>
        <h1>Ideas</h1>
        <p>Where all our great things begin</p>
      </div>
    </section>
  );
};

export default HeroBanner;