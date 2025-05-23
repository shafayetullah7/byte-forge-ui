'use client';

import { ChildrenProp } from '@/types/children.prop.type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AuthLayout = ({ children }: ChildrenProp) => {
  const pathname = usePathname();

  const pathPrefix = '/auth/';

  // const navLinks = [
  //   { label: 'Login', href: 'login' },
  //   { label: 'Register', href: 'register' },
  // ];
  const navLinks = [
    { label: 'প্রবেশ', href: 'login' },
    { label: 'নিবন্ধন', href: 'register' },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center py-2">
      <div className="w-full max-h-full scroll-auto max-w-lg border border-[var(--primary)] rounded-xl overflow-hidden">
        <nav className="flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`w-full block text-center py-2 ${pathname === pathPrefix + href ? ' bg-[var(--primary)] text-white' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
