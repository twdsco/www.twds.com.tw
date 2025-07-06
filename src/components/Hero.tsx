'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, RefreshCcw } from 'lucide-react'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('Hero')
  const floatingElements = [
    { delay: 0, size: 'w-24 h-24', position: 'top-[20%] left-[10%]' },
    { delay: 2, size: 'w-36 h-36', position: 'top-[60%] right-[15%]' },
    { delay: 4, size: 'w-20 h-20', position: 'top-[80%] left-[20%]' },
    { delay: 1, size: 'w-28 h-28', position: 'top-[30%] right-[30%]' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #419A1C 0%, #2d6a13 100%)' }}>
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} ${element.position} rounded-full bg-white/10`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform translate-y-10 text-center xl:text-left justify-center">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-center">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white xl:justify-start"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block whitespace-pre-line">
                {t('title')}
              </span>
            </h1>
            <div className="text-sm md:text-base lg:text-lg xl:text-2xl mb-8">
              <p className="whitespace-pre-line">
                {t('subtitle')}
              </p>
            </div>
            <motion.button
              className="bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center lg:items-left gap-2 mx-auto xl:mx-0 cursor-pointer"
              whileHover={{ y: -2, scale: 1.05 }}
              onClick={() => scrollToSection('#services')}
              whileTap={{ scale: 0.98 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t('ctaPrimary')}
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Hero Image / Visualization with Data Transfer Animation */}
          <motion.div
            className="hidden xl:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-96 bg-white/10 rounded-2xl p-6 shadow-2xl border border-white/20 backdrop-blur-lg">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="relative top-1/3">
                {/* Logo Position */}
                <div className="absolute left-1/4 transform -translate-x-1/2">
                  <motion.div
                    className="w-32 h-32 bg-brand-primary/50 rounded-full"
                    animate={{ scale: [1.2, 1.5, 1.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <img 
                    src="/logo/twds_circle.svg" 
                    alt="Logo" 
                    width={128} 
                    height={128} 
                    className="absolute top-0 left-0 transform" 
                  />
                </div>

                {/* Syncing Position - Centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="w-32 h-32 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  >
                    <RefreshCcw size={80} className="text-white" />
                  </motion.div>
                </div>

                {/* Globe Position */}
                <div className="absolute right-1/4 transform translate-x-1/2">
                  <motion.div
                    className="w-32 h-32 bg-brand-primary/50 rounded-full flex items-center justify-center"
                    animate={{ scale: [1.2, 1.5, 1.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  />
                  <Globe size={128} className="text-white absolute top-0 left-0 transform" />
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 