'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

const projects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge machine learning algorithm for predictive analytics.',
    longDescription: 'Project Alpha leverages state-of-the-art machine learning techniques to provide accurate predictive analytics for various industries. It uses ensemble methods and deep learning to process large datasets and generate insights that can drive business decisions.',
    tags: ['Python', 'TensorFlow', 'Scikit-learn'],
    command: 'run project_alpha.py',
    github: 'https://github.com/Pranay50x/project-alpha',
  },
  {
    title: 'Beta Web App',
    description: 'Responsive web application with real-time data visualization.',
    longDescription: 'Beta Web App is a full-stack application that provides real-time data visualization for complex datasets. It features a responsive design, ensuring a seamless experience across devices, and utilizes WebSocket for live updates.',
    tags: ['React', 'D3.js', 'Node.js'],
    command: 'npm start beta-app',
    github: 'https://github.com/Pranay50x/beta-web-app',
  },
  {
    title: 'Gamma Mobile',
    description: 'Cross-platform mobile app for productivity enhancement.',
    longDescription: 'Gamma Mobile is a cross-platform productivity app built with Flutter. It includes features like task management, time tracking, and progress visualization. The app syncs data across devices and integrates with popular productivity tools.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    command: 'flutter run gamma_mobile',
    github: 'https://github.com/Pranay50x/gamma-mobile',
  },
]

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [typedCommand, setTypedCommand] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    if (isTyping) {
      if (typedCommand.length < projects[currentIndex].command.length) {
        const timer = setTimeout(() => {
          setTypedCommand(projects[currentIndex].command.slice(0, typedCommand.length + 1))
        }, 100)
        return () => clearTimeout(timer)
      } else {
        setIsTyping(false)
      }
    }
  }, [isTyping, typedCommand, currentIndex])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!showDetails) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
        setTypedCommand('')
        setIsTyping(true)
      }
    }, 10000) // Change project every 10 seconds
    return () => clearInterval(timer)
  }, [showDetails])

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      setShowDetails(prev => !prev)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Projects</h2>
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl"
          >
            <Card className="bg-gray-900 
            text-green-400 font-mono shadow-lg
            overflow-hidden
            transition-shadow 
            ring-1 
            ring-green-400 
            dark:ring-gray-700 
            hover:shadow-[0_0_12px_3px_rgba(59,130,246,0.4)]   /* Glow in light mode (blue-500) */
            dark:hover:shadow-[0_0_12px_3px_rgba(3,252,144,0.6)] /* Glow in dark mode (blue-400) */">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mb-4">
                  <span className="text-blue-400">pranay50x@projects</span>
                  <span className="text-purple-400">:~$</span> {typedCommand}
                  {isTyping && <span className="animate-blink">|</span>}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{projects[currentIndex].title}</h3>
                <p className="mb-6 text-lg">
                  {showDetails ? projects[currentIndex].longDescription : projects[currentIndex].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentIndex].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-green-400 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Press Enter to {showDetails ? 'hide' : 'view'} project details...
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gray-800 text-green-400 hover:bg-gray-700"
                    onClick={() => window.open(projects[currentIndex].github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex justify-center space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-green-500' : 'bg-gray-600'
            }`}
            onClick={() => {
              setCurrentIndex(index)
              setTypedCommand('')
              setIsTyping(true)
              setShowDetails(false)
            }}
          />
        ))}
      </div>
    </section>
  )
}

