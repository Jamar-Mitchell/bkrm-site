import RevealOnScroll from '../components/RevealOnScroll'
import QuoteBlock from '../components/QuoteBlock'
import styles from './WhyThisAudience.module.css'

const reasons = [
  'Intentional about where they invest their time and energy',
  'Seeking environments that match their ambition',
  'Investing in people before pitches',
  'Valuing meaningful connection over surface-level networking',
]

export default function WhyThisAudience() {
  return (
    <section className={styles.section}>
      <RevealOnScroll>
        <h2 className={styles.heading}>WHY THIS AUDIENCE</h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <p className={styles.sub}>
          Backroom brings together individuals who value intention over noise.
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
          Backroom isn't a network. It's a community for ambitious builders
          who demand elevated spaces—and deliver impact in return.
        </p>
      </RevealOnScroll>
    </section>
  )
}
