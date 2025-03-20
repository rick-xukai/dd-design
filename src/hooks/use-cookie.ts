'use client';
import { useCookies } from 'react-cookie';
import { Cookie, CookieSetOptions } from 'universal-cookie';

export const useCookie = (cookies: Array<string>) => {
  const [cookie, setCookie, removeCookie] = useCookies(cookies);

  const getCookie = (name: string) => cookie[name];

  const setCookies = (
    name: string,
    value: Cookie,
    options?: CookieSetOptions
  ) => {
    setCookie(name, value, options);
  };

  const removeCookies = (name: string, options?: CookieSetOptions) => {
    removeCookie(name, options);
  };

  return {
    getCookie,
    setCookie: setCookies,
    removeCookie: removeCookies,
  };
};
