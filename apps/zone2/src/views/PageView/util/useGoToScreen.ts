import { useRouter } from 'next/router';
import { ScreenRoutes } from '../types';

export const useGoToScreen = (route: ScreenRoutes) => {
  const { replace } = useRouter();

  const goToScreen = async () => {
    await replace(route);
  };

  return {
    goToScreen
  }
};
