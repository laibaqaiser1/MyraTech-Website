'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Mail, Phone, MapPin, Award, Clock } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="container-max-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto lg:mx-0"
            >
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                    Welcome to{' '}
                    <span className="gradient-text">MyraTech</span>
                  </h1>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                <span className="px-6 py-3 bg-primary-600 text-white text-lg font-semibold rounded-full shadow-lg">
                  Software Services & Solutions
                </span>
                <span className="px-6 py-3 border-2 border-secondary-500 text-secondary-600 text-lg font-semibold rounded-full bg-white">
                  Full Stack Development
                </span>
              </div>
              
              <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Transforming ideas into powerful, scalable software solutions. We deliver cutting-edge technology services to drive your business forward.
              </p>

              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600">4+</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-neutral-600">Support</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>laibaqaiser89@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+971 56 779 0733</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Abu Dhabi, UAE</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started
                </button>
                <a
                  href="#portfolio"
                  className="border-2 border-secondary-500 text-secondary-600 hover:bg-secondary-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 text-lg bg-white hover:shadow-lg transform hover:-translate-y-1"
                >
                  View Our Work
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Company Logo */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Round Logo */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-primary-600 shadow-2xl flex items-center justify-center p-4 overflow-hidden bg-transparent">
                <Image
                  src="/logoMyraTech.png"
                  alt="MyraTech Logo"
                  width={540}
                  height={540}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6 text-neutral-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero