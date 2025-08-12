// src/components/layout/Header.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import config from '../../config';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            {config.sitename}
          </Link>
          
          <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
            <ul className={styles.navList}>
              <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link href="/channels" onClick={() => setMobileMenuOpen(false)}>Channels</Link></li>
              <li><Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link></li>
              <li><Link href="/trial" onClick={() => setMobileMenuOpen(false)}>Free Trial</Link></li>
              <li><Link href="/renew" onClick={() => setMobileMenuOpen(false)}>Renew</Link></li>
              <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
              <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
          
          <div className={styles.mobileToggle} onClick={toggleMenu}>
            <div className={`${styles.bar} ${mobileMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.bar} ${mobileMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.bar} ${mobileMenuOpen ? styles.open : ''}`}></div>
          </div>
          
          <Link href="/trial" className={styles.ctaButton}>Get Started</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;