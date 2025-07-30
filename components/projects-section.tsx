'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

const projects = [
  {
    title: 'Symptom_Sage',
    description: 'An end-to-end machine learning project built for predciting pneumonia from chest X-ray images. This was given first prize in BIT Inceptra 2024',
    longDescription: 'Symptom_Sage is an end-to-end machine learning project that predicts pneumonia from chest X-ray images. It features a user-friendly web interface, allowing users to upload images and receive instant predictions. The application is built using Python, OpenCV, Flask, and MySQL, ensuring a seamless experience for users.',
    tags: ['Python', 'OpenCV', 'Flask', 'MySQL'],
    command: 'python3 app.py',
    github: 'https://github.com/Pranay50x/Symptom_Sage',
  },
  {
    title: 'Samagraa_Campus',
    description: 'A full-stack web application built for easing campus life for students. This was given first prize in wHackiest 2024',
    longDescription: 'Samagraa_Campus is a full-stack web application designed to simplify campus life for students. It features a responsive UI optimized for both desktop and mobile devices, ensuring a consistent experience across platforms. The application offers a range of features, including a student dashboard, attendance tracker, wifi deadzones, skill exchange platform, all accessible through secure user authentication.',
    tags: ['NextJS', 'MongoDB', 'TailwindCSS', 'Google OAuth'],
    command: 'npm start samagraa_campus',
    github: 'https://github.com/Pranay50x/Samagraa_Campus',
  },
  {
    title: 'Blitz__Chat',
    description: 'A chatting application made using Flutter and Firebase.',
    longDescription: 'Blitz__Chat offers secure user authentication, allowing users to sign in or register seamlessly. It facilitates real-time messaging, enabling instant send and receive of messages. Users can share images effortlessly during conversations, with all media stored securely in Firestore. The application features a responsive UI optimized for both Android and iOS devices, ensuring a consistent experience across platforms.',
    tags: ['Flutter',  'Firebase'],
    command: 'flutter run blitz__chat',
    github: 'https://github.com/Pranay50x/Blitz__Chat',
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
    <section id="projects" className="bg-transparent">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-500 dark:to-rose-600">
          Projects
        </h2>
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
              <Card className="glass-card text-gray-800 dark:text-green-400 font-mono overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mb-4">
                    <span className="text-blue-600 dark:text-blue-400">pranay50x@projects</span>
                    <span className="text-purple-600 dark:text-purple-400">:~$</span> {typedCommand}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-green-400">{projects[currentIndex].title}</h3>
                  <p className="mb-6 text-lg text-gray-700 dark:text-green-300">
                    {showDetails ? projects[currentIndex].longDescription : projects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentIndex].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-green-400 rounded-md text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Press Enter to {showDetails ? 'hide' : 'view'} project details...
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-green-400 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600"
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
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex 
                  ? 'bg-orange-500 dark:bg-green-500' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-orange-300 dark:hover:bg-green-700'
              }`}
              onClick={() => {
                setCurrentIndex(index)
                setTypedCommand('')
                setIsTyping(true)
                setShowDetails(false)
              }}
              aria-label={`Switch to ${projects[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

