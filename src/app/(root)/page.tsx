'use client'

import { useEffect } from 'react';
import { routing } from '@/i18n/routing';

export default function RootPage() {
  useEffect(() => {
    window.location.href = `/${routing.defaultLocale}`;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
} 