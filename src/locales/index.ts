import type { SupportedLocales } from 'context/locales/types';

import type { Locales } from './types';
import en from './en';
import ar from './ar';

const translations: Record<SupportedLocales, Locales> = {
  en,
  ar,
};

export default {
  translations,
};
