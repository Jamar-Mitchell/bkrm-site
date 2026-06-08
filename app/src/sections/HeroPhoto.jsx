import { motion } from 'framer-motion'
import styles from './HeroPhoto.module.css'

export default function HeroPhoto() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <img
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1920&q=80"
          alt="Event"
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        >
          BACKROOM
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          A curated room of founders, innovators, and decision-makers
          shaping business and culture.
        </motion.p>

        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className={styles.badgeText}>Est. 2024</span>
          <span className={styles.badgeDot}>·</span>
          <span className={styles.badgeText}>By Invitation</span>
        </motion.div>
      </div>

      <motion.div
        className={styles.bottom}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <span>For Those Building Whats Next</span>
      </motion.div>
    </section>
  )
}
