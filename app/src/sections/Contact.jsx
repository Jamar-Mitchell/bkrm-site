import RevealOnScroll from '../components/RevealOnScroll'
import Button from '../components/Button'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section}>
      <RevealOnScroll>
        <h2 className={styles.heading}>GET IN THE ROOM</h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <p className={styles.body}>
          BackRoom is for those who move with intention. If that's you, let's connect.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className={styles.cta}>
          <a href="https://form.typeform.com/to/VsSeEVzN" target="_blank" rel="noopener noreferrer"><Button>Request Access</Button></a>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.3}>
        <div className={styles.links}>
          <a href="mailto:INFO@BKRM.IO" className={styles.link}>INFO@BKRM.IO</a>
        </div>
      </RevealOnScroll>
    </section>
  )
}
