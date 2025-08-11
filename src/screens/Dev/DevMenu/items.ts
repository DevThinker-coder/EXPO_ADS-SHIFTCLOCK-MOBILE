import { SCREENS } from 'constants/screen-names';
import type { DevNavigatorParamList } from 'navigation/types';

export interface DevMenuItem {
  label: string;
  params?: { [key: string]: unknown };
  name: keyof DevNavigatorParamList;
}

export const items: Array<DevMenuItem> = [
  {
    label: 'Story book',
    name: SCREENS.DEV_STORY_BOOK,
  },
];
