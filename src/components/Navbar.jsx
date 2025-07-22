import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollTop = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current) {
        setIsHidden(true);
        setIsTransparent(false);
      } else {
        setIsHidden(false);
        if (scrollTop > 50) {
          setIsTransparent(true);
        } else {
          setIsTransparent(false);
        }
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `${styles.navbar} ${isTransparent ? styles.transparent : ''} ${isHidden ? styles.hidden : ''}`;

  return (
    <div className={navClasses}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Suitmedia Logo" className={styles.logoImg} />
      </Link>
      
      <div className={styles.navLinks}>
        <NavLink to="/work" className={({ isActive }) => isActive ? styles.active : ''}>Work</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? styles.active : ''}>Services</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Ideas</NavLink>
        <NavLink to="/careers" className={({ isActive }) => isActive ? styles.active : ''}>Careers</NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;