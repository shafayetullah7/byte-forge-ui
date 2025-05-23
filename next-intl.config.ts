import { Locale } from '@/enums/locale.enum';

const locales = Object.values(Locale);

const localeConfig = {
  locales,
  defaultLocale: Locale.Bengali,
  localeDetection: true,
};

export default localeConfig;
