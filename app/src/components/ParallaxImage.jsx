import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './ParallaxImage.module.css'

export default function ParallaxImage({ src, quote, height = '55vh' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className={styles.section} style={{ height }}>
      <motion.div
        className={styles.bg}
        style={{ y, willChange: 'transform' }}
      >
        <img src={src} alt="" />
      </motion.div>
      <div className={styles.overlay} />
      {quote && <p className={styles.text}>"{quote}"</p>}
    </section>
  )
}
