'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div className="flex items-center space-x-2 text-sm">
      <button
        onClick={() => onSelectChange('en')}
        className={`font-semibold ${locale === 'en' ? 'text-brand-primary' : 'text-gray-500 hover:text-gray-700'} transition-colors duration-200`}
        disabled={isPending}
      >
        English
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => onSelectChange('zh-tw')}
        className={`font-semibold ${locale === 'zh-tw' ? 'text-brand-primary' : 'text-gray-500 hover:text-gray-700'} transition-colors duration-200`}
        disabled={isPending}
      >
        繁體中文
      </button>
    </div>
  );
} 