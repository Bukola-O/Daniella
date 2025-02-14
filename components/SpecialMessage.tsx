"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GiphyFetch } from "@giphy/js-fetch-api"

const gf = new GiphyFetch("zSsqvgoG4uEQ1ePyt4UAB8eFEHv8eRkh") // Replace with your Giphy API key

interface SpecialMessageProps {
  isVisible: boolean
  onClose: () => void
}

const SpecialMessage: React.FC<SpecialMessageProps> = ({ isVisible, onClose }) => {
  const [teddyGif, setTeddyGif] = useState<string | null>(null)

  useEffect(() => {
    const fetchTeddyGif = async () => {
      try {
        const { data } = await gf.gif("8L1KZTPIM8CnHoA9ht")
        setTeddyGif(data.id)
      } catch (error) {
        console.error("Error fetching Giphy sticker:", error)
      }
    }
    fetchTeddyGif()
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-md text-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
              ✕
            </button>
            <h2 className="text-3xl font-bold text-red-600 mb-4 font-comic">Yay! You're my Valentine! 🎉</h2>
            <p className="text-xl text-gray-700 font-comic mb-4">
              I'm so happy you said yes! 💖 You've made me the luckiest person in the world.🥰
            </p>
            <div className="w-full h-0 pb-[100%] relative">
              <iframe
                src="https://giphy.com/embed/8L1KZTPIM8CnHoA9ht"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              <a
                href="https://giphy.com/stickers/dance-cute-8L1KZTPIM8CnHoA9ht"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                via GIPHY
              </a>
            </p>
            <div className="text-4xl mt-4">🌹💏🍰</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SpecialMessage

