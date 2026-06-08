import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.pattern} />
      <div className={styles.glow} />

      <motion.div className={styles.content} style={{ opacity, willChange: 'opacity' }}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Private &middot; Curated &middot; Intentional
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        >
          BACKROOM
        </motion.h1>

        <motion.div
          className={styles.line}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
        />

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          A curated room of founders, innovators, and decision-makers
          shaping business and culture.
        </motion.p>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          For Those Building Whats Next
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </motion.div>
    </section>
  )
}
