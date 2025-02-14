"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GiphyFetch } from "@giphy/js-fetch-api"
import HeartAnimation from "../components/HeartAnimation"
import ValentineRequest from "../components/ValentineRequest"
import SpecialMessage from "../components/SpecialMessage"

const gf = new GiphyFetch("zSsqvgoG4uEQ1ePyt4UAB8eFEHv8eRkh") // Replace with your Giphy API key

export default function Home() {
  const [showMessage, setShowMessage] = useState(false)
  const [teddyGif, setTeddyGif] = useState<string | null>(null)

  useEffect(() => {
    const fetchTeddyGif = async () => {
      try {
        const { data } = await gf.gif("LSzm1DePJTnpSy629S")
        setTeddyGif(data.id)
      } catch (error) {
        console.error("Error fetching Giphy sticker:", error)
      }
    }
    fetchTeddyGif()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100 flex flex-col items-center justify-center p-4 text-center">
      <HeartAnimation />
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-red-600 mb-8 font-comic"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Will you be my Valentine? 💖
      </motion.h1>
      <div className="w-[40%] h-0 pb-[20%] relative">
        <iframe
          src="https://giphy.com/embed/LSzm1DePJTnpSy629S"
          width="100%"
          height="60%"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <ValentineRequest onAccept={() => setShowMessage(true)} />
      <SpecialMessage isVisible={showMessage} onClose={() => setShowMessage(false)} />
    </main>
  )
}

