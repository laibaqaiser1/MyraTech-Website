'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Download, Users, Award, Clock, CheckCircle } from 'lucide-react'

const Resume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleDownload = () => {
    // In a real application, this would download the actual company brochure
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'MyraTech-Company-Brochure.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const capabilities = [
    'Custom Web Application Development',
    'Mobile App Development (iOS & Android)',
    'Cloud Infrastructure & DevOps',
    'Database Design & Optimization',
    'API Development & Integration',
    'Business Process Automation',
    'Cybersecurity Solutions',
    'Digital Transformation Consulting',
    '24/7 Technical Support',
    'Agile Development Methodology'
  ]

  return (
    <section id="resume" className="section-padding bg-white">
      <div className="container-max-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
            Company Capabilities
          </h2>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-8 rounded-full"></div>
          
          <div className="bg-primary-50 rounded-lg p-8 md:p-12 border border-primary-200">
            <div className="mb-8">
              <FileText className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Download Our Company Brochure
              </h3>
              <p className="text-neutral-600 mb-8">
                Get a comprehensive overview of our services, capabilities, and success stories in a professional format.
              </p>
            </div>
            
            <button
              onClick={handleDownload}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
            >
              <Download className="h-5 w-5" />
              Download Company Brochure (PDF)
            </button>
            
            <div className="mt-8 text-sm text-neutral-500">
              <p>Last updated: January 2025</p>
            </div>
          </div>

          {/* Company Capabilities Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-8">
              What We Offer
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md border border-neutral-200 hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Company Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg border border-primary-200"
            >
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-neutral-600">Projects Delivered</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg border border-primary-200"
            >
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-neutral-600">Client Satisfaction</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg border border-primary-200"
            >
              <Clock className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-neutral-600">Support Available</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume