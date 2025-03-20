import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { FloatButton } from 'antd';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import Navigation from '@/app/_components/navigation';
import AntdStyleProvider from '@/app/_components/antdStyleProvider';
import '@/styles/globals.css';
import StyledComponentsRegistry from '@/lib/styledRegistry';
import { Images } from '@/theme/images';

export const metadata: Metadata = {
  title: '点点设计 - 让创意点点涌现',
  description:
    '点点设计-创作随心所欲的AI绘图工具。其算法强大,绘画风格多种多样,简单易用,功能强大。涵盖从文字到图像的自由转换,一键即可启程,开始您的AI创作之旅。',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale?: string };
}>) {
  const { locale } = await params;

  const setThemeScript = `
    (function() {
      const theme = localStorage.getItem('theme') || 'dark';
      document.documentElement.classList.add(theme);
    })();
  `;

  let messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* 防止样式闪烁  */}
          <AntdRegistry>
            <StyledComponentsRegistry>
              <div className="flex overflow-x-auto">
                {/* 降低Antd css层级 */}
                <AntdStyleProvider>
                  <Navigation />
                  <div className="lg:w-[calc(100%-240px)] w-[calc(100%-85px)] layout-content">
                    {children}
                    <FloatButton
                      icon={<img src={Images.FloatButtonIcon.src} alt="" />}
                    />
                  </div>
                </AntdStyleProvider>
              </div>
            </StyledComponentsRegistry>
          </AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
