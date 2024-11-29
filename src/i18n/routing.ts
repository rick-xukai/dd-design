import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // 所有可用语言
  locales: ['en', 'zh'],

  // 默认语言
  defaultLocale: 'zh',
});

// 路由包装
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
