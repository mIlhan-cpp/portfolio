import { motion } from 'framer-motion'
const nodes = [[50,70],[150,120],[250,60],[120,220],[230,240],[70,200]]
const edges = [[0,1],[1,2],[1,3],[3,4],[0,5],[5,3],[2,4]]
export default function About() {
  const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.7 } }
  return (
    <section id="about" className="px-5 py-24"><div className="mx-auto max-w-6xl">
      <motion.h2 {...fade} className="h-big">A little<br />about me</motion.h2>
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <motion.div {...fade} className="max-w-xl space-y-4 text-mute">
          <p>I’m an AI/ML engineering graduate with an interest in building things that solve actual problems. My work spans Generative AI, machine learning, backend development and full-stack applications.</p>
          <p>I’ve worked on everything from document-based AI assistants and automation workflows to web applications built for real clients.</p>
          <p>I enjoy exploring new technologies, understanding how things work behind the scenes and taking ideas from an initial concept to something people can actually use.</p>
        </motion.div>
        <svg viewBox="0 0 300 300" role="img" aria-label="Abstract network of connected nodes" className="aspect-square w-full rounded-2xl border border-white/10 bg-bg2">
          {edges.map(([a, b], i) => <motion.line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="rgba(57,127,232,.7)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.12 }} />)}
          {nodes.map(([x, y], i) => <motion.circle key={i} cx={x} cy={y} r={7} fill={i % 2 ? '#8AB8FF' : '#6DA5F5'} animate={{ r: [6, 9, 6] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }} />)}
        </svg>
      </div>
    </div></section>
  )
}
