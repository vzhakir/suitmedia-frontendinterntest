import React from 'react';
import HeroBanner from '../components/HeroBanner';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <>
      <HeroBanner />

      <div className={styles.container}>
        <h2>Contact</h2>
        <p>Konten untuk halaman ini belum tersedia.</p>
      </div>
    </>
  );
};

export default Contact;