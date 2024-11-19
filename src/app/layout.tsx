import type { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import Navigation from '@/app/_components/navigation';
import '@/styles/globals.css';
import StyledComponentsRegistry from '@/lib/styledRegistry';

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
        <Theme className="dark">
          <AntdRegistry>
            <StyledComponentsRegistry>
              <div className="flex">
                <div>
                  <Navigation />
                </div>
                <div className="lg:w-[calc(100%-240px)] w-[calc(100%-140px)]">
                  {children}
                </div>
              </div>
            </StyledComponentsRegistry>
          </AntdRegistry>
        </Theme>
      </body>
    </html>
  );
}
