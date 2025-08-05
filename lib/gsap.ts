import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// GSAP Configuration for optimal performance
gsap.config({
  force3D: true,
  nullTargetWarn: false,
})

// Default animation settings
export const ANIMATION_CONFIG = {
  duration: 0.8,
  ease: "power4.out",
  stagger: 0.15,
  parallaxSpeed: 0.5,
  hoverScale: 1.05,
  tapScale: 0.98,
}

// Performance optimized timeline creation
export const createTimeline = (options = {}) => {
  return gsap.timeline({
    defaults: {
      duration: ANIMATION_CONFIG.duration,
      ease: ANIMATION_CONFIG.ease,
    },
    ...options,
  })
}

// Utility function to set up hardware acceleration
export const setupHardwareAcceleration = (elements: string | Element | Element[]) => {
  gsap.set(elements, {
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
    perspective: 1000,
    transformStyle: "preserve-3d",
  })
}

// Clean up hardware acceleration after animation
export const cleanupHardwareAcceleration = (elements: string | Element | Element[]) => {
  gsap.set(elements, {
    willChange: "auto",
    clearProps: "backfaceVisibility,perspective,transformStyle",
  })
}

// Fade in with slide up animation
export const fadeInUp = (
  element: string | Element | Element[],
  options: {
    delay?: number
    duration?: number
    y?: number
    stagger?: number
    scrollTrigger?: any
  } = {},
) => {
  const { delay = 0, duration = ANIMATION_CONFIG.duration, y = 60, stagger = 0, scrollTrigger } = options

  setupHardwareAcceleration(element)

  const tl = createTimeline()

  tl.fromTo(
    element,
    {
      opacity: 0,
      y: y,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      onComplete: () => cleanupHardwareAcceleration(element),
    },
  )

  if (scrollTrigger) {
    ScrollTrigger.create({
      trigger: scrollTrigger.trigger || element,
      start: scrollTrigger.start || "top 80%",
      end: scrollTrigger.end || "bottom 20%",
      animation: tl,
      toggleActions: "play none none reverse",
      ...scrollTrigger,
    })
  }

  return tl
}

// Staggered card animations
export const staggerCards = (
  cards: string | Element | Element[],
  options: {
    stagger?: number
    y?: number
    scale?: number
    scrollTrigger?: any
  } = {},
) => {
  const { stagger = ANIMATION_CONFIG.stagger, y = 80, scale = 0.9, scrollTrigger } = options

  setupHardwareAcceleration(cards)

  const tl = createTimeline()

  tl.fromTo(
    cards,
    {
      opacity: 0,
      y: y,
      scale: scale,
      rotationX: 15,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      stagger: stagger,
      onComplete: () => cleanupHardwareAcceleration(cards),
    },
  )

  if (scrollTrigger) {
    ScrollTrigger.create({
      trigger: scrollTrigger.trigger || cards,
      start: scrollTrigger.start || "top 85%",
      animation: tl,
      toggleActions: "play none none reverse",
      ...scrollTrigger,
    })
  }

  return tl
}

// Parallax background animation
export const parallaxBackground = (
  element: string | Element,
  options: {
    speed?: number
    direction?: "up" | "down"
    scrollTrigger?: any
  } = {},
) => {
  const { speed = ANIMATION_CONFIG.parallaxSpeed, direction = "up", scrollTrigger } = options

  setupHardwareAcceleration(element)

  const yMovement = direction === "up" ? -100 * speed : 100 * speed

  ScrollTrigger.create({
    trigger: scrollTrigger?.trigger || element,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    animation: gsap.fromTo(
      element,
      { y: -yMovement },
      {
        y: yMovement,
        ease: "none",
      },
    ),
    ...scrollTrigger,
  })
}

// Hover animations for interactive elements
export const setupHoverAnimation = (
  element: string | Element | Element[],
  options: {
    scale?: number
    duration?: number
    ease?: string
  } = {},
) => {
  const { scale = ANIMATION_CONFIG.hoverScale, duration = 0.3, ease = "power2.out" } = options

  const elements = gsap.utils.toArray(element)

  elements.forEach((el: any) => {
    setupHardwareAcceleration(el)

    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        scale: scale,
        duration: duration,
        ease: ease,
      })
    })

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        scale: 1,
        duration: duration,
        ease: ease,
      })
    })

    // Touch events for mobile
    el.addEventListener("touchstart", () => {
      gsap.to(el, {
        scale: ANIMATION_CONFIG.tapScale,
        duration: 0.1,
        ease: "power2.out",
      })
    })

    el.addEventListener("touchend", () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      })
    })
  })
}

// Counter animation
export const animateCounter = (
  element: string | Element,
  options: {
    from?: number
    to: number
    duration?: number
    scrollTrigger?: any
  },
) => {
  const { from = 0, to, duration = 2, scrollTrigger } = options

  const counter = { value: from }
  const el = typeof element === "string" ? document.querySelector(element) : element

  if (!el) return

  const tl = gsap.timeline()

  tl.to(counter, {
    value: to,
    duration: duration,
    ease: "power2.out",
    onUpdate: () => {
      el.textContent = Math.floor(counter.value).toString()
    },
  })

  if (scrollTrigger) {
    ScrollTrigger.create({
      trigger: scrollTrigger.trigger || element,
      start: scrollTrigger.start || "top 80%",
      animation: tl,
      toggleActions: "play none none reverse",
      ...scrollTrigger,
    })
  }

  return tl
}

// Text reveal animation
export const revealText = (
  element: string | Element | Element[],
  options: {
    stagger?: number
    duration?: number
    scrollTrigger?: any
  } = {},
) => {
  const { stagger = 0.05, duration = 0.8, scrollTrigger } = options

  setupHardwareAcceleration(element)

  const tl = createTimeline()

  tl.fromTo(
    element,
    {
      opacity: 0,
      y: 100,
      rotationX: 90,
    },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: duration,
      stagger: stagger,
      onComplete: () => cleanupHardwareAcceleration(element),
    },
  )

  if (scrollTrigger) {
    ScrollTrigger.create({
      trigger: scrollTrigger.trigger || element,
      start: scrollTrigger.start || "top 85%",
      animation: tl,
      toggleActions: "play none none reverse",
      ...scrollTrigger,
    })
  }

  return tl
}

// Refresh ScrollTrigger (useful for dynamic content)
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh()
}

// Kill all ScrollTriggers (cleanup)
export const killAllScrollTriggers = () => {
  ScrollTrigger.killAll()
}

// Batch ScrollTrigger for performance
export const batchScrollTrigger = (
  elements: string,
  options: {
    onEnter?: (elements: Element[]) => void
    onLeave?: (elements: Element[]) => void
    start?: string
    end?: string
  } = {},
) => {
  const { onEnter, onLeave, start = "top 80%", end = "bottom 20%" } = options

  ScrollTrigger.batch(elements, {
    onEnter: onEnter,
    onLeave: onLeave,
    start: start,
    end: end,
  })
}

// Responsive animation helper
export const createResponsiveAnimation = (
  element: string | Element | Element[],
  animations: {
    mobile?: () => gsap.core.Timeline
    tablet?: () => gsap.core.Timeline
    desktop?: () => gsap.core.Timeline
  },
) => {
  const mm = gsap.matchMedia()

  mm.add("(max-width: 767px)", () => {
    return animations.mobile?.()
  })

  mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
    return animations.tablet?.()
  })

  mm.add("(min-width: 1024px)", () => {
    return animations.desktop?.()
  })

  return mm
}

// Performance monitoring
export const logPerformance = (label: string) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`🎬 GSAP Animation: ${label}`)
  }
}
