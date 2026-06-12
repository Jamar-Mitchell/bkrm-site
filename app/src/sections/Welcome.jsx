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
          Backroom was built on a simple principle: proximity determines outcomes.
          The right room doesn't just create connection—it accelerates opportunity.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.25}>
        <p className={styles.body}>
          We bring together founders, innovators, and changemakers to connect with
          intention, exchange ideas, and build alongside one another.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.3}>
        <p className={styles.body}>
          The most impactful ideas aren't created in isolation—they're shaped through
          conversation, proximity, and shared perspective.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.35}>
        <p className={styles.body}>
          This is more than a series of events.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.4}>
        <p className={styles.body}>
          It's the beginning of a community built for those shaping what's next.
        </p>
      </RevealOnScroll>
    </section>
  )
}
