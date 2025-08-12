import Head from 'next/head';
import { useState } from 'react';
import siteConfig from '../config/siteConfig';
import styles from '../styles/Renew.module.css';

export default function RenewPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [subscriptionInfo, setSubscriptionInfo] = useState(null);

  const handleCheckSubscription = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubscriptionInfo({
        plan: 'Premium',
        expires: '2023-12-31',
        price: '$19.99',
        status: 'Active'
      });
      setMessage({
        type: 'success',
        text: 'Subscription found!'
      });
    }, 1500);
  };

  const handleRenew = () => {
    setIsLoading(true);
    
    // Simulate renewal process
    setTimeout(() => {
      setIsLoading(false);
      setMessage({
        type: 'success',
        text: 'Subscription renewed successfully! New expiration date: 2024-12-31'
      });
      setSubscriptionInfo({
        ...subscriptionInfo,
        expires: '2024-12-31'
      });
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Renew Subscription | {siteConfig.sitename}</title>
      </Head>

      <section className={styles.hero}>
        <div className="container">
          <h1 className="page-title">Renew Your Subscription</h1>
          <p className={styles.subtitle}>Continue enjoying uninterrupted access to premium content</p>
        </div>
      </section>

      <section className={styles.renewContent}>
        <div className="container">
          <div className={styles.renewSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Check Subscription</h3>
              <p>Enter your account email to check your subscription status</p>
              
              <form onSubmit={handleCheckSubscription} className={styles.checkForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Account Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    placeholder="Enter your account email" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? 'Checking...' : 'Check Subscription'}
                </button>
              </form>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Renewal Options</h3>
              
              {message && (
                <div className={`${styles.alert} ${styles[message.type]}`}>
                  {message.text}
                </div>
              )}
              
              {subscriptionInfo ? (
                <div className={styles.subscriptionInfo}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoRow}>
                      <span>Current Plan:</span>
                      <strong>{subscriptionInfo.plan}</strong>
                    </div>
                    <div className={styles.infoRow}>
                      <span>Expiration Date:</span>
                      <strong>{subscriptionInfo.expires}</strong>
                    </div>
                    <div className={styles.infoRow}>
                      <span>Renewal Price:</span>
                      <strong>{subscriptionInfo.price}</strong>
                    </div>
                    <div className={styles.infoRow}>
                      <span>Status:</span>
                      <strong className={styles.activeStatus}>{subscriptionInfo.status}</strong>
                    </div>
                  </div>
                  
                  <div className={styles.renewOptions}>
                    <h4>Select Renewal Period:</h4>
                    <div className={styles.optionsGrid}>
                      <div className={styles.optionCard}>
                        <h5>1 Month</h5>
                        <div className={styles.optionPrice}>$19.99</div>
                        <p>Standard monthly renewal</p>
                        <button 
                          className="btn btn-secondary"
                          onClick={() => handleRenew(1)}
                          disabled={isLoading}
                        >
                          Renew
                        </button>
                      </div>
                      <div className={styles.optionCard}>
                        <h5>3 Months</h5>
                        <div className={styles.optionPrice}>$54.99</div>
                        <p>Save 10% compared to monthly</p>
                        <button 
                          className="btn btn-secondary"
                          onClick={() => handleRenew(3)}
                          disabled={isLoading}
                        >
                          Renew
                        </button>
                      </div>
                      <div className={`${styles.optionCard} ${styles.recommended}`}>
                        <div className={styles.recommendedBadge}>Best Value</div>
                        <h5>12 Months</h5>
                        <div className={styles.optionPrice}>$199.99</div>
                        <p>Save 20% compared to monthly</p>
                        <button 
                          className="btn btn-primary"
                          onClick={() => handleRenew(12)}
                          disabled={isLoading}
                        >
                          Renew Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className={styles.placeholderText}>
                  Enter your email and check your subscription to see renewal options.
                </p>
              )}
            </div>
          </div>
          
          <div className={styles.benefits}>
            <h2>Why Renew with {siteConfig.sitename}?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <i className="fas fa-sync-alt"></i>
                <h3>Seamless Continuation</h3>
                <p>No interruption to your service when you renew before expiration</p>
              </div>
              <div className={styles.benefitCard}>
                <i className="fas fa-gift"></i>
                <h3>Loyalty Discounts</h3>
                <p>Long-term subscribers get special pricing and bonuses</p>
              </div>
              <div className={styles.benefitCard}>
                <i className="fas fa-shield-alt"></i>
                <h3>Price Protection</h3>
                <p>Your rate is guaranteed when you renew early</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}