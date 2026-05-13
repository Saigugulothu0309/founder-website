import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Ventures from '@/components/sections/Ventures'
import Research from '@/components/sections/Research'
import { Technologies, Impact, Timeline } from '@/components/sections/ImpactTimelineTech'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Research />
        <Technologies />
        <Impact />
        <Timeline />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
