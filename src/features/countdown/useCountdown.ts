import { useEffect, useState } from 'react'

type CountdownState = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const getDifference = (targetDate: string): CountdownState => {
  const difference = new Date(targetDate).getTime() - new Date().getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState<CountdownState>(() => getDifference(targetDate))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getDifference(targetDate))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [targetDate])

  const isComplete = Object.values(timeLeft).every((value) => value === 0)

  return { timeLeft, isComplete }
}
