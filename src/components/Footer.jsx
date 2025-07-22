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
            Your trusted partner for digital transformation in Indonesia. We are a full-service agency specializing in technology and marketing solutions, including web design, mobile app development, and digital marketing.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h4>Engage with Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
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