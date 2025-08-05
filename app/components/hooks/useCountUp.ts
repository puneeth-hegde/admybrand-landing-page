"use client"

import { useState, useEffect, useRef } from "react"

export function useCountUp(target: number, duration = 500): number {
  const [current, setCurrent] = useState(target)
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const startValueRef = useRef(target)
  const targetRef = useRef(target)

  useEffect(() => {
    // If target is the same, don't animate
    if (target === targetRef.current) return

    targetRef.current = target

    // Cancel any existing animation
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    startValueRef.current = current
    startTimeRef.current = null

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Simple easing
      const easeOut = (t: number): number => 1 - Math.pow(1 - t, 2)
      const easedProgress = easeOut(progress)

      const newValue = startValueRef.current + (target - startValueRef.current) * easedProgress

      setCurrent(newValue)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setCurrent(target)
        rafRef.current = null
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [target, duration, current])

  return current
}
