'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Cpu, CupSoda, Trophy, Briefcase, GraduationCap, ChevronRight, ChevronLeft, Medal, MedalIcon } from 'lucide-react'

export function HeroSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0)
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0)

  const skills = [
    { icon: Code, label: 'Web Development', description: 'Passionate about creating responsive and interactive web applications' },
    { icon: Cpu, label: 'AI & Machine Learning', description: 'Eager to explore and implement AI solutions in real-world projects' },
  ]

  const achievements = [
    { icon: MedalIcon, label: 'Winner of wHackiest 2024', description: "Won the first place in CodeRIT's Flagship Event in 2024 " },
    { icon: Trophy, label: 'SIH 2024 Runners Up', description: 'Ended up as Runners Up for the Smart India Hackathon 2024, recognised for building and showcasing an innovative solution.' },
    { icon: Medal, label: 'BIT Inceptra 2024 Winner', description: 'Awarded first prize for an exceptional project that demonstrated creativity and technical skills' },
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
    <section className="pt-24 min-h-screen w-full bg-transpare">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Aspiring Tech Enthusiast
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg lg:text-xl mb-8 text-gray-700 dark:text-green-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Passionate about web development and AI, seeking internship opportunities to contribute and grow in the tech industry.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white dark:bg-green-500 dark:hover:bg-green-600 dark:text-navy-900 transition-colors duration-300"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#projects">View Projects</Link>
                </motion.div>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-navy-900 transition-colors duration-300"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact">Contact Me</Link>
                </motion.div>
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
className="glass-card p-6 cursor-pointer relative overflow-hidden group"                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <skill.icon className="w-10 h-10 md:w-12 md:h-12 text-orange-500 dark:text-rose-500 mb-4" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-green-300">{skill.label}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                  <motion.div
                    className="absolute inset-0 bg-orange-500 dark:bg-green-500 opacity-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Achievements Section */}
            <motion.div
className="glass-card p-6 relative overflow-hidden"              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-green-300">Achievements</h3>
              <div className="relative px-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAchievementIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4"
                  >
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {achievements[currentAchievementIndex].icon && (() => {
                        const Icon = achievements[currentAchievementIndex].icon;
                        return <Icon className="w-10 h-10 md:w-12 md:h-12 text-orange-500 dark:text-rose-500" />;
                      })()}
                    </motion.div>
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
className="glass-card p-6 relative overflow-hidden"              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-green-300">Interests & Goals</h3>
              <div className="relative px-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentInterestIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4"
                  >
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {interests[currentInterestIndex].icon && (() => {
                        const Icon = interests[currentInterestIndex].icon;
                        return <Icon className="w-10 h-10 md:w-12 md:h-12 text-orange-500 dark:text-rose-500" />;
                      })()}
                    </motion.div>
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

