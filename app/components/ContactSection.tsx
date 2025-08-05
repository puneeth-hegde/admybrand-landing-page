"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react"
import { useState } from "react"

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

const formVariants = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2,
    },
  },
}

const contactDetailsVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.4,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const contactCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@admybrand.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Drive, San Francisco, CA 94105",
      description: "Come say hello at our office",
    },
  ]

  return (
    <motion.section
      className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      {/* Background Elements - Responsive */}
      <div className="absolute inset-0 bg-grid-slate-100/40 dark:bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:[mask-image:radial-gradient(ellipse_at_center,black,transparent)] -z-10" />
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2">
        <div className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-2xl sm:blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2">
        <div className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 dark:from-purple-400/5 dark:to-cyan-400/5 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Ready to transform
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {" "}
              your marketing?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how ADmyBRAND AI Suite can help scale your business. Our team is here to answer your questions
            and provide a personalized demo.
          </p>
        </motion.div>

        {/* Contact Content - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">
          {/* Contact Form - Responsive */}
          <motion.div variants={formVariants}>
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 dark:border-gray-700/20 shadow-lg">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Send us a message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100/80 dark:bg-green-900/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200/30 dark:border-green-700/30">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="text-lg sm:text-xl text-green-600 dark:text-green-400"
                    >
                      ✓
                    </motion.div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Message sent successfully!
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name Field - Responsive */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base border border-white/30 dark:border-gray-700/30 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-white/40 dark:hover:border-gray-600/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 min-h-[48px] sm:min-h-[56px]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field - Responsive */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base border border-white/30 dark:border-gray-700/30 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-white/40 dark:hover:border-gray-600/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 min-h-[48px] sm:min-h-[56px]"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Message Field - Responsive */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base border border-white/30 dark:border-gray-700/30 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-white/40 dark:hover:border-gray-600/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none min-h-[120px]"
                      placeholder="Tell us about your project or ask us a question..."
                    />
                  </div>

                  {/* Submit Button - Responsive */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[48px] sm:min-h-[56px]"
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Details - Responsive */}
          <motion.div className="space-y-6 sm:space-y-8" variants={contactDetailsVariants}>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Get in touch
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
                We're here to help you succeed. Whether you have questions about our features, need technical support,
                or want to discuss enterprise solutions, our team is ready to assist.
              </p>
            </div>

            {/* Contact Details Cards - Responsive */}
            <div className="space-y-4 sm:space-y-6">
              {contactDetails.map((detail, index) => (
                <motion.div key={index} variants={contactCardVariants} className="group">
                  <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-gray-700/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100/80 to-purple-100/80 dark:from-blue-900/50 dark:to-purple-900/50 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-200/30 dark:border-blue-700/30">
                          <detail.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {detail.title}
                        </h4>
                        <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium mb-1">
                          {detail.content}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{detail.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours - Responsive */}
            <motion.div
              variants={contactCardVariants}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                <h4 className="text-base sm:text-lg font-semibold">Business Hours</h4>
              </div>
              <div className="space-y-1 sm:space-y-2 text-blue-100 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
