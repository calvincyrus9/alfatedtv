import Head from 'next/head';
import siteConfig from '../app/config';
import styles from '../styles/Privacy.module.css';

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy | {siteConfig.sitename}</title>
      </Head>

      <section className={styles.hero}>
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <p className={styles.subtitle}>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className={styles.privacyContent}>
        <div className="container">
          <div className={styles.content}>
            <p>Your privacy is important to us at {siteConfig.sitename}. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
            
            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways:</p>
            
            <h3>Personal Data</h3>
            <p>While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you, including:</p>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Payment information</li>
              <li>Device information</li>
              <li>Usage data</li>
            </ul>
            
            <h3>Usage Data</h3>
            <p>We may collect information on how the service is accessed and used, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited</li>
              <li>Time and date of visit</li>
              <li>Time spent on pages</li>
              <li>Device identifiers</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our service</li>
              <li>Improve, personalize, and expand our service</li>
              <li>Understand and analyze how you use our service</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Find and prevent fraud</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            
            <h2>Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li>The right to access - You have the right to request copies of your personal data.</li>
              <li>The right to rectification - You have the right to request correction of any inaccurate information.</li>
              <li>The right to erasure - You have the right to request deletion of your personal data.</li>
              <li>The right to restrict processing - You have the right to request restriction of processing your personal data.</li>
              <li>The right to data portability - You have the right to request transfer of your data to another organization.</li>
              <li>The right to object to processing - You have the right to object to our processing of your personal data.</li>
            </ul>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at {siteConfig.contact.email}.</p>
          </div>
        </div>
      </section>
    </div>
  );
}