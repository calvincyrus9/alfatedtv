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
              Founded by a team of streaming enthusiasts and tech innovators, {siteConfig.name} was born from a desire to create a truly seamless and limitless entertainment experience. We saw a future where access to global content was not a luxury, but a standard.
            </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;