'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Code, Server, Database } from 'lucide-react'
import { motion } from 'framer-motion'

export function AboutSection() {
  const [activeIcon, setActiveIcon] = useState<string | null>(null)

  const iconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.3 } },
  }

  const skillItems = [
    { icon: Code, label: 'Frontend', color: 'text-blue-400 dark:text-blue-300', description: 'Crafting responsive and intuitive user interfaces' },
    { icon: Server, label: 'Backend', color: 'text-green-400 dark:text-green-300', description: 'Building robust and scalable server-side solutions' },
    { icon: Database, label: 'AI & ML', color: 'text-purple-400 dark:text-purple-300', description: 'Implementing intelligent systems and data analysis' },
  ]

  return (
    <div className='bg-transparent'>
    <section id="about" className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-500 dark:to-rose-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 dark:text-green-300 transition-all duration-300 hover:text-gray-900 dark:hover:text-green-400">
            Hello! I'm Pranay, a dedicated full-stack developer with a passion for innovation and continuous learning. My journey in tech has been an exciting blend of web development, machine learning, and mobile app creation.
          </p>
          <p className="text-lg text-gray-700 dark:text-green-300 transition-all duration-300 hover:text-gray-900 dark:hover:text-green-400">
            I've delved deep into the world of AI, crafting sophisticated chatbots and fine-tuning them with RAG (Retrieval-Augmented Generation) techniques. My experience spans from building robust backend systems with Flask to creating engaging mobile experiences using Flutter.
          </p>
          <p className="text-lg text-gray-700 dark:text-green-300 transition-all duration-300 hover:text-gray-900 dark:hover:text-green-400">
            When I'm not immersed in code, I'm exploring new technologies, contributing to open-source projects, or attending tech conferences. I believe in the power of technology to create positive change and am always excited to take on new challenges that push the boundaries of what's possible in software development.
          </p>
        </motion.div>
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div 
            className="relative h-64 w-64 mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/luffy.svg"
              alt="Pranay's profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {skillItems.map((item, index) => (
              <motion.div 
                key={item.label}
className="glass-card p-4 cursor-pointer transition-all duration-300"                whileHover="hover"
                onHoverStart={() => setActiveIcon(item.label)}
                onHoverEnd={() => setActiveIcon(null)}
                onClick={() => setActiveIcon(activeIcon === item.label ? null : item.label)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                <motion.div variants={iconVariants}>
                  <item.icon className={`h-8 w-8 mx-auto mb-2 ${item.color}`} />
                </motion.div>
                <h3 className="font-semibold text-gray-800 dark:text-green-300">
                  {item.label}
                </h3>
                {activeIcon === item.label && (
                  <motion.p 
                    className="mt-2 text-xs text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}

