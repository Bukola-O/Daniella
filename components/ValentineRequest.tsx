"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type React from "react" // Added import for React

interface ValentineRequestProps {
  onAccept: () => void
}

const ValentineRequest: React.FC<ValentineRequestProps> = ({ onAccept }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = () => {
    const newX = Math.random() * 200 - 100 // Random value between -100 and 100
    const newY = Math.random() * 200 - 100 // Random value between -100 and 100
    setPosition({ x: newX, y: newY })
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 font-comic text-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onAccept}
      >
        Yes, I'd love to! 😍
      </motion.button>
      <motion.button
        className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 font-comic"
        animate={position}
        onMouseEnter={handleMouseEnter}
      >
        No, thanks 😢
      </motion.button>
      <div className="text-2xl mt-4">💐🍫🎈</div>
    </div>
  )
}

export default ValentineRequest

