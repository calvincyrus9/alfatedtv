// src/app/components/home/CTA.js
import React from 'react';
import styles from './CTA.module.css';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Ready to Elevate Your Entertainment?</h2>
          <p className={styles.subtitle}>
            Join thousands of satisfied users and unlock a universe of content today.
          </p>
          <button className={styles.ctaButton}>Start Your Free Trial</button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;