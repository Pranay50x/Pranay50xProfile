import Link from 'next/link'
import { Analytics } from "@vercel/analytics/react"

export function Footer() {
  return (
    <footer className="bg-transparent py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-green-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Pranay50X
          </p>
          <nav className="flex space-x-4">
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#tools">Tools</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
           
          </nav>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-gray-600 hover:text-orange-500 dark:text-green-300 dark:hover:text-green-400 transition-colors duration-200 ease-in-out"
    >
      {children}
    </Link>
  )
}