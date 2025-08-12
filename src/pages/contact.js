// src/pages/contact.js
import Head from 'next/head';
import Layout from '../app/components/Layout/Layout';
import { siteConfig } from '../app/config/config';
import styles from '../app/styles/Contact.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us - {siteConfig.name}</title>
        <meta name="description" content={`Get in touch with the ${siteConfig.name} team.`} />
      </Head>
      <section className={styles.contactHero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>We&#39;re here to help with any questions you may have.</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <span>support@{siteConfig.name.toLowerCase()}.com</span>
            </div>
            <div className={styles.infoItem}>
              <FaPhone className={styles.infoIcon} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <span>123 Tech Avenue, Future City</span>
            </div>
          </div>
          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className={styles.formTextarea} required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
