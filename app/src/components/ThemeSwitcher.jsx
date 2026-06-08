import { useTheme } from '../context/ThemeContext'
import styles from './ThemeSwitcher.module.css'

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme()

  return (
    <div className={styles.switcher}>
      <span className={styles.label}>Theme</span>
      <div className={styles.options}>
        {Object.entries(themes).map(([key, { name, accent }]) => (
          <button
            key={key}
            className={`${styles.dot} ${theme === key ? styles.active : ''}`}
            style={{ background: accent }}
            onClick={() => setTheme(key)}
            title={name}
            aria-label={`Switch to ${name} theme`}
          />
        ))}
      </div>
    </div>
  )
}
