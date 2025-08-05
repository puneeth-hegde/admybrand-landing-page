"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Check, Users, Zap, Crown, Calculator } from "lucide-react"
import { useState, useEffect, useCallback, useMemo } from "react"
import { useCountUp } from "./hooks/useCountUp"

interface PricingTier {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  basePrice: {
    monthly: number
    yearly: number
  }
  pricePerUser: {
    monthly: number
    yearly: number
  }
  features: string[]
  popular: boolean
  maxUsers?: number
}

const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    icon: Users,
    description: "Perfect for getting started",
    basePrice: { monthly: 0, yearly: 0 },
    pricePerUser: { monthly: 0, yearly: 0 },
    features: [
      "Up to 3 team members",
      "5 AI-generated posts/month",
      "Basic analytics",
      "1 social account",
      "Email support",
      "Community access",
    ],
    popular: false,
    maxUsers: 3,
  },
  {
    id: "pro",
    name: "Pro",
    icon: Zap,
    description: "Ideal for growing teams",
    basePrice: { monthly: 29, yearly: 290 }, // ~17% yearly discount
    pricePerUser: { monthly: 15, yearly: 150 }, // Per additional user
    features: [
      "Unlimited AI content",
      "Advanced analytics",
      "10 social accounts",
      "Priority support",
      "A/B testing",
      "Custom brand voice",
      "Automation workflows",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Crown,
    description: "Advanced features for large teams",
    basePrice: { monthly: 99, yearly: 990 }, // ~17% yearly discount
    pricePerUser: { monthly: 20, yearly: 200 }, // Per additional user
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "White-label solutions",
      "Dedicated manager",
      "Custom integrations",
      "Advanced security",
      "Custom AI training",
      "SLA guarantee",
    ],
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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function InteractivePricingCalculator() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")
  const [teamSize, setTeamSize] = useState(5)
  const [highlightedPlan, setHighlightedPlan] = useState<string | null>(null)

  const calculatePrice = useCallback(
    (tier: PricingTier): number => {
      if (tier.id === "free") return 0

      // Get base price for billing period
      const basePrice = tier.basePrice[billingPeriod]

      // For Free tier with user limit
      if (tier.maxUsers && teamSize > tier.maxUsers) {
        return 0
      }

      // Calculate additional users (base includes 1 user)
      const additionalUsers = Math.max(0, teamSize - 1)
      const userPrice = tier.pricePerUser[billingPeriod] * additionalUsers

      // Return clean total
      return basePrice + userPrice
    },
    [billingPeriod, teamSize],
  )

  const getRecommendedPlan = useCallback((): string => {
    if (teamSize <= 3) return "free"
    if (teamSize <= 20) return "pro"
    return "enterprise"
  }, [teamSize])

  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value, 10)
    if (!isNaN(value) && value >= 1 && value <= 50) {
      setTeamSize(value)
    }
  }, [])

  useEffect(() => {
    const recommended = getRecommendedPlan()
    setHighlightedPlan(recommended)

    const timer = setTimeout(() => {
      setHighlightedPlan(null)
    }, 2000)

    return () => clearTimeout(timer)
  }, [getRecommendedPlan])

  const calculations = useMemo(() => {
    return pricingTiers.map((tier) => ({
      ...tier,
      calculatedPrice: calculatePrice(tier),
    }))
  }, [calculatePrice])

  const recommendedPlan = useMemo(() => getRecommendedPlan(), [getRecommendedPlan])

  return (
    <motion.section
      className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/30 dark:bg-grid-slate-800/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:[mask-image:radial-gradient(ellipse_at_center,black,transparent)] -z-10" />
      <div className="absolute top-0 left-1/4 -translate-y-1/2">
        <div className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
      </div>
      <div className="absolute bottom-0 right-1/4 translate-y-1/2">
        <div
          className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 dark:from-cyan-500/10 dark:to-pink-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Calculator className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Interactive Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Find your perfect
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {" "}
              pricing plan
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Customize your plan based on team size and billing preference. See real-time pricing updates as you adjust
            your needs.
          </p>
        </motion.div>

        {/* Controls Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-gray-700/20 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Billing Toggle - COMPLETELY FIXED */}
              <div className="space-y-4">
                <label className="block text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                  Billing Period
                </label>
                <div className="relative bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-1 border border-gray-200/30 dark:border-gray-700/30">
                  {/* Sliding Background */}
                  <div
                    className="absolute top-1 bottom-1 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg shadow-md border border-white/40 dark:border-gray-600/40 transition-all duration-300 ease-out"
                    style={{
                      left: billingPeriod === "monthly" ? "4px" : "50%",
                      width: "calc(50% - 4px)",
                      transform: billingPeriod === "yearly" ? "translateX(-4px)" : "translateX(0)",
                    }}
                  />

                  {/* Buttons */}
                  <div className="relative flex">
                    <button
                      type="button"
                      onClick={() => setBillingPeriod("monthly")}
                      className={`flex-1 py-3 px-4 text-sm sm:text-base font-medium rounded-lg transition-colors duration-200 relative z-10 ${
                        billingPeriod === "monthly"
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      type="button"
                      onClick={() => setBillingPeriod("yearly")}
                      className={`flex-1 py-3 px-4 text-sm sm:text-base font-medium rounded-lg transition-colors duration-200 flex items-center justify-center relative z-10 ${
                        billingPeriod === "yearly"
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                      }`}
                    >
                      Yearly
                      <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs rounded-full">
                        Save 17%
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Team Size Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="block text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    Team Size
                  </label>
                  <motion.div
                    key={teamSize}
                    initial={{ scale: 1.2, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/50 backdrop-blur-sm text-blue-700 dark:text-blue-300 text-sm sm:text-base font-bold rounded-lg border border-blue-200/30 dark:border-blue-700/30"
                  >
                    {teamSize} {teamSize === 1 ? "member" : "members"}
                  </motion.div>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={teamSize}
                    onChange={handleSliderChange}
                    className="w-full h-3 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, rgb(59 130 246) 0%, rgb(59 130 246) ${((teamSize - 1) / 49) * 100}%, rgb(229 231 235 / 0.5) ${((teamSize - 1) / 49) * 100}%, rgb(229 231 235 / 0.5) 100%)`,
                    }}
                    aria-label={`Team size: ${teamSize} members`}
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <span>1</span>
                    <span>25</span>
                    <span>50+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {pricingTiers.map((tier) => {
            const price = calculatePrice(tier)
            const isHighlighted = highlightedPlan === tier.id
            const isRecommended = getRecommendedPlan() === tier.id

            return (
              <PricingCard
                key={tier.id}
                tier={tier}
                price={price}
                billingPeriod={billingPeriod}
                teamSize={teamSize}
                isHighlighted={isHighlighted}
                isRecommended={isRecommended}
              />
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-600/80 dark:to-purple-600/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white max-w-4xl mx-auto border border-blue-400/30 dark:border-blue-500/30 shadow-2xl">
            {/* Gradient Blobs for CTA */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Need a custom solution?</h3>
              <p className="text-blue-100 mb-6 text-sm sm:text-base lg:text-lg">
                Enterprise plans can be customized for teams larger than 50 members with volume discounts.
              </p>
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-blue-600 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
  .slider {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border-radius: 8px;
    background: transparent;
  }
  
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgb(59 130 246), rgb(147 51 234));
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    border: 2px solid white;
    transition: all 0.2s ease;
    position: relative;
    z-index: 2;
  }
  
  .slider::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.6);
  }
  
  .slider::-webkit-slider-thumb:active {
    transform: scale(1.05);
  }
  
  .slider::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgb(59 130 246), rgb(147 51 234));
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    border: 2px solid white;
    transition: all 0.2s ease;
    -moz-appearance: none;
    appearance: none;
  }
  
  .slider::-moz-range-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.6);
  }
  
  .slider::-moz-range-track {
    height: 12px;
    border-radius: 6px;
    background: transparent;
    border: none;
  }
  
  .slider::-ms-thumb {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgb(59 130 246), rgb(147 51 234));
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    border: 2px solid white;
    transition: all 0.2s ease;
  }
  
  .slider::-ms-track {
    height: 12px;
    border-radius: 6px;
    background: transparent;
    border: none;
    color: transparent;
  }
  
  .slider:focus {
    outline: none;
  }
  
  .slider:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2), 0 4px 12px rgba(59, 130, 246, 0.4);
  }
  
  .slider:focus::-moz-range-thumb {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2), 0 4px 12px rgba(59, 130, 246, 0.4);
  }
