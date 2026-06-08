import RevealOnScroll from '../components/RevealOnScroll'
import QuoteBlock from '../components/QuoteBlock'
import styles from './Welcome.module.css'

export default function Welcome() {
  return (
    <section className={styles.section}>
      <RevealOnScroll>
        <p className={styles.eyebrow}>Welcome to</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <h2 className={styles.heading}>BACKROOM</h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <p className={styles.body}>
          BackRoom was built on a simple principle: proximity determines outcomes.
          The right room doesn't just create connection — it accelerates opportunity.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.25}>
        <p className={styles.body}>
          We bring together founders, innovators, and decision-makers who are
          shaping industries and building legacies.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.3}>
        <p className={styles.body}>
          Through bespoke experiences, we foster the relationships that turn
          ideas into impact.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.35}>
        <QuoteBlock quote="Outcomes change when the room changes." />
      </RevealOnScroll>
    </section>
  )
}
