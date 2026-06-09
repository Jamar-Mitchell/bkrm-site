import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './Gallery.module.css'

const images = [
  { src: `${import.meta.env.BASE_URL}bkrm-2.jpg`, alt: 'Dinner' },
  { src: `${import.meta.env.BASE_URL}bkrm-3.jpg`, alt: 'Networking' },
  { src: `${import.meta.env.BASE_URL}bkrm-4.jpg`, alt: 'Gathering' },
  { src: `${import.meta.env.BASE_URL}bkrm-5.jpg`, alt: 'Connection' },
  { src: `${import.meta.env.BASE_URL}bkrm-7.jpg`, alt: 'Event' },
  { src: `${import.meta.env.BASE_URL}bkrm-8.jpg`, alt: 'Gala' },
]

export default function Gallery() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

  return (
    <section ref={containerRef} className={styles.gallery}>
      <motion.div className={styles.track} style={{ x }}>
        {images.map((img, i) => (
          <div key={i} className={styles.item}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
