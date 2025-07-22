import React from 'react';
import HeroBanner from '../components/HeroBanner';
import bannerImage from '../assets/banner.jpg';
import styles from './Services.module.css';

const Services = () => {
  return (
    <>
      <HeroBanner imageUrl={bannerImage} title="Services" subtitle="What we do to help you succeed." />

      <div className={styles.container}>
        <p>Konten untuk halaman ini belum tersedia.</p>
      </div>
    </>
  );
};

export default Services;