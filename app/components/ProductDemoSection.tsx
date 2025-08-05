"use client"

import { Play, Calendar, ArrowRight, Video, Sparkles } from "lucide-react"
import { useState, useRef } from "react"
import { useSectionAnimation, useHoverAnimations, useParallax } from "@/hooks/useGSAP"

export default function ProductDemoSection() {
  const { scopeRef } = useSectionAnimation("ProductDemo")
  const [isPlaying, setIsPlaying] = useState(false)
  const [showThumbnail, setShowThumbnail] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Setup animations
  useHoverAnimations('[data-hover="button"]')
  useHoverAnimations('[data-hover="play-button"]')
  useParallax('[data-parallax="demo-bg"]', { speed: 0.25 })

  // Video configuration
  const videoConfig = {
    type: "youtube",
    youtubeId: "dQw4w9WgXcQ",
    vimeoId: "123456789",
    localSrc: "/demo-video.mp4",
    thumbnail: "/placeholder.svg?height=600&width=1000&text=Product+Demo+Preview",
  }

  const handlePlayClick = () => {
    setIsPlaying(true)
    setShowThumbnail(false)

    if (videoConfig.type === "local" && videoRef.current) {
      videoRef.current.play()
    } else if (videoConfig.type === "youtube" && iframeRef.current) {
      const src = `https://www.youtube.com/embed/${videoConfig.youtubeId}?autoplay=1&rel=0&modestbranding=1`
      iframeRef.current.src = src
    } else if (videoConfig.type === "vimeo" && iframeRef.current) {
      const src = `https://player.vimeo.com/video/${videoConfig.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`
      iframeRef.current.src = src
    }
  }

  const renderVideoPlayer = () => {
    const baseClasses = "w-full h-full rounded-2xl sm:rounded-3xl"

    switch (videoConfig.type) {
      case "youtube":
        return (
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${videoConfig.youtubeId}?rel=0&modestbranding=1`}
            title="Product Demo Video"
            className={baseClasses}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )

      case "vimeo":
        return (
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${videoConfig.vimeoId}?title=0&byline=0&portrait=0`}
            title="Product Demo Video"
            className={baseClasses}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )

      case "local":
        return (
          <video
            ref={videoRef}
            className={baseClasses}
            controls={isPlaying}
            poster={videoConfig.thumbnail}
            preload="metadata"
            playsInline
          >
            <source src={videoConfig.localSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )

      default:
        return (
          <div className={`${baseClasses} bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}>
            <p className="text-gray-500 dark:text-gray-400">Video player not configured</p>
          </div>
        )
    }
  }

  return (
    <section
      ref={scopeRef}
      className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-blue-950/30 dark:to-indigo-950/50 relative overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/20 dark:bg-grid-slate-800/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:[mask-image:radial-gradient(ellipse_at_center,black,transparent)] -z-10" />

      {/* Parallax Gradient Blobs */}
      <div data-parallax="demo-bg" className="absolute top-0 left-1/3 -translate-y-1/2">
        <div className="w-64 h-64 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] bg-gradient-to-br from-blue-400/15 to-purple-400/15 dark:from-blue-500/8 dark:to-purple-500/8 rounded-full blur-3xl" />
      </div>
      <div data-parallax="demo-bg" className="absolute bottom-0 right-1/3 translate-y-1/2">
        <div className="w-64 h-64 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-cyan-400/15 to-pink-400/15 dark:from-cyan-500/8 dark:to-pink-500/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-animate="header" className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/60 dark:bg-blue-900/40 backdrop-blur-sm border border-blue-200/40 dark:border-blue-700/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Video className="w-4 h-4 mr-2" />
            Product Demo
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            See ADmyBRAND
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {" "}
              in action
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Watch how our AI-powered marketing suite transforms your workflow in just 3 minutes. See real results from
            real customers.
          </p>
        </div>

        {/* Video Container */}
        <div data-animate="card" className="relative max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {/* Glassmorphism Container */}
          <div className="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-3xl sm:rounded-[2rem] p-4 sm:p-6 lg:p-8 border border-white/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
            {/* Video Aspect Ratio Container */}
            <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl">
              {/* Video Player */}
              <div className="absolute inset-0">{renderVideoPlayer()}</div>

              {/* Play Button Overlay */}
              {showThumbnail && (
                <div
                  className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-[1px] flex items-center justify-center cursor-pointer group"
                  onClick={handlePlayClick}
                >
                  {/* Thumbnail Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${videoConfig.thumbnail})` }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 dark:from-black/80 dark:via-black/40 dark:to-black/50" />

                  {/* Play Button */}
                  <div
                    data-hover="play-button"
                    className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white/90 dark:bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                    style={{ willChange: "transform" }}
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600 ml-1 fill-current" />
                  </div>

                  {/* Play Text */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
                    <p className="text-lg sm:text-xl font-semibold mb-1">Watch Demo</p>
                    <p className="text-sm sm:text-base text-white/80">3 min overview</p>
                  </div>

                  {/* Sparkle Effects */}
                  <div className="absolute top-1/4 left-1/4">
                    <Sparkles className="w-6 h-6 text-white/60" />
                  </div>

                  <div className="absolute top-1/3 right-1/4">
                    <Sparkles className="w-4 h-4 text-white/40" />
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-cyan-400/10 to-pink-400/10 dark:from-cyan-400/5 dark:to-pink-400/5 rounded-full blur-2xl" />
          </div>

          {/* Floating Stats */}
          <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/40 dark:border-gray-700/40 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200">Live Demo</span>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/40 dark:border-gray-700/40 shadow-lg">
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Views</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div data-animate="cta" className="text-center">
          <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 dark:border-gray-700/20 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to see it live?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Book a personalized demo with our team and discover how ADmyBRAND can transform your marketing strategy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button
                data-hover="button"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl min-h-[56px] w-full sm:w-auto"
                style={{ willChange: "transform" }}
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                Book a Live Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                data-hover="button"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-200 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border-2 border-white/30 dark:border-gray-700/30 rounded-xl hover:border-blue-300/50 dark:hover:border-blue-600/50 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 min-h-[56px] w-full sm:w-auto"
                style={{ willChange: "transform" }}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Again
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 mt-8 pt-6 border-t border-gray-200/30 dark:border-gray-700/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">15 min</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Demo length</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">No cost</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Free consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Same day</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Quick setup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
