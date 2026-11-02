import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar /><main><Hero /><Marquee /><About /><Experience /><Skills /><Projects /><Contact /></main><Footer />
    </MotionConfig>
  )
}
