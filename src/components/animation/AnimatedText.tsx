"use client"

import { motion } from "motion/react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export default function AnimatedText({ text, className = "", delay = 0, duration = 0.07 }: AnimatedTextProps) {
  const letters = text.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 3,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        
        <motion.span key={index} style={{ display: "inline-block" }} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
