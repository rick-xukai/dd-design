import type { Metadata } from 'next';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: '点点设计 - 让创意点点涌现',
  description:
    '点点设计-创作随心所欲的AI绘图工具。其算法强大,绘画风格多种多样,简单易用,功能强大。涵盖从文字到图像的自由转换,一键即可启程,开始您的AI创作之旅。',
};

export default async function LocaleRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
