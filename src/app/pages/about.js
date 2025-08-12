import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../config/siteConfig';
import styles from '../styles/About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us | {siteConfig.sitename}</title>
      </Head>

      <section className={styles.hero}>
        <div className="container">
          <h1 className="page-title">Our Story</h1>
          <p className={styles.subtitle}>Pioneering the future of IPTV streaming</p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className="section-title">Our Mission</h2>
              <p>At {siteConfig.sitename}, we&#39;re revolutionizing how people experience television. Our mission is to deliver seamless, high-quality streaming that transcends traditional broadcasting limitations.</p>
              <p>Founded in 2023 by a team of streaming technology veterans, we&#39;ve combined cutting-edge infrastructure with user-centric design to create the ultimate IPTV experience.</p>
            </div>
            <div className={styles.image}>
              {/* Placeholder for team image */}
              <div className={styles.teamPlaceholder}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <i className="fas fa-bolt"></i>
              <h3>Innovation</h3>
              <p>Continuously pushing boundaries in streaming technology and user experience.</p>
            </div>
            <div className={styles.valueCard}>
              <i className="fas fa-shield-alt"></i>
              <h3>Reliability</h3>
              <p>99.9% uptime guarantee with redundant systems across global data centers.</p>
            </div>
            <div className={styles.valueCard}>
              <i className="fas fa-users"></i>
              <h3>Community</h3>
              <p>Building a streaming ecosystem that connects viewers worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.technology}>
        <div className="container">
          <h2 className="section-title">Our Technology</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>
                <i className="fas fa-server"></i>
              </div>
              <h3>Global CDN</h3>
              <p>Content delivered through 200+ edge locations worldwide for minimal latency.</p>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>
                <i className="fas fa-robot"></i>
              </div>
              <h3>AI Optimization</h3>
              <p>Machine learning algorithms that adapt streaming quality to your connection.</p>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>
                <i className="fas fa-lock"></i>
              </div>
              <h3>Military-Grade Security</h3>
              <p>End-to-end encryption and anti-piracy measures to protect your content.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to experience the future of streaming?</h2>
          <Link href="/trial" className="btn btn-primary">Start Free Trial</Link>
        </div>
      </section>
    </div>
  );
}
