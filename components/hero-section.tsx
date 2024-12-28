'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Cpu, CupSoda, Trophy, Briefcase, GraduationCap, ChevronRight, ChevronLeft } from 'lucide-react'

export function HeroSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0)
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0)

  const skills = [
    { icon: Code, label: 'Web Development', description: 'Passionate about creating responsive and interactive web applications' },
    { icon: Cpu, label: 'AI & Machine Learning', description: 'Eager to explore and implement AI solutions in real-world projects' },
  ]

  const achievements = [
    { icon: CupSoda, label: 'Winner of wHackiest 2024', description: 'Developed an innovative solution that stood out among fierce competition' },
    { icon: Trophy, label: 'SIH 2024 Runners Up', description: 'Recognized for excellence in the Smart India Hackathon, showcasing problem-solving skills' },
  ]

  const interests = [
    { icon: Briefcase, label: 'Internship Opportunities', description: 'Seeking challenging internships to apply and expand my skills' },
    { icon: GraduationCap, label: 'Continuous Learning', description: 'Always excited to learn new technologies and best practices' },
  ]

  const nextAchievement = () => {
    setCurrentAchievementIndex((prevIndex) => (prevIndex + 1) % achievements.length)
  }

  const prevAchievement = () => {
    setCurrentAchievementIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length)
  }

  const nextInterest = () => {
    setCurrentInterestIndex((prevIndex) => (prevIndex + 1) % interests.length)
  }

  const prevInterest = () => {
    setCurrentInterestIndex((prevIndex) => (prevIndex - 1 + interests.length) % interests.length)
  }

  return (
    <section className="pt-24 min-h-screen w-full bg-gray-50 dark:bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-500 dark:to-rose-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Aspiring Tech Enthusiast
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg lg:text-xl mb-8 text-gray-700 dark:text-green-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Passionate about web development and AI, seeking internship opportunities to contribute and grow in the tech industry.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white dark:bg-green-500 dark:hover:bg-green-600 dark:text-navy-900">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-navy-900">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className="bg-white dark:bg-navy-800 p-6 rounded-lg cursor-pointer relative overflow-hidden group shadow-md"
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredSkill(skill.label)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                >
                  <skill.icon className="w-10 h-10 md:w-12 md:h-12 text-orange-500 dark:text-rose-500 mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-green-300">{skill.label}</h3>
                  <motion.p
                    className="text-sm text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredSkill === skill.label ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Achievements Section */}
            <motion.div
              className="bg-white dark:bg-navy-800 p-6 rounded-lg relative overflow-hidden shadow-md"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-green-300">Achievements</h3>
              <div className="relative px-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAchievementIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4"
                  >
                    <div className="flex-shrink-0">
                      {achievements[currentAchievementIndex].icon && (() => {
                        const Icon = achievements[currentAchievementIndex].icon;
                        return <Icon className="w-10 h-10 md:w-12 md:h-12 text-orange-500 dark:text-rose-500" />;
                      })()}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-green-300">
                        {achievements[currentAchievementIndex].label}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {achievements[currentAchievementIndex].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <NavigationButtons onPrev={prevAchievement} onNext={nextAchievement} />
              </div>
            </motion.div>

            {/* Interests Section */}
            <motion.div
              className="bg-white dark:bg-navy-800 p-6 rounded-lg relative overflow-hidden shadow-md"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-green-300">Interests & Goals</h3>
              <div className="relative px-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentInterestIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4"
                  >
                    <div className="flex-shrink-0">
                      {interests[currentInterestIndex].icon && (() => {
                        const Icon = interests[currentInterestIndex].icon;
                        return <Icon className="w-10 h-10 md:w-12 md:h-12 text-orange-500 dark:text-rose-500" />;
                      })()}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-green-300">
                        {interests[currentInterestIndex].label}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {interests[currentInterestIndex].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <NavigationButtons onPrev={prevInterest} onNext={nextInterest} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function NavigationButtons({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrev}
        className="absolute top-1/2 -translate-y-1/2 left-0 text-orange-500 dark:text-green-500 hover:text-orange-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-navy-700"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        className="absolute top-1/2 -translate-y-1/2 right-0 text-orange-500 dark:text-green-500 hover:text-orange-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-navy-700"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </>
  )
}