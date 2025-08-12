// src/pages/privacy.js
import Head from 'next/head';
import Layout from '../app/components/Layout/Layout';
import { siteConfig } from '../app/config';
import styles from '../app/styles/Privacy.module.css';

const Privacy = () => {
    return (
        <Layout>
            <Head>
                <title>Privacy Policy - {siteConfig.name}</title>
            </Head>
            <section className={styles.privacyHero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Privacy Policy</h1>
                </div>
            </section>
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>
                    <h2>Information We Collect</h2>
                    <p>
                        We collect information to provide better services to all our users. The types of information we collect include your name, email address, and payment information when you subscribe to our service.
                    </p>
                    <h2>How We Use Information</h2>
                    <p>
                        The information we collect is used to operate, maintain, and improve our services. We do not share your personal information with companies, organizations, or individuals outside of {siteConfig.name} except for legal reasons.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default Privacy;
