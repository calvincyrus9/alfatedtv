// src/components/home/Hero.js
import Link from 'next/link';
import FloatingShapes from '../ui/FloatingShapes';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <FloatingShapes />
      <div className="container">
        <div className={styles.heroContent}>
          <h1>Experience Television Beyond Boundaries</h1>
          <p>Stream over 10,000 live channels and 50,000+ VOD titles in stunning 4K quality. All devices, one subscription.</p>
          <div className={styles.heroButtons}>
            <Link href="/trial" className={`${styles.btn} ${styles.primaryBtn}`}>Start Free Trial</Link>
            <Link href="/pricing" className={`${styles.btn} ${styles.secondaryBtn}`}>View Plans</Link>
          </div>
        </div>
      </div>
      <div className={styles.heroGraphic}></div>
    </section>
  );
};

export default Hero;