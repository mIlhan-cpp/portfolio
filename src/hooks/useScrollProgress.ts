import { useRef } from 'react'
import { useScroll } from 'framer-motion'
export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  return { ref, progress: scrollYProgress }
}
