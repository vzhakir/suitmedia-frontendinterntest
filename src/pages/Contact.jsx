import React from 'react';
import HeroBanner from '../components/HeroBanner';
import bannerImage from '../assets/banner.jpg';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <>
      <HeroBanner imageUrl={bannerImage} title="Contact" subtitle="Have a project in mind? Let's talk." />

      <div className={styles.container}>
        <p>Konten untuk halaman ini belum tersedia.</p>
      </div>
    </>
  );
};

export default Contact;