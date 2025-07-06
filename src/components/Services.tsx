'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Cpu,
  Medal, 
  HousePlus,
  FileCode2,
  Globe,
  Shield
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const Services = () => {
  const t = useTranslations('Services')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: Globe,
      title: t('services.connectivity.title'),
      description: t('services.connectivity.description'),
      tags: ["Connectivity", "Networking"]
    },
    {
      icon: HousePlus,
      title: t('services.asSetup.title'),
      description: t('services.asSetup.description'),
      tags: ["Connectivity", "Networking"]
    },
    {
      icon: Shield,
      title: t('services.cybersecurity.title'),
      description: t('services.cybersecurity.description'),
      tags: ["Cybersecurity", "Vulnerability Assessment", "Penetration Testing"]
    },
    {
      icon: Cpu,
      title: t('services.compute.title'),
      description: t('services.compute.description'),
      tags: ["Compute", "GPU", "HPC", "Cloud"]
    },
    {
      icon: FileCode2,
      title: t('services.development.title'),
      description: t('services.development.description'),
      tags: ["Development", "Open Source"]
    },
    {
      icon: Medal,
      title: t('services.competition.title'),
      description: t('services.competition.description'),
      tags: ["Competition", "Hardware Rental"]
    }    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Service Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Card Visual */}
              <div className={`relative h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <service.icon className="w-16 h-16 text-white z-10" />
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services 