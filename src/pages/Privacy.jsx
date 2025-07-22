import React from 'react';
import HeroBanner from '../components/HeroBanner';
import styles from './Privacy.module.css';

const Privacy = () => {
  return (
    <>
      <HeroBanner />

      <div className={styles.container}>
        <h2>Privacy Policy</h2>
        <p>Konten untuk halaman ini belum tersedia.</p>
      </div>
    </>
  );
};

export default Privacy;