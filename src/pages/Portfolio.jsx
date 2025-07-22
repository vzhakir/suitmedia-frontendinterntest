import React from 'react';
import HeroBanner from '../components/HeroBanner';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <>
      <HeroBanner />

      <div className={styles.container}>
        <h2>Portfolio</h2>
        <p>Konten untuk halaman ini belum tersedia.</p>
      </div>
    </>
  );
};

export default Portfolio;