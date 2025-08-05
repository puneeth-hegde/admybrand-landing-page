"use client"

import { Brain, BarChart3, Target, Zap, Users, Shield } from "lucide-react"
import { useSectionAnimation, useHoverAnimations, useParallax } from "@/hooks/useGSAP"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description:
      "Create compelling marketing content, social media posts, and ad copy with our advanced AI algorithms that understand your brand voice.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your marketing performance with real-time analytics, conversion tracking, and predictive modeling.",
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description:
      "Reach the right audience with AI-powered customer segmentation and personalized campaign optimization.",
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    description:
      "Streamline your marketing processes with intelligent automation that adapts to customer behavior and market trends.",
  },
  {
    icon: Users,
    title: "Multi-Channel Management",
    description:
      "Manage all your marketing channels from one dashboard - social media, email, ads, and content marketing.",
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description:
      "Monitor and protect your brand reputation across all digital platforms with AI-powered sentiment analysis.",
  },
]

export default function FeaturesSection() {
  const { scopeRef } = useSectionAnimation("Features")

  // Setup hover animations
  useHoverAnimations('[data-hover="feature-card"]')
  useHoverAnimations('[data-hover="button"]')

  // Setup parallax backgrounds
  useParallax('[data-parallax="features-bg"]', { speed: 0.2 })

  return (
    <section
      ref={scopeRef}
      className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-800/30 [mask-image:linear-gradient(0deg,transparent,white,transparent)] dark:[mask-image:linear-gradient(0deg,transparent,black,transparent)] -z-10" />

      {/* Parallax Background Blobs */}
      <div data-parallax="features-bg" className="absolute top-1/4 left-0 -translate-x-1/2">
        <div className="w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl" />
      </div>
      <div data-parallax="features-bg" className="absolute bottom-1/4 right-0 translate-x-1/2">
        <div className="w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-400/10 to-pink-400/10 dark:from-cyan-400/5 dark:to-pink-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-animate="header" className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Everything you need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {" "}
              scale your brand
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI suite provides all the tools and insights you need to build, manage, and grow your
            brand presence across every digital channel.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              data-animate="card"
              data-hover="feature-card"
              className="group relative"
              style={{ willChange: "transform" }}
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-2xl hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-300 h-full">
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-100/80 to-purple-100/80 dark:from-blue-900/50 dark:to-purple-900/50 backdrop-blur-sm rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-200/30 dark:border-blue-700/30">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 dark:from-cyan-400/5 dark:to-blue-400/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div data-animate="cta" className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/30 dark:border-gray-700/30 shadow-lg">
            <button
              data-hover="button"
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl min-h-[48px] sm:min-h-[56px] w-full sm:w-auto"
            >
              Start Free Trial
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
              No credit card required • 14-day free trial
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
