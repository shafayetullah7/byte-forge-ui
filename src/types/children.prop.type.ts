import { Locale } from '@/enums/locale.enum';
import React from 'react';

export type ChildrenProp = {
  children: React.ReactNode;
  params: { locale: Locale };
};
