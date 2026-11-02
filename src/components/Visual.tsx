import type { Project } from '../data/projects'
export default function Visual({ kind }: { kind: Project['visual'] }) {
  const svg = 'max-h-64 w-full'
  switch (kind) {
    case 'tiles': return <div className="mlg" aria-hidden>{[...Array(6)].map((_, i) => <i key={i} />)}</div>
    case 'rag': return (
      <svg viewBox="0 0 520 120" className={svg} role="img" aria-label="Pipeline: PDF, chunking, embeddings, FAISS, retrieval, Gemini, answer">
        <g fill="none" stroke="#397FE8" strokeWidth="1.2">{[4, 82, 160, 238, 316].map(x => <rect key={x} x={x} y="40" width="62" height="40" rx="8" />)}<rect x="394" y="40" width="54" height="40" rx="8" stroke="#8AB8FF" /><rect x="460" y="40" width="56" height="40" rx="8" stroke="#8AB8FF" /></g>
        <g fill="#A5A5A5" fontSize="9" textAnchor="middle">{[['PDF',35],['Chunk',113],['Embed',191],['FAISS',269],['Retrieve',347],['Gemini',421],['Answer',488]].map(([t, x]) => <text key={t as string} x={x as number} y="64">{t}</text>)}</g>
        <circle className="pk" cx="35" cy="95" r="4" fill="#8AB8FF" />
      </svg>)
    case 'chart': return (
      <svg viewBox="0 0 220 120" className={svg} aria-hidden>
        <g fill="#8AB8FF" opacity=".45">{[[22,72,30],[52,62,34],[82,50,40],[112,56,30],[142,34,44],[172,26,40]].map(([x, y, h]) => <rect key={x} className="bl" x={x} y={y} width="8" height={h} />)}</g>
        <path className="dr" d="M10 90 40 70 70 78 100 45 130 55 160 30 210 20" fill="none" stroke="#6DA5F5" strokeWidth="2.5" />
      </svg>)
    case 'paint': return (
      <svg viewBox="0 0 200 120" className={svg} aria-hidden>
        <path d="M40 80 60 55 85 40 110 50 130 75" fill="none" stroke="#8AB8FF" />
        <g fill="#8AB8FF">{[[40,80],[60,55],[85,40],[110,50],[130,75]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="3" />)}</g>
        <path className="dr" d="M110 100c20-30 40 10 60-20" fill="none" stroke="#6DA5F5" strokeWidth="3" strokeLinecap="round" />
      </svg>)
    case 'forecast': return (
      <svg viewBox="0 0 200 120" className={svg} aria-hidden>
        <path className="dr" d="M5 90 30 70 55 80 80 50 105 60 130 40" fill="none" stroke="#A5A5A5" strokeWidth="2" />
        <path className="bl" d="M130 40 155 32 180 22 196 18" fill="none" stroke="#8AB8FF" strokeWidth="2" strokeDasharray="4 3" />
      </svg>)
    default: return (
      <svg viewBox="0 0 220 80" className={svg} aria-hidden>
        <g fill="none" stroke="#6DA5F5">{[4, 62, 120].map(x => <rect key={x} x={x} y="25" width="40" height="30" rx="6" />)}<rect x="178" y="25" width="40" height="30" rx="6" stroke="#8AB8FF" /><path d="M44 40h18M102 40h18M160 40h18" /></g>
        <circle className="pk2" cx="24" cy="40" r="4" fill="#8AB8FF" />
      </svg>)
  }
}
