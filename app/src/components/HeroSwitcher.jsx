import { useHero } from '../context/HeroContext'
import styles from './HeroSwitcher.module.css'

const labels = {
  default: 'Gold',
  split: 'Split',
  minimal: 'Minimal',
  typewriter: 'Type',
  photo: 'Photo',
}

export default function HeroSwitcher() {
  const { heroVariant, setHeroVariant, heroes } = useHero()

  return (
    <div className={styles.switcher}>
      <span className={styles.label}>Hero</span>
      <div className={styles.options}>
        {heroes.map((key) => (
          <button
            key={key}
            className={`${styles.btn} ${heroVariant === key ? styles.active : ''}`}
            onClick={() => setHeroVariant(key)}
          >
            {labels[key]}
          </button>
        ))}
      </div>
    </div>
  )
}
