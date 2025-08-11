import type { SupportedLocales } from './types';

export const supportedLocales: SupportedLocales[] = ['en', 'ar'];

export const localesRTL: Record<SupportedLocales, boolean> = {
  en: false,
  ar: true,
};

export const MAX_RETRIES_FETCH_LOCALE = 5;
export const SELECTED_LOCALE_KEY = '@locale/selected';
