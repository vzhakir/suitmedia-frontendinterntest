import React, { useEffect, useRef } from 'react';
import styles from './HeroBanner.module.css';

const HeroBanner = ({ imageUrl, title, subtitle }) => {
  // useRef untuk mendapatkan referensi ke elemen DOM
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  // useEffect untuk menambahkan event listener saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      if (bgRef.current) {
        bgRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

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
      ></div>

      <div className={styles.heroOverlay}></div>

      {/* Gunakan ref untuk konten dan props untuk teks dinamis */}
      <div ref={contentRef} className={styles.heroContent}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
};

// Nilai default jika props tidak dikirim
HeroBanner.defaultProps = {
  title: 'Suitmedia',
  subtitle: null,
};

export default HeroBanner;