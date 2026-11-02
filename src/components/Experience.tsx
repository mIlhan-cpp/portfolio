import { motion } from 'framer-motion'
import { experience } from '../data/experience'
export default function Experience() {
  return (
    <section id="experience" className="gradient-feature-section px-5 py-24"><div className="mx-auto max-w-6xl">
      <h2 className="h-big">Experience</h2>
      <ol className="ml-1.5 grid gap-5 border-l border-white/10 pl-7">
        {experience.map((e, i) => (
          <motion.li key={e.role} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative rounded-2xl border border-white/10 bg-bg p-6">
            <span className="absolute -left-[35px] top-8 h-3 w-3 rounded-full bg-ac shadow-[0_0_14px_#397FE8]" />
            <h3 className="text-xl font-semibold">{e.role}</h3>
            <p className="mb-3 text-sm text-ac2">{e.org}{e.period && ` · ${e.period}`}</p>
            <ul className="list-disc space-y-1 pl-5 text-mute">{e.points.map(p => <li key={p}>{p}</li>)}</ul>
          </motion.li>
        ))}
      </ol>
    </div></section>
  )
}
