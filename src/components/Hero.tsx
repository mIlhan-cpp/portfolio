import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 140])
  const [m, setM] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const f = (e: PointerEvent) => setM({ x: e.clientX / innerWidth - 0.5, y: e.clientY / innerHeight - 0.5 })
    addEventListener('pointermove', f); return () => removeEventListener('pointermove', f)
  }, [])
  const line = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }
  return (
    <header id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pb-14 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,transparent_34%,rgba(3,6,18,0.20)_100%)]" />
      <motion.div style={{ y }} className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}
          style={{ x: m.x * -18 }} className="bgname select-none whitespace-nowrap text-[min(19vw,17rem)] font-extrabold leading-[.9]">MILHAN KHAN</motion.div>
      </motion.div>
      <motion.div className="relative z-10 mx-auto w-full max-w-6xl px-5" initial="hidden" animate="show" transition={{ staggerChildren: 0.15, delayChildren: 0.4 }}>
        <motion.p variants={line} className="mb-2 tracking-widest text-ac2">HELLO, I’M MILHAN,</motion.p>
        <motion.h1 variants={line} className="mb-5 text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-none">AI/ML Engineer<br />&amp; Full-Stack Developer</motion.h1>
        <motion.p variants={line} className="mb-7 max-w-md text-mute">I build intelligent applications, experiment with emerging AI technologies and turn ideas into useful digital products.</motion.p>
        <motion.div variants={line} className="flex flex-wrap gap-3">
          <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} href="#projects" className="rounded-full bg-ac px-7 py-3 font-semibold">Explore My Work</motion.a>
          <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} href="/Milhan_Khan.pdf" download className="rounded-full border border-white/20 px-7 py-3 font-semibold hover:bg-white/5">Download Resume</motion.a>
        </motion.div>
      </motion.div>
    </header>
  )
}
