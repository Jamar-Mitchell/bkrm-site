import { motion } from 'framer-motion'
import styles from './HeroSplit.module.css'

export default function HeroSplit() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Private membership
        </motion.p>

        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <img src="/backroom-logo.jpg" alt="BKRM" />
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A curated room of founders, innovators, and decision-makers
          shaping business and culture.
        </motion.p>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="https://form.typeform.com/to/VsSeEVzN" target="_blank" rel="noopener noreferrer" className={styles.btn}>Request Access</a>
          <span className={styles.note}>By invitation only</span>
        </motion.div>
      </div>

      <div className={styles.right}>
        <div className={styles.fade} />
      </div>
    </section>
  )
}
