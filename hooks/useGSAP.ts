"use client"

import { useEffect, useRef, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  fadeInUp,
  staggerCards,
  parallaxBackground,
  setupHoverAnimation,
  animateCounter,
  revealText,
  refreshScrollTrigger,
  logPerformance,
} from "@/lib/gsap"

// Register plugins on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Main GSAP hook for components
export const useGSAP = () => {
  const scopeRef = useRef<HTMLElement>(null)
  const animationsRef = useRef<gsap.core.Timeline[]>([])

  const addAnimation = useCallback((animation: gsap.core.Timeline) => {
    animationsRef.current.push(animation)
  }, [])

  const cleanup = useCallback(() => {
    animationsRef.current.forEach((animation) => {
      animation.kill()
    })
    animationsRef.current = []

    if (scopeRef.current) {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger && scopeRef.current?.contains(trigger.trigger as Node)) {
          trigger.kill()
        }
      })
    }
  }, [])

  useEffect(() => {
    return () => {
      cleanup()
    }
  }, [cleanup])

  return {
    scopeRef,
    addAnimation,
    cleanup,
    fadeInUp,
    staggerCards,
    parallaxBackground,
    setupHoverAnimation,
    animateCounter,
    revealText,
    refreshScrollTrigger,
    logPerformance,
  }
}

// Specialized hook for section animations
export const useSectionAnimation = (sectionName: string) => {
  const { scopeRef, addAnimation, fadeInUp, staggerCards, logPerformance } = useGSAP()

  const animateSection = useCallback(() => {
    if (!scopeRef.current) return

    logPerformance(`${sectionName} section animation started`)

    // Animate section header
    const header = scopeRef.current.querySelector('[data-animate="header"]')
    if (header) {
      const headerAnimation = fadeInUp(header, {
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 80%",
        },
      })
      addAnimation(headerAnimation)
    }

    // Animate cards/items
    const cards = scopeRef.current.querySelectorAll('[data-animate="card"]')
    if (cards.length > 0) {
      const cardsAnimation = staggerCards(cards, {
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 75%",
        },
      })
      addAnimation(cardsAnimation)
    }

    // Animate CTA
    const cta = scopeRef.current.querySelector('[data-animate="cta"]')
    if (cta) {
      const ctaAnimation = fadeInUp(cta, {
        delay: 0.4,
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 70%",
        },
      })
      addAnimation(ctaAnimation)
    }
  }, [sectionName, scopeRef, addAnimation, fadeInUp, staggerCards, logPerformance])

  useEffect(() => {
    const timer = setTimeout(animateSection, 100)
    return () => clearTimeout(timer)
  }, [animateSection])

  return { scopeRef }
}

// Hook for hover animations
export const useHoverAnimations = (selector: string) => {
  const { setupHoverAnimation } = useGSAP()

  useEffect(() => {
    const timer = setTimeout(() => {
      setupHoverAnimation(selector)
    }, 100)

    return () => clearTimeout(timer)
  }, [selector, setupHoverAnimation])
}

// Hook for parallax backgrounds
export const useParallax = (selector: string, options = {}) => {
  const { parallaxBackground } = useGSAP()

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((element) => {
        parallaxBackground(element, options)
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [selector, options, parallaxBackground])
}

// Hook for counter animations
export const useCounterAnimation = (selector: string, targetValue: number, options = {}) => {
  const { animateCounter } = useGSAP()

  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.querySelector(selector)
      if (element) {
        animateCounter(element, {
          to: targetValue,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
          ...options,
        })
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [selector, targetValue, options, animateCounter])
}
