import RevealOnScroll from '../components/RevealOnScroll'
import styles from './Founder.module.css'

export default function Founder() {
  return (
    <section className={styles.section}>
      <RevealOnScroll>
        <div className={styles.intro}>
          <div className={styles.imageWrap}>
            <img src="/headshot.jpeg" alt="Ashanti Callender" className={styles.image} />
          </div>
          <div className={styles.introText}>
            <p className={styles.eyebrow}>Founder</p>
            <h2 className={styles.name}>Ashanti Callender</h2>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.15}>
        <div className={styles.letter}>
          <p>
            I've spent years in rooms that shaped my trajectory — spaces where a single
            conversation led to a partnership, a pivot, or a breakthrough.
          </p>
          <p>
            BackRoom was born from a belief that proximity is the most undervalued
            currency in business.
          </p>
          <p>
            We don't build for volume. We build for resonance. Every experience is
            designed to create meaningful collisions between people who are actively
            building something significant.
          </p>
          <p>
            This isn't about access for access' sake — it's about engineered serendipity
            in spaces where trust is the baseline.
          </p>
          <p className={styles.signature}>— Ashanti</p>
        </div>
      </RevealOnScroll>
    </section>
  )
}
