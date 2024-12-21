import React from 'react';
import { FrownOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';

const PageNotFound = () => {
  const t = useTranslations();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-themePrimary text-center">
        <div className="text-[60px]">
          <FrownOutlined />
        </div>
        <div className="mt-6 text-2xl">{t('pageNotFound')}</div>
      </div>
    </div>
  );
};
export default PageNotFound;
