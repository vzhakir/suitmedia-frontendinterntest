import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebookF, FaTwitter, FaSpotify } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h4>Suitmedia</h4>
          <p>
            Kami adalah mitra terpercaya Anda dalam mewujudkan transformasi digital di Indonesia. Sebagai agensi layanan penuh (full-service agency), kami mengkhususkan diri dalam menyediakan berbagai solusi berbasis teknologi dan pemasaran yang terintegrasi, mulai dari perancangan dan pengembangan situs web yang responsif, pembuatan aplikasi mobile yang inovatif, hingga strategi digital marketing yang efektif dan berorientasi pada hasil. Dengan pendekatan yang berfokus pada kebutuhan klien, kami berkomitmen untuk membantu bisnis dari berbagai skala dalam meningkatkan daya saing mereka di era digital yang terus berkembang.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h4>Engage with Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/suitmedia/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/suitmedia/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.youtube.com/@suitmedia" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://web.facebook.com/suitmedia" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://x.com/suitmedia" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://open.spotify.com/show/7D2MQnYYeui5DsXzfWMLXF?si=BqHBhaqsQum_5pHm-fzYfQ&nd=1" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© Suitmedia 2009-2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;