import React, { useEffect, useRef } from 'react';
import styles from './HeroBanner.module.css';

const HeroBanner = ({ imageUrl, title, subtitle }) => {
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      if (bgRef.current) {
        bgRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.heroBanner}>
      <div 
        ref={bgRef} 
        className={styles.heroBg} 
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className={styles.heroOverlay}></div>

      <div ref={contentRef} className={styles.heroContent}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
};

HeroBanner.defaultProps = {
  title: 'Suitmedia',
  subtitle: null,
};

export default HeroBanner;