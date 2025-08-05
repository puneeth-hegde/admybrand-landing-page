"use client"

import { motion, easeInOut } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.3,
      },
    },
  }

  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))] -z-10" />

      {/* Responsive Gradient Blobs */}
      <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 sm:-translate-y-12 sm:translate-x-12">
        <div className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/30 to-purple-500/30 dark:from-blue-500/20 dark:to-purple-600/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-6 -translate-x-6 sm:translate-y-12 sm:-translate-x-12">
        <div
          className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-600/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 dark:from-indigo-500/15 dark:to-pink-500/15 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 xl:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <motion.div className="space-y-6 sm:space-y-8 text-center lg:text-left" variants={itemVariants}>
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                AI-Powered Marketing Suite
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  ADmyBRAND
                </span>
                <br />
                AI Suite
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Transform your marketing strategy with our comprehensive AI-powered platform. Create, optimize, and scale
              your brand presence across all digital channels with intelligent automation and data-driven insights.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <button className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-h-[48px] sm:min-h-[56px]">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-200 shadow-sm hover:shadow-md min-h-[48px] sm:min-h-[56px]">
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Learn More
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-8 pt-2 sm:pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1 sm:-space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white dark:border-gray-800" />
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white dark:border-gray-800" />
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-2 border-white dark:border-gray-800" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 ml-2 sm:ml-3">
                  Trusted by 10,000+ marketers
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Image */}
          <motion.div className="relative mt-8 lg:mt-0" variants={imageVariants}>
            <div className="relative">
              {/* Main Dashboard Container - Glassmorphism */}
              <div className="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden">
                <Image
                  src="/images/hero-illustration.svg"
                  alt="AI Marketing Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                {/* Overlay Elements for Dashboard Feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent dark:from-gray-900/20" />
              </div>

              {/* Background Decoration */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-2xl sm:rounded-3xl -z-10 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}


