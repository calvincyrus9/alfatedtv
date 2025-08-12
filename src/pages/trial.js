// src/pages/trial.js
import { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import SubscriptionForm from '@/components/sections/SubscriptionForm';
import config from '@/config';
import styles from '@/styles/Trial.module.css';

export default function TrialPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <Head>
        <title>Free Trial | {config.sitename}</title>
      </Head>

      <section className={`${styles.hero} section-padding`}>
        <div className="container">
          <h1 className="text-gradient">Start Your Free 7-Day Trial</h1>
          <p className={styles.subtitle}>Experience premium IPTV without any commitment</p>
          
          <div className={styles.trialForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="device">Primary Device</label>
                <select
                  id="device"
                  name="device"
                  value={formData.device}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your device</option>
                  <option value="android">Android TV/Box</option>
                  <option value="firestick">Amazon Fire Stick</option>
                  <option value="ios">iPhone/iPad</option>
                  <option value="smarttv">Smart TV</option>
                  <option value="pc">Windows/Mac</option>
                  <option value="other">Other Device</option>
                </select>
              </div>
              
              <button type="submit" className={styles.submitBtn}>Start Free Trial</button>
              
              <p className={styles.note}>
                By clicking &#34;Start Free Trial&#34;, you agree to our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>.
                No credit card required.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className="text-gradient">What&#39;s Included in Your Trial</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <i className="fas fa-tv"></i>
              <h3>Full Channel Access</h3>
              <p>Access all 10,000+ channels during your trial period</p>
            </div>
            <div className={styles.feature}>
              <i className="fas fa-film"></i>
              <h3>VOD Library</h3>
              <p>Explore our entire 50,000+ movie and TV show collection</p>
            </div>
            <div className={styles.feature}>
              <i className="fas fa-headset"></i>
              <h3>Priority Support</h3>
              <p>Get dedicated support to help with setup and questions</p>
            </div>
            <div className={styles.feature}>
              <i className="fas fa-mobile-alt"></i>
              <h3>Multi-Device Access</h3>
              <p>Use on up to 3 devices simultaneously</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}