import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <span>B</span><span>K</span><span>R</span><span>M</span>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} BackRoom. All rights reserved.</p>
    </footer>
  )
}
