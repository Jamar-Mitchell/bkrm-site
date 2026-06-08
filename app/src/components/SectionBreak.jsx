import styles from './SectionBreak.module.css'

export default function SectionBreak() {
  return (
    <div className={styles.break}>
      <div className={styles.line} />
      <span className={styles.dot} />
      <div className={styles.line} />
    </div>
  )
}
