import { LocalStorageKeys } from '@/constants/keys';
import { ThemeType } from '@/types/global';

/**
 * 验证API是否成功
 */
export const verificationApi = (response: any) =>
  response.status === 200 && response.message === 'SUCCESS';

/**
 * 切换主题函数
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
