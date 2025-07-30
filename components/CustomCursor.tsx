'use client'

import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function CustomCursor() {
  const { theme } = useTheme()
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorOutlineRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()
  const mousePos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY };
    }

    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        // Linear interpolation for smooth trailing effect
        const deltaX = mousePos.current.x - outlinePos.current.x;
        const deltaY = mousePos.current.y - outlinePos.current.y;
        
        outlinePos.current.x += deltaX * 0.2; // Adjust the 0.2 value for more/less "spring"
        outlinePos.current.y += deltaY * 0.2;

        if (cursorDotRef.current) {
            cursorDotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
        }
        if (cursorOutlineRef.current) {
            cursorOutlineRef.current.style.transform = `translate(${outlinePos.current.x}px, ${outlinePos.current.y}px)`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      if(requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [])

  if (!isMounted) {
    return null
  }

  const dotColor = theme === 'dark' ? 'bg-green-500' : 'bg-orange-500'
  const outlineColor = theme === 'dark' ? 'border-green-500' : 'border-orange-500'

  return (
    <>
      <div
        ref={cursorOutlineRef}
        className={`cursor-outline ${outlineColor} ${isHovering ? 'cursor-hover' : ''}`}
      />
      <div
        ref={cursorDotRef}
        className={`cursor-dot ${dotColor}`}
      />
    </>
  )
}