import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img src={`${import.meta.env.BASE_URL}backroom-wordmark.svg`} alt="BKRM" className={styles.logo} />
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} BackRoom. All rights reserved.</p>
    </footer>
  )
}
