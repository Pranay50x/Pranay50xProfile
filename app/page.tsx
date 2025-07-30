import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import ProjectsSection from '@/components/projects-section'
import ToolsSection from '@/components/tools-section'
import {ContactSection}  from '@/components/contact-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ToolsSection />
      <ContactSection />
    </>
  )
}