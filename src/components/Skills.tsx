import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../data/skills'
export default function Skills() {
  const [a, setA] = useState(0)
  const g = skills[a]
  const pos = (i: number, n: number) => { const t = (i / n) * Math.PI * 2 - Math.PI / 2; return [50 + 38 * Math.cos(t), 50 + 40 * Math.sin(t)] }
  return (
    <section id="skills" className="px-5 py-24"><div className="mx-auto max-w-6xl">
      <h2 className="h-big">My toolkit</h2>
      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <div role="tablist" aria-label="Skill categories" className="flex flex-row flex-wrap gap-2 lg:flex-col">
          {skills.map((s, i) => (
            <button key={s.name} role="tab" aria-selected={a === i} onMouseEnter={() => setA(i)} onFocus={() => setA(i)} onClick={() => setA(i)}
              className={`rounded-xl border px-4 py-3 text-left transition ${a === i ? 'border-ac bg-ac/15 shadow-[0_0_30px_rgba(57,127,232,.3)]' : 'border-white/10 bg-bg2 hover:border-white/30'}`}>{s.name}</button>
          ))}
          <p className="mt-2 hidden text-sm text-mute lg:block">{g.blurb} These are areas I’ve worked in, not measured levels.</p>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-bg2 sm:aspect-[16/10]" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div key={a} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
                {g.items.map((_, i) => { const [x, y] = pos(i, g.items.length); return <motion.line key={i} x1={50} y1={50} x2={x} y2={y} stroke="rgba(111,165,245,.5)" strokeWidth={0.3} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: i * 0.05 }} /> })}
              </svg>
              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#6DA5F5,#397FE8_50%,#0a1a33)] p-2 text-center text-[11px] font-semibold shadow-[0_0_50px_rgba(57,127,232,.6)] sm:h-24 sm:w-24 sm:text-xs">{g.name}</div>
              {g.items.map((s, i) => { const [x, y] = pos(i, g.items.length); return (
                <motion.span key={s} style={{ left: `${x}%`, top: `${y}%` }} initial={{ scale: 0 }} animate={{ scale: 1, y: [0, -5, 0] }} transition={{ scale: { delay: 0.1 + i * 0.05 }, y: { duration: 4 + (i % 3), repeat: Infinity } }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/15 bg-bg px-2.5 py-1 text-[11px] shadow-[0_8px_16px_rgba(0,0,0,.5)] sm:px-3 sm:text-sm">{s}</motion.span>) })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div></section>
  )
}
