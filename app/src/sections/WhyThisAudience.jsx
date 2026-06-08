import RevealOnScroll from '../components/RevealOnScroll'
import QuoteBlock from '../components/QuoteBlock'
import styles from './WhyThisAudience.module.css'

const reasons = [
  'They choose rooms — not algorithms',
  'They respond to texture, craft, and curatorial authority',
  'They invest in people before they invest in pitches',
  'They build through trust-based proximity',
]

export default function WhyThisAudience() {
  return (
    <section className={styles.section}>
      <RevealOnScroll>
        <h2 className={styles.heading}>WHY THIS AUDIENCE</h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <p className={styles.sub}>
          Our members are not defined solely by income — they are defined by intention.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <ul className={styles.list}>
          {reasons.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </RevealOnScroll>

      <RevealOnScroll delay={0.3}>
        <p className={styles.note}>
          BackRoom isn't a network. It's a trusted ecosystem for ambitious builders 
          who demand elevated spaces — and deliver impact in return.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.35}>
        <QuoteBlock quote="Success isn't solo — it's relational. Who you're in the room with is how far you'll go." />
      </RevealOnScroll>
    </section>
  )
}
