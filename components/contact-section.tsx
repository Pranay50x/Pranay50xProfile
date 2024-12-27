'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, Send, Linkedin, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ContactSection() {
  const [messages, setMessages] = useState<{ type: 'ai' | 'user', content: string }[]>([
    { type: 'ai', content: "Hi there! I'm Pranay's AI assistant. How can I help you get in touch with him?" }
  ])
  const [input, setInput] = useState('')
  const [currentStep, setCurrentStep] = useState<'initial' | 'name' | 'email' | 'message' | 'complete'>('initial')
  const [userInfo, setUserInfo] = useState({ name: '', email: '', message: '' })
  const [isThinking, setIsThinking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSend = () => {
    if (input.trim() === '') return

    setMessages(prev => [...prev, { type: 'user', content: input }])
    setInput('')
    setIsThinking(true)

    setTimeout(() => {
      setIsThinking(false)
      switch (currentStep) {
        case 'initial':
          setMessages(prev => [...prev, { type: 'ai', content: "Great! Let's start with your name. What should I call you?" }])
          setCurrentStep('name')
          break
        case 'name':
          setUserInfo(prev => ({ ...prev, name: input }))
          setMessages(prev => [...prev, { type: 'ai', content: `Nice to meet you, ${input}! What's your email address?` }])
          setCurrentStep('email')
          break
        case 'email':
          setUserInfo(prev => ({ ...prev, email: input }))
          setMessages(prev => [
            ...prev, 
            { type: 'ai', content: `Perfect! You can also reach out to Pranay directly on LinkedIn at https://www.linkedin.com/in/pranay-kr-651a3b284/. Now, what message would you like to send to Pranay?` }
          ])
          setCurrentStep('message')
          break
        case 'message':
          setUserInfo(prev => ({ ...prev, message: input }))
          setMessages(prev => [
            ...prev,
            { type: 'ai', content: "Thanks for your message! I've sent it to Pranay, and he'll get back to you soon. Is there anything else I can help you with?" }
          ])
          setCurrentStep('complete')
          break
        case 'complete':
          setMessages(prev => [...prev, { type: 'ai', content: "I'm glad I could help! Feel free to ask if you need anything else." }])
          break
      }
    }, 1000)
  }

  const messageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Get in Touch</h2>
      <div className="w-full max-w-2xl mx-auto bg-navy-800 rounded-lg shadow-lg overflow-hidden">
        <div className="h-[28rem] sm:h-[32rem] md:h-[36rem] overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                variants={messageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user' ? 'bg-green-500 text-navy-900' : 'bg-navy-700 text-green-400'
                }`}>
                  {message.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isThinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-navy-700 text-green-400 p-3 rounded-lg">
                <Loader2 className="w-5 h-5 animate-spin" />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 bg-navy-900">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-grow bg-navy-800 text-green-400 border-green-500"
            />
            <Button onClick={handleSend} className="bg-green-500 text-navy-900 hover:bg-green-600">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://github.com/Pranay50x"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
        >
          <Github className="w-6 h-6" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/pranay-kr-651a3b284/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  )
}

