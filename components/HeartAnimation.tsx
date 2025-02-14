"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const HeartAnimation = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const hearts = Array(20).fill(null)
  const emojis = ["❤️", "💖", "💘", "💝", "💗", "💓", "💞"]

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [null, -100],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 4,
          }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </motion.div>
      ))}
    </div>
  )
}

export default HeartAnimation

