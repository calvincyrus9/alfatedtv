// src/app/components/home/Features.js
import React from 'react';
import styles from './Features.module.css';
import { siteConfig } from '../../config';
import { motion } from 'framer-motion';
import { FaSatelliteDish, FaFilm, FaDesktop, FaMobileAlt, FaClock, FaHeadset } from 'react-icons/fa';

const featureData = [
  {
    icon: <FaSatelliteDish />,
    title: "Vast Channel Selection",
    description: "Explore thousands of live channels from across the globe, covering every category imaginable."
  },
  {
    icon: <FaFilm />,
    title: "On-Demand Library",
    description: "Access a massive library of movies and TV series, updated regularly with the latest releases."
  },
  {
    icon: <FaDesktop />,
    title: "Crystal Clear Quality",
    description: "Experience buffer-free streaming in stunning HD, FHD, and 4K quality on all your devices."
  },
  {
    icon: <FaMobileAlt />,
    title: "Multi-Device Support",
    description: "Watch on your Smart TV, computer, smartphone, or tablet. Our service is compatible with all major platforms."
  },
  {
    icon: <FaClock />,
    title: "Instant Activation",
    description: "Get immediate access to our full range of content as soon as you sign up. No waiting required."
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available around the clock to assist you with any questions or issues."
  }
];

const Features = () => {
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
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Why Choose {siteConfig.name}?</h2>
          <p className={styles.subtitle}>
            We provide a premium, feature-rich streaming experience designed for the modern viewer.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {featureData.map((feature, index) => (
            <motion.div 
              key={index} 
              className={styles.featureCard}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
