'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import CaseStudyModal from './CaseStudyModal'

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const caseStudies = {
    '2': {
      id: '2',
      title: 'The Social Bot – AI-Powered Social Media Platform',
      projectOverview: 'The Social Bot is a mobile-friendly web platform that enables users to manage social media content efficiently, including automated posting, scheduling, and analytics, with role-based access for admins and users.',
      myRole: [
        'Developing the responsive web interface using React 19 and TypeScript, optimized for both desktop and mobile devices.',
        'Building and maintaining backend APIs with Node.js/NestJS and PostgreSQL, handling user authentication, scheduling, and data management.',
        'Implementing role-based access: Admin dashboard for user management, analytics overview, and system controls; User interface for managing social media accounts, scheduling posts, and viewing engagement analytics.',
        'Integrating social media APIs: Facebook Graph API, LinkedIn API, Twitter API, and Instagram API for automated content posting and analytics.',
        'Deploying the platform on AWS, ensuring secure authentication (JWT/HTTPS), performance, and CI/CD workflows.'
      ],
      technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'JWT', 'Facebook Graph API', 'LinkedIn API', 'Twitter API', 'Instagram API'],
      outcome: 'The platform enabled users to manage multiple social media accounts from a single interface, while admins monitored activity and maintained control, improving scheduling efficiency, user engagement, and workflow automation.',
      projectLink: 'https://app.thesocialbot.ai/'
    },
    '4': {
      id: '4',
      title: 'CareerFrame – AI-Powered Career Guidance Platform',
      projectOverview: 'CareerFrame is an AI-driven platform designed to provide personalized career guidance, helping individuals navigate their professional paths effectively.',
      myRole: [
        'Frontend Development: Utilizing React 19 and TypeScript to create a responsive and user-friendly interface.',
        'Deployment: Deploying the platform on AWS, ensuring scalability and reliability.',
        'Security: Implementing secure authentication mechanisms and ensuring data protection.'
      ],
      technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'JWT'],
      outcome: 'The platform successfully provided users with tailored career advice, enhancing their job search and career development processes.',
      projectLink: 'https://www.careerframe.co.uk/'
    },
    '6': {
      id: '6',
      title: 'Hypr – Multi-Company E-commerce & Delivery Management Platform',
      projectOverview: 'Hypr is an internal platform designed to manage operations for multiple companies, including products, orders, categories, and user roles. It features web dashboards for admins, supervisors, store managers, and company owners, as well as mobile apps for delivery personnel and managers. The platform supports role-based portals, online payments, real-time updates, push notifications, and reporting dashboards.',
      myRole: [
        'Web Development (React 19 + TypeScript): Developed responsive dashboards, role-based portals, order management flows, reporting dashboards, and analytics for multiple user roles.',
        'Mobile Development (React Native): Built cross-platform mobile apps for store managers, supervisors, and delivery personnel, with real-time updates, push notifications, geolocation tracking, and payment interfaces.',
        'Backend & APIs (Node.js/Express JS + PostgreSQL): Designed and implemented RESTful APIs for authentication, role-based access, orders, products, categories, payments, notifications, and delivery workflows.',
        'Online Payments: Integrated secure payment gateways for multi-company order processing.',
        'Notifications: Implemented push notifications for updates, delivery status, and alerts.',
        'Role-Based Access Control: Company Owner (full control), Supervisor (team management), Store Manager (inventory), Delivery Personnel (pickups), Admin (system management).',
        'Deployment & DevOps: Deployed on AWS using Docker containers and CI/CD pipelines, with secure authentication (JWT/OAuth2) and monitoring.',
        'Collaboration & QA: Followed Agile sprints, participated in code reviews, and conducted unit, integration, and regression testing.'
      ],
      technologies: ['React 19', 'React Native', 'TypeScript', 'Node.js', 'Express JS', 'PostgreSQL', 'AWS', 'Docker', 'JWT', 'Google Maps API', 'Firebase/OneSignal Push Notifications'],
      outcome: 'Hypr successfully streamlined multi-company e-commerce and delivery operations, improving efficiency, accountability, and customer satisfaction. The platform\'s role-based dashboards, mobile apps, push notifications, and payment integration enabled smooth real-time management, making it scalable and ready for future expansion.'
    }
  }

  const handleCaseStudyClick = (projectId: string) => {
    const caseStudy = caseStudies[projectId as keyof typeof caseStudies]
    if (caseStudy) {
      setSelectedCaseStudy(caseStudy)
      setIsModalOpen(true)
    }
  }

  const projects = [
    {
      id: '1',
      title: 'Car Documents Management Platform',
      description: 'A comprehensive platform for managing and printing car documents with automated workflows, real-time updates, and document tracking system.',
      technologies: ['Node.js', 'React.js', 'PostgreSQL', 'Prisma', 'AWS'],
      image: '/images/car.jpeg',
      liveUrl: null,
      githubUrl: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'SocialBot - Social Media Automation',
      description: 'An intelligent social media automation platform that helps businesses manage their social presence efficiently with AI-powered content scheduling.',
      technologies: ['Node.js', 'React.js', 'MongoDB', 'AWS Lambda', 'AI/ML'],
      image: '/images/SocialBot.png',
      liveUrl: 'https://app.thesocialbot.ai/',
      githubUrl: '#',
      featured: true,
    },
    {
      id: '3',
      title: 'ILM - Educational Platform',
      description: 'A comprehensive UK-based school search platform built with Next.js, featuring location-based discovery, advanced filtering, and parent reviews.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Vercel'],
      image: '/images/RightSchool.png',
      liveUrl: 'https://www.rightschool.io/',
      githubUrl: '#',
      featured: true,
    },
    {
      id: '4',
      title: 'CareerFrame - Career Discovery Platform',
      description: 'A career discovery platform helping users find their ideal career path through intelligent matching algorithms and industry insights.',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'AWS', 'Machine Learning'],
      image: '/images/careerFrame.png',
      liveUrl: 'https://www.careerframe.co.uk/',
      githubUrl: '#',
      featured: false,
    },
    {
      id: '5',
      title: 'XSTAK/Shopdev - E-commerce Integration',
      description: 'Scalable BigCommerce service with event-driven architecture using Amazon EventBridge and RabbitMQ for high-performance e-commerce solutions.',
      technologies: ['Node.js', 'MongoDB', 'Amazon EventBridge', 'RabbitMQ', 'AWS'],
      image: '/images/ecommerce-integraion.webp',
      liveUrl: null,
      githubUrl: '#',
      featured: false,
    },
    {
      id: '6',
      title: 'HYPR - Enterprise E-commerce Platform',
      description: 'Modern B2B/B2C e-commerce platform with microservices architecture, payment integrations, and comprehensive performance monitoring.',
      technologies: ['Node.js', 'React.js', 'MySQL', 'Microservices', 'Docker'],
      image: '/images/HYPR.jpeg',
      liveUrl: null,
      githubUrl: '#',
      featured: false,
    },
  ]

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-max-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our successful projects that showcase our expertise in delivering innovative software solutions across various industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-neutral-200 hover:border-primary-200"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full border border-primary-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  <button 
                    onClick={() => handleCaseStudyClick(project.id)}
                    className="flex items-center gap-2 text-neutral-600 hover:text-neutral-700 text-sm font-medium transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        caseStudy={selectedCaseStudy}
      />
    </section>
  )
}

export default Portfolio