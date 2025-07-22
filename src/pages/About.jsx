import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <HeroBanner />

      <div className={styles.container}>
        <h2>About Us</h2>
        <p>Konten untuk halaman ini belum tersedia.</p>
      </div>
    </>
  );
};

export default About;