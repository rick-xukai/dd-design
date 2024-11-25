'use client';
import React from 'react';
import { FrownOutlined } from '@ant-design/icons';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-themePrimary text-center">
        <div className="text-[60px]">
          <FrownOutlined />
        </div>
        <div className="mt-6 text-2xl">糟糕! 页面出错了</div>
      </div>
    </div>
  );
};

export default Error;
