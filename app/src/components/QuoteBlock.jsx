import styles from './QuoteBlock.module.css'

export default function QuoteBlock({ quote, cite = '— BackRoom', variant = 'light' }) {
  return (
    <div className={`${styles.block} ${styles[variant]}`}>
      <blockquote className={styles.quote}>"{quote}"</blockquote>
      <cite className={styles.cite}>{cite}</cite>
    </div>
  )
}
