// src/pages/renew.js
import Head from 'next/head';
import Layout from '../app/components/Layout/Layout';
import { siteConfig } from '../app/config';
import styles from '../app/styles/Renew.module.css';

const Renew = () => {
    return (
        <Layout>
            <Head>
                <title>Renew Subscription - {siteConfig.name}</title>
            </Head>
            <section className={styles.renewSection}>
                <div className="container">
                    <h1 className={styles.title}>Renew Your Subscription</h1>
                    <p className={styles.subtitle}>Our renewal form is currently under construction. Please contact support to renew your plan.</p>
                </div>
            </section>
        </Layout>
    );
};

export default Renew;
