import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'
import QuoteBlock from '../components/QuoteBlock'
import styles from './Experience.module.css'

const experiences = [
  {
    title: 'Private Dinners',
    description: 'Intentionally crafted dinners within a high-trust environment.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80',
  },
  {
    title: 'Executive Retreats',
    description: 'Small-group off-sites focused on restoration and peer exchange.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80',
  },
  {
    title: 'Roundtable Discussions',
    description: 'Closed-door sessions with founders scaling $1M+ sharing growth playbooks.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80',
  },
  {
    title: 'Cultural Access',
    description: 'Private access to invite-only experiences across art, dining, and emerging spaces.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&q=80',
  },
]

export default function Experience() {
  return (
    <section className={styles.section}>
      <RevealOnScroll>
        <h2 className={styles.heading}>THE EXPERIENCE</h2>
      </RevealOnScroll>

      <div className={styles.grid}>
        {experiences.map((exp, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <motion.div
              className={styles.card}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.cardImg}>
                <img src={exp.image} alt={exp.title} loading="lazy" />
              </div>
              <h3 className={styles.cardTitle}>{exp.title}</h3>
              <p className={styles.cardBody}>{exp.description}</p>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.4}>
        <QuoteBlock quote="Growth happens faster in spaces where knowledge is shared, not guarded." />
      </RevealOnScroll>
    </section>
  )
}
