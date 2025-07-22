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
            Your trusted partner for digital transformation in Indonesia, we are a full-service agency dedicated to helping businesses thrive in the digital age through innovative technology and marketing solutions. From crafting responsive and visually compelling websites to developing intuitive mobile applications and executing data-driven digital marketing campaigns, our team delivers end-to-end services tailored to your unique goals. With a deep understanding of the local market and a passion for excellence, we empower brands to enhance their online presence, engage their audiences, and achieve sustainable growth in an increasingly connected world.
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