// src/pages/about.js
import Head from 'next/head';
import Layout from '../app/components/Layout/Layout';
import { siteConfig } from '../app/config';
import styles from '../app/styles/About.module.css';
import { FaBullseye, FaUsers, FaInfinity } from 'react-icons/fa';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Us - {siteConfig.name}</title>
        <meta name="description" content={`Learn about the mission and vision behind ${siteConfig.name}.`} />
      </Head>
      <section className={styles.aboutHero}>
        <div className="container">
          <h1 className={styles.heroTitle}>About {siteConfig.name}</h1>
          <p className={styles.heroSubtitle}>Pioneering the Future of Digital Entertainment</p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className="container">
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.storyContent}>
              Founded by a team of streaming enthusiasts and tech innovators, {siteConfig.name} was born from a desire to create a truly seamless and limitless entertainment experience. We saw a future where access to global content wasn&#39;t a luxury, but a standard. Today, we&#39;re proud to power countless homes with a stable, high-quality streaming service that redefines what&#39;s possible.
            </p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <div className={styles.valuesGrid}>
                <div className={styles.valueCard}>
                    <FaBullseye className={styles.valueIcon} />
                    <h3>Innovation</h3>
                    <p>We are constantly pushing the boundaries of technology to deliver a faster, smarter, and more reliable service.</p>
                </div>
                <div className={styles.valueCard}>
                    <FaUsers className={styles.valueIcon} />
                    <h3>Customer-Centric</h3>
                    <p>Our users are at the heart of everything we do. We provide dedicated 24/7 support to ensure you&#39;re always connected.</p>
                </div>
                <div className={styles.valueCard}>
                    <FaInfinity className={styles.valueIcon} />
                    <h3>Limitless Content</h3>
                    <p>We believe in providing unrestricted access to a vast universe of entertainment, from live sports to blockbuster movies.</p>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
