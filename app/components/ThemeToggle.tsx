"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return <div className="w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-white/20 dark:bg-gray-800/30 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-full p-1 transition-all duration-300 hover:bg-white/30 dark:hover:bg-gray-800/40 shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Toggle Background */}
      <motion.div
        className="absolute inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md"
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      {/* Icons */}
      <div className="relative flex items-center justify-between w-full h-full px-1">
        <motion.div
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center w-5 h-5"
        >
          <Sun className="w-4 h-4 text-yellow-500" />
        </motion.div>

        <motion.div
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center w-5 h-5"
        >
          <Moon className="w-4 h-4 text-blue-200" />
        </motion.div>
      </div>
    </motion.button>
  )
}
