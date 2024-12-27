'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { SiPython, SiJavascript, SiCplusplus, SiReact, SiNodedotjs, SiTailwindcss, SiDart, SiFlutter, SiFlask, SiTensorflow } from 'react-icons/si'
import React from 'react'

const tools = [
  { name: 'Python', icon: SiPython, color: 'text-blue-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Dart', icon: SiDart, color: 'text-blue-400' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-cyan-300' },
  { name: 'Flask', icon: SiFlask, color: 'text-gray-400' },
  { name: 'Machine Learning', icon: SiTensorflow, color: 'text-orange-500' },
]

export default function ToolsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="tools" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Tools & Technologies</h2>
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm"
          >
            <Card className="glow-effect overflow-hidden bg-navy-800
              hover:shadow-[0_0_12px_3px_rgba(59,130,246,0.4)]   /* Glow in light mode (blue-500) */
              dark:hover:shadow-[0_0_12px_3px_rgba(3,252,144,0.6)] ">
              <CardContent className="p-6 flex flex-col items-center">
                {React.createElement(tools[currentIndex].icon, { className: `text-6xl ${tools[currentIndex].color} mb-4` })}
                <h3 className="text-xl font-semibold text-card-foreground">{tools[currentIndex].name}</h3>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>  
      </div>
      <div className="mt-8 flex justify-center space-x-2">
        {tools.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-green-500' : 'bg-secondary'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

