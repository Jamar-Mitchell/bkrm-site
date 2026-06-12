import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img src={`${import.meta.env.BASE_URL}backroom-wordmark.svg`} alt="BKRM" className={styles.logo} />
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} BackRoom. All rights reserved.</p>
      <p className={styles.powered}>Powered by <a href="https://blacktagdevs.com" target="_blank" rel="noopener noreferrer">blacktagdevs.com</a></p>
    </footer>
  )
}
