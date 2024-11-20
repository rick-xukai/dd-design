import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { FloatButton } from 'antd';

import Navigation from '@/app/_components/navigation';
import '@/styles/globals.css';
import StyledComponentsRegistry from '@/lib/styledRegistry';
import { Images } from '@/theme/images';
import { MainContainerWidth } from '@/constants/constants';

export const metadata: Metadata = {
  title: '点点设计 - 一点点改变世界',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <StyledComponentsRegistry>
            <div className="flex">
              <div className="relative">
                <Navigation />
              </div>
              <div className="lg:w-[calc(100%-240px)] w-[calc(100%-85px)]">
                {children}
                <FloatButton
                  icon={<img src={Images.FloatButtonIcon.src} alt="" />}
                />
              </div>
            </div>
          </StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
