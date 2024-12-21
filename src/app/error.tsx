'use client';
import React from 'react';
import { FrownOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';

const Error = () => {
  const t = useTranslations();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-themePrimary text-center">
        <div className="text-[60px]">
          <FrownOutlined />
        </div>
        <div className="mt-6 text-2xl">{t('pageError')}</div>
      </div>
    </div>
  );
};

export default Error;
