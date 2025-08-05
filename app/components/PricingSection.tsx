"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap } from "lucide-react"

const pricingPlans = [
  {
    name: "Free",
    price: 0,
    period: "forever",
    description: "Perfect for getting started with AI marketing",
    features: [
      "5 AI-generated posts per month",
      "Basic analytics dashboard",
      "1 social media account",
      "Email support",
      "Basic templates library",
      "Community access",
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outline",
    popular: false,
  },
  {
    name: "Pro",
    price: 19,
    period: "month",
    description: "Ideal for growing businesses and marketing teams",
    features: [
      "Unlimited AI content generation",
      "Advanced analytics & insights",
      "Up to 10 social media accounts",
      "Priority email & chat support",
      "Premium templates & designs",
      "A/B testing capabilities",
      "Custom brand voice training",
      "Competitor analysis",
      "Automated posting scheduler",
    ],
    buttonText: "Start Pro Trial",
    buttonVariant: "primary",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 99,
    period: "month",
    description: "Advanced features for large organizations",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "White-label solutions",
      "Dedicated account manager",
      "Custom integrations & API",
      "Advanced security & compliance",
      "Custom AI model training",
      "Multi-brand management",
      "Priority phone support",
      "Custom reporting & dashboards",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline",
    popular: false,
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
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function PricingSection() {
  return (
    <motion.section
      className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      {/* Background Elements with Gradient Blobs - Responsive */}
      <div className="absolute inset-0 bg-grid-slate-100/30 dark:bg-grid-slate-800/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:[mask-image:radial-gradient(ellipse_at_center,black,transparent)] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
        <div
          className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 dark:from-cyan-500/10 dark:to-pink-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
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
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Simple Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Choose the perfect plan for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {" "}
              your business
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Start free and scale as you grow. All plans include our core AI features with no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards - Responsive Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative group ${plan.popular ? "md:col-span-2 lg:col-span-1 lg:-mt-4" : ""}`}
            >
              {/* Popular Badge - Responsive */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-medium shadow-lg backdrop-blur-sm">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Glassmorphism Card - Responsive */}
              <div
                className={`relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full ${
                  plan.popular
                    ? "border-blue-200/50 dark:border-blue-700/50 shadow-blue-100/50 dark:shadow-blue-900/20"
                    : "border-white/20 dark:border-gray-700/20 hover:border-blue-200/30 dark:hover:border-blue-700/30"
                }`}
              >
                {/* Background Gradient for Popular Plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-xl sm:rounded-2xl" />
                )}

                <div className="relative z-10">
                  {/* Plan Header - Responsive */}
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {plan.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-base sm:text-lg text-gray-600 dark:text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  {/* Features List - Responsive */}
                  <div className="mb-6 sm:mb-8">
                    <ul className="space-y-3 sm:space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-100/80 dark:bg-green-900/50 backdrop-blur-sm rounded-full flex items-center justify-center mt-0.5 mr-3 border border-green-200/30 dark:border-green-700/30">
                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button - Responsive */}
                  <button
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base min-h-[48px] sm:min-h-[56px] ${
                      plan.buttonVariant === "primary"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        : "bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border-2 border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-200 hover:border-blue-300/50 dark:hover:border-blue-600/50 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/40 dark:hover:bg-gray-800/40"
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  {/* Additional Info - Responsive */}
                  {plan.name === "Free" && (
                    <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4">
                      No credit card required
                    </p>
                  )}
                  {plan.name === "Pro" && (
                    <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4">
                      14-day free trial included
                    </p>
                  )}
                  {plan.name === "Enterprise" && (
                    <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4">
                      Custom pricing available
                    </p>
                  )}
                </div>

                {/* Decorative Elements - Responsive */}
                <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/5 to-purple-400/5 dark:from-blue-400/3 dark:to-purple-400/3 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 dark:from-cyan-400/3 dark:to-blue-400/3 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section - Glassmorphism - Responsive */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 dark:border-gray-700/20 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Need a custom solution?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              We offer tailored enterprise solutions with custom features, dedicated support, and flexible pricing for
              large organizations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl min-h-[48px] sm:min-h-[56px] w-full sm:w-auto">
                Contact Sales
              </button>
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border-2 border-white/20 dark:border-gray-700/20 rounded-xl hover:border-blue-300/50 dark:hover:border-blue-600/50 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-200 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
