'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML5/CSS3', level: 98 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'Express.js', level: 95 },
        { name: 'REST APIs', level: 98 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', level: 95 },
        { name: 'MongoDB', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Prisma', level: 90 },
        { name: 'AWS RDS', level: 85 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 90 },
        { name: 'GitHub Actions', level: 95 },
        { name: 'Vercel', level: 95 },
        { name: 'RabbitMQ', level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-max-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
            Our Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our team's technical expertise spans across multiple domains, enabling us to deliver comprehensive end-to-end solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-secondary-200"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-neutral-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-neutral-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        className="bg-gradient-to-r from-primary-600 to-primary-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills