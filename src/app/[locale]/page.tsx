import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import UserProfile from './auth/components/UseProfile';
import UserProfileServer from './auth/components/UserProfileServer';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Welcome to the App</h1>
      <ThemeToggle />
      <LanguageToggle />
      <h1 className="text-red-400">{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <UserProfile />
      <UserProfileServer />
    </div>
  );
}
