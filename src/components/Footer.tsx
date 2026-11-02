import { contact } from './Contact'
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-center">
      <b className="block text-[clamp(2rem,9vw,5rem)] font-extrabold leading-none">MILHAN KHAN</b>
      <p className="mt-2 text-mute">AI/ML Engineer · Full-Stack Developer</p>
      <p className="mt-3 flex justify-center gap-5 text-sm text-mute"><a href={contact.linkedin}>LinkedIn</a><a href={contact.github}>GitHub</a><a href={`mailto:${contact.email}`}>Email</a></p>
      <small className="mt-3 block text-mute">© {new Date().getFullYear()} Milhan Khan</small>
    </footer>
  )
}
