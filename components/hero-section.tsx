'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Cpu, CupSoda, Trophy, ChevronRight, ChevronLeft } from 'lucide-react'

export function HeroSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0)

  const skills = [
    { icon: Code, label: 'Web Development', description: 'Building responsive and interactive web applications' },
    { icon: Cpu, label: 'AI Integration', description: 'Incorporating AI to create intelligent solutions' },
  ]

  const achievements = [
    { icon: CupSoda, label: 'Winner of wHackiest 2024', description: 'Developed an innovative solution that stood out among fierce competition' },
    { icon: Trophy, label: 'SIH 2024 Runners Up', description: 'Recognized for excellence in the Smart India Hackathon, showcasing problem-solving skills' },
  ]

  const nextAchievement = () => {
    setCurrentAchievementIndex((prevIndex) => (prevIndex + 1) % achievements.length)
  }

  const prevAchievement = () => {
    setCurrentAchievementIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length)
  }

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Innovating the Web in 2025
          </h1>
          <p className="text-lg md:text-xl mb-8 text-green-300">
            Crafting cutting-edge solutions and pushing the boundaries of web development. Let's shape the digital future together.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-navy-900">
              <Link href="#projects">Explore Projects</Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto border-green-500 text-green-500 hover:bg-green-500 hover:text-navy-900">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.label}
                className="bg-navy-800 p-6 rounded-lg cursor-pointer relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredSkill(skill.label)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <skill.icon className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-green-300">{skill.label}</h3>
                <motion.p
                  className="text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredSkill === skill.label ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.description}
                </motion.p>
                <motion.div
                  className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredSkill === skill.label ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="bg-navy-800 p-6 rounded-lg relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-300">Achievements</h3>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAchievementIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center space-x-4"
                >
                 <div className="flex-shrink-0">
                    {achievements[currentAchievementIndex].icon && (() => {
                      const Icon = achievements[currentAchievementIndex].icon;
                      return <Icon className="w-12 h-12 text-green-500" />;
                    })()}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">{achievements[currentAchievementIndex].label}</h4>
                    <p className="text-sm text-gray-400 mt-2">{achievements[currentAchievementIndex].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevAchievement}
                  className="text-green-500 hover:text-green-400 hover:bg-navy-700"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextAchievement}
                  className="text-green-500 hover:text-green-400 hover:bg-navy-700"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

