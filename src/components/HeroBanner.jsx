import React from 'react';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1>Ideas</h1>
        <p>Where all our great things begin</p>
      </div>
    </section>
  );
};

export default HeroBanner;