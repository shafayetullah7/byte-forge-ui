// import { Locale } from '@/enums/locale.enum';
import createMiddleware from 'next-intl/middleware';
// import localeConfig from '../../next-intl.config';
import { routing } from '@/i18n/routing';

// const locales = Object.values(Locale);

export default createMiddleware(routing);

export const config = {
  matcher: ['/', `/(en|bn)/:path*`],
};
