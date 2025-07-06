'use client'

import { useTranslations } from 'next-intl'
import { Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const t = useTranslations('Footer')
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href) as HTMLElement
      if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('companyName')}</h3>
            <div className="text-gray-300 mb-6 leading-relaxed">
              {t('companyDesc').split('\n').map((line, index) => (
                <p key={index} className={index > 0 ? 'mt-1' : ''}>
                  {line}
                </p>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/twdsco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Linkedin size={20} className="text-gray-300 hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://github.com/twdsco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Github size={20} className="text-gray-300 hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {t('home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {t('services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {t('about')}
                </button>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('followUs')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/twdsco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t('linkedin')}
              </a>
              <a
                href="https://github.com/twdsco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t('github')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} {t('companyName')} {t('copyright')} | {t('vat')} | <a href={`mailto:${t('contactEmail')}`} className="text-gray-300 hover:text-white transition-colors duration-200">{t('contactEmail')}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 