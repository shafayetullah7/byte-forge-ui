import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ThemeToggle from './components/ThemeToggle';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold">Welcome to the App</h1>
            <ThemeToggle />
            <h1 className='text-red-400'>{t('title')}</h1>
            <Link href="/about">{t('about')}</Link>
        </div>
    );
}
