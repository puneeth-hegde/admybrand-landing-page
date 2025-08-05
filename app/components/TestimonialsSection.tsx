"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    feedback:
      "ADmyBRAND AI Suite completely transformed our marketing strategy. We've seen a 300% increase in engagement and our content creation time has been cut in half. The AI-generated content feels authentic and perfectly matches our brand voice.",
    image: "/placeholder.svg?height=80&width=80&text=SC",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "GrowthLab",
    feedback:
      "As a startup, we needed powerful marketing tools without the enterprise price tag. ADmyBRAND delivered exactly that. The automation features alone have saved us 20+ hours per week, allowing us to focus on what matters most - growing our business.",
    image: "/placeholder.svg?height=80&width=80&text=MR",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Head of Digital Marketing",
    company: "Innovate Corp",
    feedback:
      "The analytics and insights from ADmyBRAND are game-changing. We can now predict campaign performance before launch and optimize in real-time. Our ROI has improved by 250% since implementing their AI suite.",
    image: "/placeholder.svg?height=80&width=80&text=EW",
    rating: 5,
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const statsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.4,
    },
  },
}

export default function TestimonialsSection() {
  return (
    <motion.section
      className="py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/40 dark:bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:[mask-image:radial-gradient(ellipse_at_center,black,transparent)] -z-10" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
        <div className="w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
        <div className="w-72 h-72 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 dark:from-purple-400/5 dark:to-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Customer Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by marketing teams
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {" "}
              worldwide
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their marketing with our AI-powered suite.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-2xl hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-300 h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <blockquote className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6 text-lg">
                    "{testimonial.feedback}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-white/20 dark:border-gray-700/20 group-hover:border-blue-200/50 dark:group-hover:border-blue-600/50 transition-colors duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>

                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-blue-400/5 to-purple-400/5 dark:from-blue-400/3 dark:to-purple-400/3 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 dark:from-cyan-400/3 dark:to-blue-400/3 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats - Glassmorphism */}
        <motion.div className="mt-16 text-center" variants={statsVariants}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">10,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
            </div>
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">4.9/5</div>
              <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">250%</div>
              <div className="text-gray-600 dark:text-gray-400">Average ROI Increase</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Enhanced Glassmorphism */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-600/80 dark:to-purple-600/80 backdrop-blur-md rounded-2xl p-8 text-white max-w-4xl mx-auto border border-blue-400/30 dark:border-blue-500/30 shadow-2xl">
            {/* Gradient Blobs for CTA */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to join thousands of successful marketers?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Start your free trial today and see why teams choose ADmyBRAND AI Suite.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Start Free Trial
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
