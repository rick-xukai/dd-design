import { LocalStorageKeys } from '@/constants/keys';
import { ThemeType } from '@/types/global';

export const handleSetTheme = (isFristRender: boolean) => {
  if (document && document.documentElement) {
    const currentTheme = localStorage.getItem(LocalStorageKeys.theme);
    
    if (currentTheme === ThemeType.light) {
      if (!isFristRender) {
        localStorage.setItem(LocalStorageKeys.theme, ThemeType.dark);
        document.documentElement.classList.remove(ThemeType.light);
      } else {
        document.documentElement.classList.add(ThemeType.light);
      }
    }

    if (currentTheme === ThemeType.dark || !currentTheme) {
      if (!isFristRender) {
        localStorage.setItem(LocalStorageKeys.theme, ThemeType.light);
        document.documentElement.classList.add(ThemeType.light);
      } else {
        document.documentElement.classList.add(ThemeType.dark);
      }
    }
  }
};
