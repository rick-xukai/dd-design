import { LocalStorageKeys } from '@/constants/keys';
import { ThemeType } from '@/types/global';

/**
 * 切换主题函数
 * 注意：此函数直接操作DOM和localStorage，因此应在客户端环境中使用
 */
export const handleSetTheme = () => {
  if (document && document.documentElement) {
    const currentTheme = localStorage.getItem(LocalStorageKeys.theme);

    if (currentTheme === ThemeType.light) {
      localStorage.setItem(LocalStorageKeys.theme, ThemeType.dark);
      document.documentElement.classList.remove(ThemeType.light);
      document.documentElement.classList.add(ThemeType.dark);
    }

    if (currentTheme === ThemeType.dark || !currentTheme) {
      localStorage.setItem(LocalStorageKeys.theme, ThemeType.light);
      document.documentElement.classList.remove(ThemeType.dark);
      document.documentElement.classList.add(ThemeType.light);
    }
  }
};
