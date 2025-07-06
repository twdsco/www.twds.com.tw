'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Project {
  id: string;
  name: string;
  monthlyGoal: number;
  currentAmount: number;
  description: string;
  startDate: string;
  sponsorUrl: string;
  projectUrl?: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations('Projects');

  const [projects] = useState<Project[]>([
    {
      id: "stuix",
      name: t('projects.stuix.name'),
      monthlyGoal: 110000,
      currentAmount: 90000,
      description: t('projects.stuix.description'),
      startDate: '2021-01',
      sponsorUrl: 'https://sponsor.twds.com.tw/stuix',
      projectUrl: 'https://stuix.io',
    },
    {
      id: "mirror",
      name: t('projects.mirror.name'),
      monthlyGoal: 41250,
      currentAmount: 23200,
      description: t('projects.mirror.description'),
      startDate: '2024-03',
      sponsorUrl: 'https://sponsor.twds.com.tw/mirror',
      projectUrl: 'https://mirror.twds.com.tw',
    },
    {
      id: "cache",
      name: t('projects.cache.name'),
      monthlyGoal: 40000,
      currentAmount: 20000,
      description: t('projects.cache.description'),
      startDate: '2024-09',
      sponsorUrl: 'https://sponsor.twds.com.tw/cache',
    },
  ]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('zh-TW', {
      style: 'currency',
      currency: 'TWD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getProgressColor = (current: number, goal: number) => {
    const percentage = (current / goal) * 100;
    if (percentage >= 100) return 'bg-green-500';
    if (percentage >= 70) return 'bg-blue-500';
    if (percentage >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
  };

  return (
    <section id="projects" className="py-20 bg-gray-50" style={{ backgroundColor: '#f8fafc' }}>
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

        {/* Projects Grid */}
        <motion.div
          className="grid gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => {
            const progress = (project.currentAmount / project.monthlyGoal) * 100;
            const progressColor = getProgressColor(project.currentAmount, project.monthlyGoal);
            
            return (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl text-gray-900 font-semibold">{project.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 font-medium w-max">
                      {formatCurrency(project.currentAmount)} / {formatCurrency(project.monthlyGoal)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>{t('fundingGoal')}</span>
                    <span>{progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${progressColor}`}
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-evenly md:justify-between text-center md:text-left items-center flex-wrap gap-2">
                  <span className="text-sm w-full md:w-auto 
 text-gray-500">{t('startDate')}: {project.startDate}</span>
                  <div className="flex gap-3">
                    {project.projectUrl && (
                      <button
                        className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                        onClick={() => window.open(project.projectUrl, '_blank')}
                      >
                        <span>{t('projectSite')}</span>
                      </button>
                    )}
                    <button
                      className="flex items-center gap-1 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                      onClick={() => window.open(project.sponsorUrl, '_blank')}
                    >
                      <Heart className="w-4 h-4" />
                      <span>{t('sponsor')}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 