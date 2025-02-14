"use client"

import { useState, useEffect } from "react"

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const now = new Date()
    const valentinesDay = new Date(now.getFullYear(), 1, 14) // Month is 0-indexed
    if (now > valentinesDay) {
      valentinesDay.setFullYear(valentinesDay.getFullYear() + 1)
    }
    return valentinesDay.getTime() - now.getTime()
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [getTimeLeft]) // Added getTimeLeft to dependencies

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  return (
    <div className="text-2xl md:text-3xl text-red-500 font-semibold">
      {days}d {hours}h {minutes}m {seconds}s
    </div>
  )
}

export default Countdown

