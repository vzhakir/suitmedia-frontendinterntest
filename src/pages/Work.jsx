import React from 'react';
import HeroBanner from '../components/HeroBanner';
import bannerImage from '../assets/banner.jpg';
import styles from './Work.module.css';

const Work = () => {
  return (
    <>
      <HeroBanner imageUrl={bannerImage} title="Work" />

      <div className={styles.container}>
        <p>Konten untuk halaman ini belum tersedia.</p>
      </div>
    </>
  );
};

export default Work;