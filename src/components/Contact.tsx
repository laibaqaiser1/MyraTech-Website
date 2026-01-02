'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, Users, Award } from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  company: string
  message: string
}

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Send email using API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || '',
          message: data.message,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error(result.error || 'Failed to send email')
      }
    } catch (error: any) {
      console.error('Email sending failed:', error)
      setSubmitError(
        error.message || 'Failed to send message. Please try again or contact us directly.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how MyraTech can help bring your ideas to life with our expert software solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-neutral-900">Email</h4>
                    <p className="text-neutral-600">laibaqaiser89@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-neutral-900">Phone</h4>
                    <p className="text-neutral-600">+971 56 779 0733</p>
                    <p className="text-neutral-600">+971 2 XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-neutral-900">Location</h4>
                    <p className="text-neutral-600">Abu Dhabi, UAE</p>
                    <p className="text-neutral-600">United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-600" />
                Available for Projects
              </h4>
              <p className="text-neutral-600 text-sm mb-4">
                We're currently accepting new projects and would love to hear about your ideas. 
                Whether it's a small website fix or a large-scale enterprise application, our team is ready to help.
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  <span>Expert Team</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              Send Us a Message
            </h3>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
                role="alert"
              >
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Your message has been sent. We'll get back to you soon!</span>
              </motion.div>
            )}

            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
                role="alert"
              >
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {submitError}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  {...register('company')}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact