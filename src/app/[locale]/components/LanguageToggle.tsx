'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Locale } from '@/enums/locale.enum'; // Assuming you have this enum

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLocale = () => {
    const newLocale =
      currentLocale === Locale.Bengali ? Locale.English : Locale.Bengali;
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      className="px-4 py-2 rounded bg-primary text-sm"
    >
      {currentLocale === Locale.Bengali ? 'Switch to English' : 'বাংলায় যান'}
    </button>
  );
}
