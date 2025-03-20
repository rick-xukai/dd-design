'use client';
import { CookiesProvider } from 'react-cookie';
export default async function LoginRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
