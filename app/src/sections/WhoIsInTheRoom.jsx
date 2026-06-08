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
  'Selective about where they show up',
  'Invest in environments aligned with their standard',
  'Value proximity to other high-caliber builders',
  'Move through trusted networks, not open rooms',
]

export default function WhoIsInTheRoom() {
  return (
    <section className={styles.section}>
      <RevealOnScroll>
        <h2 className={styles.heading}>WHO IS IN THE ROOM</h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <p className={styles.sub}>Founders, Innovators, and Decision-Makers</p>
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
        <QuoteBlock quote="The best businesses aren't built in silos — they're built in community." />
      </RevealOnScroll>
    </section>
  )
}
