'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Wrench, 
  Server, 
  Cloud, 
  Database, 
  Zap
} from 'lucide-react'

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      id: '1',
      title: 'Custom Web Development',
      description: 'Build modern, responsive web applications using React, Next.js, and Node.js with cutting-edge technologies.',
      icon: Code,
    },
    {
      id: '2',
      title: 'Website Maintenance & Updates',
      description: 'Keep your existing websites running smoothly with regular updates, security patches, and performance optimization.',
      icon: Wrench,
    },
    {
      id: '3',
      title: 'API & Backend Development',
      description: 'Robust backend services and RESTful APIs using Node.js, Python, and PostgreSQL for scalable applications.',
      icon: Server,
    },
    {
      id: '4',
      title: 'Cloud & DevOps Solutions',
      description: 'Complete cloud infrastructure setup, CI/CD pipelines, and deployment automation for seamless operations.',
      icon: Cloud,
    },
    {
      id: '5',
      title: 'Database Design & Optimization',
      description: 'Expert database architecture, optimization, and migration services for improved performance and scalability.',
      icon: Database,
    },
    {
      id: '6',
      title: 'Business Process Automation',
      description: 'Streamline your business operations with custom automation solutions and third-party integrations.',
      icon: Zap,
    },
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We provide comprehensive software development services to help your business grow and succeed in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-neutral-200 hover:border-primary-200"
            >
              <div className="text-primary-600 mb-4 p-4 bg-primary-100 rounded-full w-fit">
                <service.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services