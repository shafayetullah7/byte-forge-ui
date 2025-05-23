import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`../messages/${locale}.json`)).default;

  if (!messages) notFound();

  return messages;
});
