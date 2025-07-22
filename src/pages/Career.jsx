import React from 'react';
import HeroBanner from '../components/HeroBanner';
import bannerImage from '../assets/banner.jpg';
import styles from './Career.module.css';

const Career = () => {
  return (
    <>
      <HeroBanner imageUrl={bannerImage} title="Career" subtitle="Become a part of our great team." />

      <div className={styles.container}>
        <p>Konten untuk halaman ini belum tersedia.</p>
      </div>
    </>
  );
};

export default Career;