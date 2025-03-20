import createMiddleware from 'next-intl/middleware';
import { NextResponse, NextRequest } from 'next/server';

import { routing } from './i18n/routing';
import { CookieKeys, AuthRouterKeys, RouterKeys } from './constants/keys';

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const [, locale] = pathname.split('/');
  const userToken = request.cookies.get(CookieKeys.userToken)?.value;
  // const isAuthPage = request.nextUrl.pathname.startsWith(RouterKeys.login);
  const isProtectedRoute = AuthRouterKeys.some((route) =>
    pathname.startsWith(`/${locale}${route}`)
  );

  // 跳过处理API请求和静态资源
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/_next')
  ) {
    // 直接跳过
    return NextResponse.next();
  }

  // 如果没有匹配的语言，则重定向到最近一次存储到cookie中的语言或者是默认语言
  if (!routing.locales.includes(locale as any)) {
    const defaultPath =
      request.cookies.get('NEXT_LOCALE')?.value || routing.defaultLocale;

    request.nextUrl.pathname = `/${defaultPath}`;

    // 重定向
    return NextResponse.redirect(request.nextUrl);
  }

  // 如果用户没有登录，且当前页面需要登录，则跳转到登录页面
  if (!userToken && isProtectedRoute) {
    const loginUrl = new URL(`/${locale}${RouterKeys.login}`, request.url);

    loginUrl.searchParams.set('returnUrl', pathname);

    return NextResponse.redirect(loginUrl);
  }

  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);
  return response;
}

// 匹配路径
export const config = {
  matcher: ['/', '/:locale/:path*'],
};
