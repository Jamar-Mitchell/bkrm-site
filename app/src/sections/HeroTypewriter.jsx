import { motion } from 'framer-motion'
import styles from './HeroTypewriter.module.css'

const letters = 'BACKROOM'.split('')

const container = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
}

const letter = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function HeroTypewriter() {
  return (
    <section className={styles.hero}>
      <div className={styles.pattern} />

      <div className={styles.content}>
        <motion.div
          className={styles.title}
          variants={container}
          initial="initial"
          animate="animate"
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              variants={letter}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className={styles.char}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className={styles.line}
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        />

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          A private, curated room of founders, innovators, and decision-makers
          shaping business and culture.
        </motion.p>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          For those building what's next
        </motion.p>
      </div>
    </section>
  )
}
