import React from 'react';
import HeroBanner from '../components/HeroBanner';
import bannerImage from '../assets/banner.jpg';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <HeroBanner imageUrl={bannerImage} title="About" subtitle="We are a team of thinkers, creators, and innovators." />

      <div className={styles.container}>
        <p>Konten untuk halaman ini belum tersedia.</p>
      </div>
    </>
  );
};

export default About;