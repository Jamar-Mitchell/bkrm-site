import RevealOnScroll from '../components/RevealOnScroll'
import Button from '../components/Button'
import styles from './Partnership.module.css'

export default function Partnership() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />

      <RevealOnScroll>
        <p className={styles.eyebrow}>Upcoming Event</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <h2 className={styles.heading}>
          BACKROOM: THE EXECUTIVE TABLE <span className={styles.accent}>—</span> JULY 19
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <p className={styles.body}>
          Hosted in a private penthouse on Capitol Hill, The Executive Table brings together
          25 founders, creatives, and decision-makers for an evening of intentional connection,
          elevated conversation, and entrepreneurial collaboration.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.25}>
        <p className={styles.body}>
          This is not a networking event. It's a curated room—designed to foster the kind of
          relationships that move ideas forward.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.3}>
        <p className={styles.limited}>Limited to 25 guests.</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.35}>
        <div className={styles.cta}>
          <a href="https://form.typeform.com/to/VsSeEVzN" target="_blank" rel="noopener noreferrer">
            <Button>Reserve Your Seat</Button>
          </a>
        </div>
      </RevealOnScroll>
    </section>
  )
}
