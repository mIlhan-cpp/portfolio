import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-extrabold tracking-wider">MK</a>
        <ul className="hidden gap-7 text-mute md:flex">
          {links.map(l => <li key={l}><a className="hover:text-ink" href={`#${l.toLowerCase()}`}>{l}</a></li>)}
        </ul>
        <button className="rounded-lg border border-white/10 p-2 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <ul id="mobile-menu" className="flex flex-col gap-4 border-t border-white/10 bg-bg2 px-5 py-4 md:hidden">
          {links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a></li>)}
        </ul>
      )}
    </nav>
  )
}
