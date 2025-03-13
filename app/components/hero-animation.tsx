"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {/* Animated circles */}
        <motion.div
          className="absolute top-10 left-[10%] w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-sm"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 0.7, 0.5],
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-20 right-[15%] w-32 h-32 rounded-full bg-indigo-500/20 backdrop-blur-sm"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 0.7, 0.5],
          }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-40 left-[30%] w-16 h-16 rounded-full bg-purple-500/20 backdrop-blur-sm"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 0.7, 0.5],
          }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/40"
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -50 - 10],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated lines */}
        <motion.div
          className="absolute top-[30%] left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[60%] right-0 h-[1px] bg-gradient-to-l from-transparent via-indigo-400/30 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}

