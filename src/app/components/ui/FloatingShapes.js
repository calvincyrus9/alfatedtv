// src/components/ui/FloatingShapes.js
import styles from './FloatingShapes.module.css';

const FloatingShapes = () => {
  return (
    <div className={styles.floatingShapes}>
      <div className={`${styles.shape} ${styles.shape1}`}></div>
      <div className={`${styles.shape} ${styles.shape2}`}></div>
      <div className={`${styles.shape} ${styles.shape3}`}></div>
    </div>
  );
};

export default FloatingShapes;