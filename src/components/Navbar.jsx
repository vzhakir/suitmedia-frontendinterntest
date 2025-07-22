import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // State untuk efek scroll
  const [isTransparent, setIsTransparent] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollTop = React.useRef(0);
  
  // State untuk menu hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efek untuk handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current && scrollTop > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      if (scrollTop > 50) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
      
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk toggle menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menggabungkan semua class dinamis
  const navClasses = `${styles.navbar} ${isTransparent ? styles.transparent : ''} ${isHidden ? styles.hidden : ''}`;

  return (
    <nav className={navClasses}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Suitmedia Logo" className={styles.logoImg} />
      </Link>
      
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.navMenuOpen : ''}`}>
        <NavLink to="/work" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ''}>Work</NavLink>
        <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
        <NavLink to="/services" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ''}>Services</NavLink>
        <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ''}>Ideas</NavLink>
        <NavLink to="/careers" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ''}>Careers</NavLink>
        <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;