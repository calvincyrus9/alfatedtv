import Head from 'next/head';
import { useState } from 'react';
import siteConfig from '../config/siteConfig';
import styles from '../styles/Contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent! We\'ll respond within 24 hours.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us | {siteConfig.sitename}</title>
      </Head>

      <section className={styles.hero}>
        <div className="container">
          <h1 className="page-title">Get in Touch</h1>
          <p className={styles.subtitle}>Our support team is ready to assist you 24/7</p>
        </div>
      </section>

      <section className={styles.contactContent}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2 className="section-title">Contact Information</h2>
              
              <div className={styles.infoItem}>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Headquarters</h3>
                  <p>{siteConfig.contact.address}</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Support Hotline</h3>
                  <p>{siteConfig.contact.phone}</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>{siteConfig.contact.email}</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <i className="fas fa-headset"></i>
                <div>
                  <h3>Live Chat</h3>
                  <p>Available 24/7 through our app</p>
                </div>
              </div>
              
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}><i className="fab fa-facebook-f"></i></a>
                <a href="#" className={styles.socialLink}><i className="fab fa-twitter"></i></a>
                <a href="#" className={styles.socialLink}><i className="fab fa-instagram"></i></a>
                <a href="#" className={styles.socialLink}><i className="fab fa-youtube"></i></a>
                <a href="#" className={styles.socialLink}><i className="fab fa-discord"></i></a>
              </div>
            </div>
            
            <div className={styles.contactForm}>
              <h2 className="section-title">Send Us a Message</h2>
              
              {submitMessage && (
                <div className={`${styles.alert} ${styles[submitMessage.type]}`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="Enter your name" 
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
                    required 
                    placeholder="Enter your email" 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    placeholder="What is this regarding?" 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    rows="5" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.map}>
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <div className={styles.mapPlaceholder}>
            {/* Google Maps would go here */}
            <div className={styles.mapOverlay}>
              <h3>NexusStream Headquarters</h3>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}