// src/pages/trial.js
import Head from 'next/head';
import Layout from '../app/components/Layout/Layout';
import { siteConfig } from '../app/config';
import styles from '../app/styles/Contact.module.css'; // Reusing contact page styles for consistency

const Trial = () => {
  return (
    <Layout>
      <Head>
        <title>Free Trial - {siteConfig.name}</title>
        <meta name="description" content={`Sign up for a free trial of ${siteConfig.name}.`} />
      </Head>
      <section className={styles.contactHero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Request a Free Trial</h1>
          <p className={styles.heroSubtitle}>Experience our premium service for 24 hours, no commitment required.</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactForm} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" className={styles.formInput} required placeholder="you@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="device">What device will you use?</label>
                <input type="text" id="device" name="device" className={styles.formInput} required placeholder="e.g., Smart TV, Firestick, Android" />
              </div>
              <button type="submit" className={styles.submitButton}>Request Trial</button>
            </form>
          </div>
      </section>
    </Layout>
  );
};

export default Trial;