`}</style>
    </motion.section>
  )
}

interface PricingCardProps {
  tier: PricingTier
  price: number
  billingPeriod: "monthly" | "yearly"
  teamSize: number
  isHighlighted: boolean
  isRecommended: boolean
}

function PricingCard({ tier, price, billingPeriod, teamSize, isHighlighted, isRecommended }: PricingCardProps) {
  // Ensure stable price value
  const stablePrice = useMemo(() => {
    return typeof price === "number" && !isNaN(price) && isFinite(price) ? price : 0
  }, [price])

  const animatedPrice = useCountUp(stablePrice, 400)

  // Price Display - STABLE
  const displayPrice = Math.floor(animatedPrice)

  return (
    <motion.div
      variants={cardVariants}
      className={`relative group ${isRecommended ? "lg:-mt-4" : ""}`}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Recommended Badge */}
      <AnimatePresence>
        {isRecommended && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-medium shadow-lg backdrop-blur-sm">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Recommended
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Highlight Ring */}
      <AnimatePresence>
        {isHighlighted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Card */}
      <div
        className={`relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border-2 shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${
          isRecommended
            ? "border-blue-200/50 dark:border-blue-700/50 shadow-blue-100/50 dark:shadow-blue-900/20"
            : "border-white/20 dark:border-gray-700/20 hover:border-blue-200/30 dark:hover:border-blue-700/30"
        } ${isHighlighted ? "ring-2 ring-blue-500/50 dark:ring-blue-400/50" : ""}`}
      >
        {/* Background Gradient for Recommended Plan */}
        {isRecommended && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-xl sm:rounded-2xl" />
        )}

        <div className="relative z-10">
          {/* Plan Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-100/80 to-purple-100/80 dark:from-blue-900/50 dark:to-purple-900/50 backdrop-blur-sm rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-200/30 dark:border-blue-700/30">
              <tier.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
              {tier.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              {tier.description}
            </p>

            {/* Price Display - STABLE */}
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mr-1">$</span>
              <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white">
                {displayPrice}
              </span>
              <span className="text-base sm:text-lg text-gray-600 dark:text-gray-300 ml-2">
                /{billingPeriod === "monthly" ? "mo" : "yr"}
              </span>
            </div>

            {/* Team Size Info */}
            {tier.id !== "free" && (
              <motion.p
                key={teamSize}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                className="text-xs sm:text-sm text-gray-500 dark:text-gray-400"
              >
                For {teamSize} team {teamSize === 1 ? "member" : "members"}
              </motion.p>
            )}

            {tier.maxUsers && teamSize > tier.maxUsers && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-orange-600 dark:text-orange-400 mt-1"
              >
                Limited to {tier.maxUsers} members
              </motion.p>
            )}
          </div>

          {/* Features List */}
          <div className="mb-6 sm:mb-8">
            <ul className="space-y-3 sm:space-y-4">
              {tier.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: featureIndex * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-100/80 dark:bg-green-900/50 backdrop-blur-sm rounded-full flex items-center justify-center mt-0.5 mr-3 border border-green-200/30 dark:border-green-700/30">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <motion.button
            className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base min-h-[48px] sm:min-h-[56px] ${
              tier.popular || isRecommended
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                : "bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border-2 border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-200 hover:border-blue-300/50 dark:hover:border-blue-600/50 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/40 dark:hover:bg-gray-800/40"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {tier.id === "free" ? "Get Started Free" : tier.id === "enterprise" ? "Contact Sales" : "Start Free Trial"}
          </motion.button>

          {/* Additional Info */}
          <div className="text-center mt-3 sm:mt-4">
            {tier.id === "free" && (
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">No credit card required</p>
            )}
            {tier.id === "pro" && (
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">14-day free trial included</p>
            )}
            {tier.id === "enterprise" && (
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Custom pricing available</p>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/5 to-purple-400/5 dark:from-blue-400/3 dark:to-purple-400/3 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 dark:from-cyan-400/3 dark:to-blue-400/3 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}
