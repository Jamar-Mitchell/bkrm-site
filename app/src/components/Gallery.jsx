import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './Gallery.module.css'

const images = [
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&q=80', alt: 'Event' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80', alt: 'Gathering' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80', alt: 'Networking' },
  { src: 'https://images.unsplash.com/photo-1591115765373-5f9cf1da241c?w=700&q=80', alt: 'Discussion' },
  { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=700&q=80', alt: 'Dinner' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=80', alt: 'Night' },
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
