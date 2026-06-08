import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'
import QuoteBlock from '../components/QuoteBlock'
import styles from './Partnership.module.css'

const features = [
  {
    title: 'HIGH-VALUE AUDIENCE',
    body: "Porsche Studio Chevy Chase becomes the setting for a curated room — placing the brand directly inside a high-value network of founders, innovators, and decision-makers.",
  },
  {
    title: 'EXCLUSIVE SETTING',
    body: "An intimate, premium environment that aligns with Porsche's commitment to precision and excellence.",
  },
  {
    title: 'BRAND ALIGNMENT',
    body: "Natural resonance between Porsche's identity and our audience — innovation, performance, and understated status.",
  },
]

export default function Partnership() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />

      <RevealOnScroll>
        <p className={styles.eyebrow}>Soft Launch Partnership</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <h2 className={styles.heading}>
          PORSCHE STUDIO <span className={styles.accent}>×</span> BACKROOM
        </h2>
      </RevealOnScroll>

      <div className={styles.grid}>
        {features.map((feat, i) => (
          <RevealOnScroll key={i} delay={0.15 + i * 0.1}>
            <motion.div
              className={styles.card}
              whileHover={{ borderColor: 'rgba(201,168,76,0.6)', transition: { duration: 0.3 } }}
            >
              <h4 className={styles.cardTitle}>{feat.title}</h4>
              <p className={styles.cardBody}>{feat.body}</p>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.4}>
        <QuoteBlock
          quote="Experience becomes shared wisdom and shared wisdom becomes leverage."
          variant="dark"
        />
      </RevealOnScroll>
    </section>
  )
}
