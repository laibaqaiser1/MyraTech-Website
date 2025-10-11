'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding teal-bg text-white">
      <div className="container-max-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About MyraTech
          </h2>
          
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg text-neutral-200 leading-relaxed mb-8">
            MyraTech is a leading software services and solutions company based in Abu Dhabi, UAE. 
            With over 4 years of experience in the industry, we specialize in delivering cutting-edge 
            software solutions that drive business growth and digital transformation. Our team of expert 
            developers combines technical expertise with business acumen to create scalable, secure, 
            and user-friendly applications.
          </p>
          
          <p className="text-lg text-neutral-200 leading-relaxed mb-8">
            We pride ourselves on understanding our clients' unique challenges and delivering 
            customized solutions that exceed expectations. From small website fixes to large-scale 
            enterprise applications, MyraTech is your trusted partner in digital innovation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-secondary-400 mb-2">50+</div>
              <div className="text-neutral-200">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-secondary-400 mb-2">100%</div>
              <div className="text-neutral-200">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-secondary-400 mb-2">24/7</div>
              <div className="text-neutral-200">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About