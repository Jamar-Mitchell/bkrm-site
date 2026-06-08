import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function RevealOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { y: 0, x: 24 },
    right: { y: 0, x: -24 },
  }

  const { x, y } = directions[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration: 0.5,
        delay: delay * 0.6,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
