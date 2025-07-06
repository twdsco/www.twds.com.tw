'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDownUp, Users, TrendingUp, Award } from 'lucide-react'
import { useTranslations } from 'next-intl'

const About = () => {
  const t = useTranslations('About')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: TrendingUp,
      value: "100+",
      label: t('customers'),
      color: "text-brand-primary"
    },
    {
      icon: Users,
      value: "500,000+",
      label: t('users'),
      color: "text-brand-primary"
    },
    {
      icon: ArrowDownUp,
      value: "200+ Gbps",
      label: t('traffic'),
      color: "text-brand-primary"
    },
    {
      icon: Award,
      value: "2,000k+ TWD",
      label: t('sponsors'),
      color: "text-brand-primary"
    }
  ]

  const networkNodes = [
    { x: 20, y: 20, delay: 0 },
    { x: 80, y: 20, delay: 0.5 },
    { x: 50, y: 50, delay: 1 },
    { x: 20, y: 80, delay: 1.5 },
    { x: 80, y: 80, delay: 2 }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center xl:text-left"
            >
              {/* About Text */}
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {t('title')}
              </h2>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
                {t('subtitle')}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-sm mb-4 ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}

export default About 