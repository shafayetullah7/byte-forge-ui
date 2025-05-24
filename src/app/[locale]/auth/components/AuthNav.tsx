'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface AuthNavProps {
  locale: string;
}

const AUTH_BASE_PATH = '/auth';

const AuthNav = ({ locale }: AuthNavProps) => {
  const pathname = usePathname();
  const t = useTranslations('user.auth.nav');

  const navItems = [
    { href: 'login', translationKey: 'login' },
    { href: 'register', translationKey: 'register' },
  ];

  const buildPath = (href: string) => `/${locale}${AUTH_BASE_PATH}/${href}`;
  const isActive = (href: string) => pathname === buildPath(href);

  return (
    <nav className="flex">
      {navItems.map(({ translationKey, href }) => {
        const path = buildPath(href);

        return (
          <Link
            key={path}
            href={path}
            className={`w-full block text-center py-2 ${
              isActive(href) ? 'bg-primary text-white' : ''
            }`}
            aria-current={isActive(href) ? 'page' : undefined}
          >
            {t(translationKey)}
          </Link>
        );
      })}
    </nav>
  );
};

export default AuthNav;
