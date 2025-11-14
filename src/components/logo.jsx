'use client'

import { motion } from 'framer-motion'
import softflow from "@/images/softflowR.png"

export function Logo({ className }) {
  return (
    <motion.img
      initial={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: [1, 1.15, 1],
        opacity: [1, 0.75, 1],
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
      src={softflow.src}
      alt="Logo"
      className={className}
    />
  )
}

export function Mark({ className }) {
  return (
    <motion.img
      initial={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: [1, 1.15, 1],
        opacity: [1, 0.75, 1],
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
      src={softflow.src}
      alt="Mark"
      className={className}
    />
  )
}