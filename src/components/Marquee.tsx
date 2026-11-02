import { marquee } from '../data/skills'
export default function Marquee() {
  return (
    <div className="mq space-y-3 overflow-hidden border-y border-white/10 bg-bg2 py-6" aria-label="Technologies I work with">
      {marquee.map((row, i) => (
        <div key={i} className={`row ${i ? 'r' : ''}`}>
          {[...row, ...row].map((t, j) => <span key={j} className="whitespace-nowrap rounded-full border border-white/10 px-5 py-2 text-mute">{t}</span>)}
        </div>
      ))}
    </div>
  )
}
