'use client';

import { useState } from 'react';
import { TrendingUp, DollarSign, Heart } from 'lucide-react';

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

export default function ProjectTracker() {
  const [projects] = useState<Project[]>([
    {
      id: '1',
      name: 'STUIX 學生聯合交換中心',
      monthlyGoal: 110000,
      currentAmount: 90000,
      description: '台灣首個社群型網路交換中心，致力於降低網路技術學習門檻，提供年輕世代參與網路運營的機會。透過建立 IXP，不僅降低整體網路延遲，更增加台灣網路互連機會與網路韌性，同時提供自動化 IRR 過濾與 RPKI 驗證等安全機制。',
      startDate: '2021-01',
      sponsorUrl: 'https://sponsor.twds.com.tw/stuix',
      projectUrl: 'https://stuix.io',
    },
    {
      id: '2',
      name: 'Open Source Mirror 開源軟體鏡像站',
      monthlyGoal: 41250,
      currentAmount: 13200,
      description: '提供穩定、快速的開源軟體鏡像服務，支援台灣地區的開發者與使用者。提供 Linux 發行版、程式語言套件庫、容器映像等資源，確保開源社群能夠順暢地存取所需資源。同時此專案目前也是 Fedora Tier 1 鏡像站（亞太區唯二之一）與 Ubuntu 預設台灣鏡像站。',
      startDate: '2024-03',
      sponsorUrl: 'https://sponsor.twds.com.tw/mirror',
      projectUrl: 'https://mirror.twds.com.tw',
    },
    {
      id: '3',
      name: 'Content Cache 內容快取服務',
      monthlyGoal: 40000,
      currentAmount: 0,
      description: '提供 Steam 遊戲與 Apple 內容快取服務，也是台灣首度引進 Steam 快取服務的公司，為其他電信商提供遊戲相關內容的快取。Steam 快取可以大幅提升一般使用者的遊戲更新與下載速度；Apple 快取則能加速 iOS、macOS 應用程式與系統更新。',
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

  return (
    <div className="w-full">
      <div className="grid gap-6">
        {projects.map((project) => {
          const progress = (project.currentAmount / project.monthlyGoal) * 100;
          const progressColor = getProgressColor(project.currentAmount, project.monthlyGoal);
          
          return (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <div className="flex items-center gap-2">
                  <DollarSign className="text-green-500" />
                  <span className="text-sm font-medium">
                    {formatCurrency(project.currentAmount)} / {formatCurrency(project.monthlyGoal)}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>每月資金/需求</span>
                  <span>{progress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${progressColor}`}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">開始日期: {project.startDate}</span>
                <div className="flex gap-2">
                  {project.projectUrl && (
                    <button
                      className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                      onClick={() => window.open(project.projectUrl, '_blank')}
                    >
                      <span>專案網站</span>
                    </button>
                  )}
                  <button
                    className="flex items-center gap-1 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                    onClick={() => window.open(project.sponsorUrl, '_blank')}
                  >
                    <Heart className="w-4 h-4" />
                    <span>贊助專案</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 