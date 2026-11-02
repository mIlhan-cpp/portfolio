import { motion } from 'framer-motion'
export const contact = { email: 'milhankhan2803@gmail.com', linkedin: 'https://www.linkedin.com/in/milhan-khan-1648a8335/', github: 'https://github.com/mIlhan-cpp' }
export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24 text-center">
      <motion.div className="mx-auto max-w-6xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h2 className="h-big">Have something<br />in mind?</h2>
        <p className="mx-auto mb-7 max-w-lg text-mute">Whether it’s an interesting AI idea, a web application or just a conversation about technology, feel free to reach out.</p>
        <motion.a whileHover={{ y: -3 }} href={`mailto:${contact.email}`} className="inline-block rounded-full bg-ac px-8 py-3 font-semibold">GET IN TOUCH</motion.a>
        <p className="mt-6 text-mute">Milhan Khan</p>
        <div className="mt-2 flex flex-wrap justify-center gap-5 text-mute">
          <a className="border-b border-white/15 hover:text-ink" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="border-b border-white/15 hover:text-ink" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="border-b border-white/15 hover:text-ink" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </motion.div>
    </section>
  )
}
