import { useRef } from 'react'
import { motion, useTransform, useMotionValue, useSpring, MotionValue } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'
import Visual from './Visual'
interface Props { p: Project; i: number; total: number; progress: MotionValue<number> }
export default function ProjectCard({ p, i, total, progress }: Props) {
  const scale = useTransform(progress, [i / total, 1], [1, 1 - (total - i - 1) * 0.035])
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })
  const ref = useRef<HTMLElement>(null)
  const move = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 6); rx.set((0.5 - (e.clientY - r.top) / r.height) * 5)
  }
  const btn = 'inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold transition hover:-translate-y-0.5'
  return (
    <motion.article ref={ref} onPointerMove={move} onPointerLeave={() => { rx.set(0); ry.set(0) }}
      style={{ scale, rotateX: rx, rotateY: ry, top: 80 + i * 14, transformPerspective: 1200 }}
      className={`mb-8 grid gap-7 rounded-3xl border bg-gradient-to-br from-[#0A1830] to-bg2 p-6 shadow-[0_-16px_40px_rgba(0,0,0,.6)] md:sticky md:p-8 ${p.featured ? 'border-ac shadow-[0_-16px_40px_rgba(0,0,0,.6),0_0_70px_rgba(57,127,232,.25)] md:grid-cols-[1fr_1.4fr]' : 'border-white/10 md:grid-cols-[1fr_1.1fr]'}`}>
      <div>
        <p className="text-sm text-mute">{String(i + 1).padStart(2, '0')} · {p.category}
          <span className={`ml-2 rounded-full border px-3 py-0.5 text-xs ${p.type === 'Freelance' ? 'border-ac bg-ac text-white' : 'border-ac2 text-ac2'}`}>{p.typeLabel}</span></p>
        <h3 className="my-2 text-[clamp(1.6rem,3.6vw,2.6rem)] font-extrabold uppercase leading-none">{p.name}</h3>
        <p className="mb-3 text-mute">{p.blurb}</p>
        {p.problem && <p className="mb-3 text-sm text-mute"><b className="font-semibold text-ink">The problem: </b>{p.problem}</p>}
        <ul className="mb-3 list-disc space-y-0.5 pl-5 text-sm text-mute">{p.built.map(b => <li key={b}>{b}</li>)}</ul>
        {p.impl && <p className="mb-3 text-sm text-mute">{p.impl}</p>}
        <div className="mb-4 flex flex-wrap gap-1.5">{p.stack.map(s => <span key={s} className="rounded-md bg-white/5 px-2.5 py-1 text-xs">{s}</span>)}</div>
        <div className="flex flex-wrap gap-2.5">
          {p.live && <a className={`${btn} border-ac bg-ac`} href={p.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} />Live Project</a>}
          {p.github && <a className={btn} href={p.github} target="_blank" rel="noopener noreferrer"><Github size={14} />GitHub</a>}
        </div>
      </div>
      <motion.div whileHover={{ scale: 1.03, rotate: -0.5 }} className="flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#061022] p-4 shadow-[inset_0_0_40px_rgba(57,127,232,.15),0_20px_30px_rgba(0,0,0,.4)]">
        <Visual kind={p.visual} />
      </motion.div>
    </motion.article>
  )
}
