import type { DevRoutes } from 'navigation/types';
import { DevMenu, DevStoryBook } from 'screens';
import { SCREENS } from 'constants/screen-names';

const routes: DevRoutes = {
  [SCREENS.DEV_MENU]: {
    component: DevMenu,
  },
  [SCREENS.DEV_STORY_BOOK]: {
    component: DevStoryBook,
  },
};

export default routes;
