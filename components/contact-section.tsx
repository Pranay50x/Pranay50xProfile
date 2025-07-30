'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, Linkedin, Send, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ContactSection() {
  const [messages, setMessages] = useState<{ type: 'ai' | 'user', content: string }[]>([
    { type: 'ai', content: "Hi there! I'm Pranay's AI assistant. How can I help you get in touch with him?" }
  ])
  const [input, setInput] = useState('')
  const [currentStep, setCurrentStep] = useState<'initial' | 'name' | 'email' | 'message' | 'complete' | 'one-piece'>('initial')
  const [userInfo, setUserInfo] = useState({ name: '', email: '', message: '', favoriteCharacter: '' })
  const [isThinking, setIsThinking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom()
    }
  }, [messages])

  const handleSend = () => {
    if (input.trim() === '') return

    setMessages(prev => [...prev, { type: 'user', content: input }])
    setInput('')
    setIsThinking(true)

    setTimeout(() => {
      setIsThinking(false)
      switch (currentStep) {
        case 'initial':
          if (input.toLowerCase().includes('one piece')) {
            setMessages(prev => [...prev, { type: 'ai', content: "Oh, you're a One Piece fan! That's awesome! Pranay loves One Piece too. Who's your favorite character?" }])
            setCurrentStep('one-piece')
          } else {
            setMessages(prev => [...prev, { type: 'ai', content: "Great! Let's start with your name. What should I call you?" }])
            setCurrentStep('name')
          }
          break
        case 'one-piece':
          setUserInfo(prev => ({ ...prev, favoriteCharacter: input }))
          setMessages(prev => [...prev, { type: 'ai', content: `${input} is a great character! Now, let's get back to contacting Pranay. What's your name?` }])
          setCurrentStep('name')
          break
        case 'name':
          setUserInfo(prev => ({ ...prev, name: input }))
          setMessages(prev => [...prev, { type: 'ai', content: `Nice to meet you, ${input}! What's your email address?` }])
          setCurrentStep('email')
          break
        case 'email':
          setUserInfo(prev => ({ ...prev, email: input }))
          setMessages(prev => [...prev, { type: 'ai', content: "Perfect! Now, what message would you like to send to Pranay?. You can contact Pranay on Linkedin please click the button below." }])
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
          if (input.toLowerCase().includes('one piece')) {
            setMessages(prev => [...prev, { type: 'ai', content: "Oh, you want to talk about One Piece? Great! Who's your favorite character?" }])
            setCurrentStep('one-piece')
          } else {
            setMessages(prev => [...prev, { type: 'ai', content: "I'm glad I could help! Feel free to ask if you need anything else." }])
          }
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
    <section id="contact" className="bg-transparent">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-400 dark:to-rose-600">
          Get in Touch
        </h2>
        <div className="max-w-md mx-auto glass-card overflow-hidden md:max-w-lg lg:max-w-xl">
          <div className="h-[28rem] md:h-[32rem] lg:h-[36rem] overflow-y-auto p-4 space-y-4">
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
                  <div className={`max-w-[80%] p-3 rounded-lg shadow-md ${
                    message.type === 'user' 
                      ? 'bg-orange-500 text-white dark:bg-green-500 dark:text-navy-900' 
                      : 'bg-white/20 text-gray-900 dark:bg-white/10 dark:text-green-300'
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
                <div className="bg-white/20 dark:bg-white/10 p-3 rounded-lg">
                  <Loader2 className="w-5 h-5 animate-spin text-gray-800 dark:text-green-300" />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-black/10 border-t border-white/20">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-grow bg-transparent border-none text-white placeholder:text-green-300 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-orange-500 dark:focus-visible:ring-green-500"
              />
              <Button 
                onClick={handleSend} 
                className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-green-500 dark:text-navy-900 dark:hover:bg-green-600"
              >
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
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 dark:text-green-400 dark:hover:text-green-300 transition-colors"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/pranay-kr-651a3b284/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 dark:text-green-400 dark:hover:text-green-300 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}