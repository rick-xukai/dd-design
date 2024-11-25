import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { FloatButton } from 'antd';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 添加内联脚本，在页面加载前设置主题，防止闪烁
  const setThemeScript = `
    (function() {
      const theme = localStorage.getItem('theme') || 'dark';
      document.documentElement.classList.add(theme);
    })();
  `;

  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
      </head>
      <body>
        <AntdRegistry>
          <StyledComponentsRegistry>
            <div className="flex overflow-x-auto">
              <div className="relative lg:w-[240px] w-[85px] min-w-[85px]">
                <Navigation />
              </div>
              <div className="lg:w-[calc(100%-240px)] w-[calc(100%-85px)] content">
                <AntdStyleProvider>
                  {children}
                  <FloatButton
                    icon={<img src={Images.FloatButtonIcon.src} alt="" />}
                  />
                </AntdStyleProvider>
              </div>
            </div>
          </StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
