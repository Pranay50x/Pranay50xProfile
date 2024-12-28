'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tools', href: '#tools' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50">
      <nav className="fixed w-full bg-white/80 dark:bg-navy-900/80 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-500">
            Pranay50X
          </a>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-600 dark:text-green-400 hover:text-gray-900 dark:hover:text-green-300 hover:bg-gray-200 dark:hover:bg-navy-800"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              className="md:hidden text-gray-600 dark:text-green-400 hover:text-gray-900 dark:hover:text-green-300 hover:bg-gray-200 dark:hover:bg-navy-800"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-navy-800 shadow-lg"
            >
              <div className="container mx-auto">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-4 text-sm text-gray-700 dark:text-green-400 hover:bg-gray-100 dark:hover:bg-navy-700"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="relative group py-2">
      <span className="text-gray-700 dark:text-green-400 hover:text-gray-900 dark:hover:text-green-300 transition-colors">{children}</span>
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 dark:bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </a>
  )
}