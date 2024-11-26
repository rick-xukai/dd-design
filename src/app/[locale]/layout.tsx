import '@/styles/globals.css';

export default async function LocaleRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
