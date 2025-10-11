'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Calendar, User, Code, Target } from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  projectOverview: string
  myRole: string[]
  technologies: string[]
  outcome: string
  projectLink?: string
}

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
  caseStudy: CaseStudy | null
}

const CaseStudyModal = ({ isOpen, onClose, caseStudy }: CaseStudyModalProps) => {
  if (!caseStudy) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900">{caseStudy.title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6 text-neutral-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-8">
                {/* Project Overview */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-600 mb-3">
                    <Target className="h-5 w-5" />
                    Project Overview
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">{caseStudy.projectOverview}</p>
                </div>

                {/* My Role */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-600 mb-3">
                    <User className="h-5 w-5" />
                    My Role
                  </h3>
                  <ul className="space-y-2">
                    {caseStudy.myRole.map((role, index) => (
                      <li key={index} className="flex items-start gap-2 text-neutral-700">
                        <span className="text-secondary-500 mt-1">•</span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-600 mb-3">
                    <Code className="h-5 w-5" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full border border-primary-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-600 mb-3">
                    <Calendar className="h-5 w-5" />
                    Outcome
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">{caseStudy.outcome}</p>
                </div>

                {/* Project Link */}
                {caseStudy.projectLink && (
                  <div className="pt-4 border-t border-neutral-200">
                    <a
                      href={caseStudy.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CaseStudyModal
