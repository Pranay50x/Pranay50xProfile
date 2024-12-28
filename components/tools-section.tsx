'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { SiPython, SiJavascript, SiCplusplus, SiReact, SiNodedotjs, SiTailwindcss, SiDart, SiFlutter, SiFlask, SiTensorflow } from 'react-icons/si'
import React from 'react'

const tools = [
  { name: 'Python', icon: SiPython, color: 'text-blue-600 dark:text-blue-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-600 dark:text-yellow-400' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-700 dark:text-blue-500' },
  { name: 'React', icon: SiReact, color: 'text-cyan-600 dark:text-cyan-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-700 dark:text-green-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-600 dark:text-teal-400' },
  { name: 'Dart', icon: SiDart, color: 'text-blue-600 dark:text-blue-400' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-cyan-500 dark:text-cyan-300' },
  { name: 'Flask', icon: SiFlask, color: 'text-gray-600 dark:text-gray-400' },
  { name: 'Machine Learning', icon: SiTensorflow, color: 'text-orange-500 dark:text-orange-500' },
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
    <section id="tools" className="bg-gray-50 dark:bg-navy-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-500 dark:to-rose-600">
          Tools & Technologies
        </h2>
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
              <Card className="overflow-hidden bg-white dark:bg-navy-800 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-2xl">
                <CardContent className="p-6 flex flex-col items-center">
                  {React.createElement(tools[currentIndex].icon, { 
                    className: `text-6xl ${tools[currentIndex].color} mb-4` 
                  })}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-green-400">
                    {tools[currentIndex].name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>  
        </div>
        <div className="mt-8 flex justify-center space-x-2">
          {tools.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex 
                  ? 'bg-orange-500 dark:bg-green-500' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-orange-300 dark:hover:bg-green-700'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Switch to ${tools[index].name}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

