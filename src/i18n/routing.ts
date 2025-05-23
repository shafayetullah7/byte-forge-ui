import { Locale } from '@/enums/locale.enum';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Object.values(Locale),

  // Used when no locale matches
  defaultLocale: Locale.Bengali,
});
