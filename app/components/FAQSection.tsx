"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const faqItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
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

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer:
      "Our AI uses advanced natural language processing and machine learning algorithms trained on millions of high-performing marketing materials. Simply input your brand guidelines, target audience, and campaign goals, and our AI will generate compelling content that matches your brand voice. The AI learns from your feedback and continuously improves its output quality over time.",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer:
      "ADmyBRAND integrates seamlessly with over 50+ popular marketing platforms including HubSpot, Salesforce, Mailchimp, Facebook Ads, Google Ads, Hootsuite, and more. Our API also allows for custom integrations. Most integrations can be set up in just a few clicks, and our support team is available to help with any custom requirements.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support across all plans. Free users get access to our knowledge base and community forum. Pro users receive priority email and chat support with response times under 4 hours. Enterprise customers get dedicated account managers, phone support, custom training sessions, and 24/7 priority assistance for critical issues.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Security and privacy are our top priorities. We use enterprise-grade encryption (AES-256) for data at rest and in transit. Our infrastructure is SOC 2 Type II certified and GDPR compliant. We never share your data with third parties, and you maintain full ownership of all content created. Enterprise customers can also opt for dedicated cloud instances and custom security configurations.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.section
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] -z-10" />
      <div className="absolute top-0 right-1/4 -translate-y-1/2">
        <div className="w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Got questions?
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              We've got answers
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can't find what you're looking for? Contact our
            support team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div className="space-y-4" variants={containerVariants}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={faqItemVariants}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 rounded-2xl transition-colors duration-200 group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-600" />
                    )}
                  </motion.div>
                </div>
              </button>

              {/* Answer Content */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="text-gray-600 leading-relaxed text-base md:text-lg border-t border-gray-100 pt-6"
                      >
                        {faq.answer}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Our support team is here to help. Get in touch and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Contact Support
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
