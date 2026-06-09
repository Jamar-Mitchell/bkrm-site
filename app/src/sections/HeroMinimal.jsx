import { motion } from 'framer-motion'
import styles from './HeroMinimal.module.css'

export default function HeroMinimal() {
  return (
    <section className={styles.hero}>
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Private · Curated · Intentional
      </motion.p>

      <div className={styles.logoWrap}>
        <div className={styles.glow} />
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
        >
          <img src="/backroom-logo.jpg" alt="BKRM" />
        </motion.div>
      </div>

      <motion.div
        className={styles.line}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />

      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        For Those Building Whats Next
      </motion.p>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <div className={styles.scrollDot} />
      </motion.div>
    </section>
  )
}
