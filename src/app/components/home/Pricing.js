// src/app/components/home/Pricing.js
import React from 'react';
import styles from './Pricing.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';


const pricingPlans = [
  {
    plan: "Standard",
    price: "15",
    duration: "/month",
    features: [
      "1 Connection",
      "20,000+ Channels",
      "80,000+ VOD",
      "HD/4K Quality",
      "24/7 Support"
    ],
    popular: false
  },
  {
    plan: "Premium",
    price: "35",
    duration: "/3 months",
    features: [
      "2 Connections",
      "20,000+ Channels",
      "80,000+ VOD",
      "HD/4K Quality",
      "No IP Lock"
    ],
    popular: true
  },
  {
    plan: "Ultimate",
    price: "90",
    duration: "/year",
    features: [
      "4 Connections",
      "20,000+ Channels",
      "80,000+ VOD",
      "HD/4K Quality",
      "All Premium Features"
    ],
    popular: false
  }
];

const Pricing = () => {
    const cardVariants = {
        offscreen: {
          y: 50,
          opacity: 0
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
          }
        }
      };

  return (
    <section className={styles.pricingSection}>
      <div className="container">
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Choose Your Plan</h2>
          <p className={styles.subtitle}>
            Select the perfect plan for your entertainment needs. All plans include our full feature set.
          </p>
        </div>
        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.15 }}
            >
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <h3 className={styles.planTitle}>{plan.plan}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.price}>${plan.price}</span>
                <span className={styles.duration}>{plan.duration}</span>
              </div>
              <ul className={styles.featuresList}>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle className={styles.checkIcon} /> {feature}
                  </li>
                ))}
              </ul>
              <button className={styles.ctaButton}>Get Started</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;