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
          <h4>Information</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4 style={{ visibility: 'hidden' }}>Links</h4> 
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Career</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
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
        <p>&copy; Suitmedia 2009-2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;