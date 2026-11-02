import { projects } from '../data/projects'
import { useScrollProgress } from '../hooks/useScrollProgress'
import ProjectCard from './ProjectCard'
export default function Projects() {
  const { ref, progress } = useScrollProgress()
  return (
    <section id="projects" className="gradient-feature-section px-5 py-24"><div className="mx-auto max-w-6xl">
      <h2 className="h-big">Selected work</h2>
      <p className="-mt-6 mb-10 text-mute">A few things I’ve built, worked on and spent time experimenting with.</p>
      <div ref={ref}>{projects.map((p, i) => <ProjectCard key={p.id} p={p} i={i} total={projects.length} progress={progress} />)}</div>
    </div></section>
  )
}
