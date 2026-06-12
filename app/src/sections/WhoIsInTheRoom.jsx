import RevealOnScroll from '../components/RevealOnScroll'
import QuoteBlock from '../components/QuoteBlock'
import styles from './WhoIsInTheRoom.module.css'

const sectors = [
  'Technology, AI & Emerging Innovation',
  'Health, Longevity & Human Performance',
  'Finance, Private Equity & Venture Capital',
  'Creative, Branding & Cultural Leadership',
]

const behaviors = [
  'Intentional about where they show up',
  'Invest in environments aligned with their values and ambition',
  'Value meaningful connection over surface-level interaction',
  'Seek out rooms that challenge and expand their thinking',
]

export default function WhoIsInTheRoom() {
  return (
    <section className={styles.section}>
      <RevealOnScroll>
        <h2 className={styles.heading}>WHO IS IN THE ROOM</h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <p className={styles.sub}>Founders, Decision-Makers, and Changemakers</p>
      </RevealOnScroll>

      <div className={styles.grid}>
        <RevealOnScroll delay={0.15}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Across Sectors</h3>
            <ul className={styles.list}>
              {sectors.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.25}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Defined by Behavior</h3>
            <ul className={styles.list}>
              {behaviors.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.35}>
        <p className={styles.membership}>Membership available starting Fall 2026</p>
      </RevealOnScroll>
    </section>
  )
}
