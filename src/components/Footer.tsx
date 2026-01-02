'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="teal-bg text-white">
      <div className="container-max-width section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-secondary-400 mb-4">
              MyraTech
            </h3>
            <p className="text-neutral-300 mb-6 max-w-md">
              Leading software services and solutions company specializing in building scalable, 
              secure, and user-friendly applications. We transform ideas into powerful digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/myratech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-secondary-400 transition-colors duration-200 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/myratech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-secondary-400 transition-colors duration-200 hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/myratech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-secondary-400 transition-colors duration-200 hover:scale-110"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#skills" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary-400" />
                <span className="text-neutral-300 text-sm">laibaqaiser89@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary-400" />
                <span className="text-neutral-300 text-sm">+971 56 779 0733</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary-400" />
                <span className="text-neutral-300 text-sm">Abu Dhabi, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-neutral-800 mt-12 pt-8 text-center"
        >
          <p className="text-neutral-400 text-sm">
            © 2025 MyraTech Software Services & Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer