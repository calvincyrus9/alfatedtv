// src/app/components/Layout/Footer.js
import React from 'react';
import styles from './Footer.module.css';
import { siteConfig } from '../../config';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <div className={styles.brandInfo}>
            <Link href="/" className={styles.logo}>
              <Image src={siteConfig.logo} alt={`${siteConfig.name} Logo`} width={50} height={50} />
              <span>{siteConfig.name}</span>
            </Link>
            <p className={styles.description}>
              The future of television is here. Experience limitless entertainment with our premium IPTV service.
            </p>
          </div>
          <div className={styles.linksGrid}>
            <div>
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/#features">Features</Link></li>
                <li><Link href="/#pricing">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/tutorials">Tutorials</Link></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;