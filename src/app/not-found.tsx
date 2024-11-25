import React from 'react';
import { FrownOutlined } from '@ant-design/icons';

const PageNotFound = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-themePrimary text-center">
      <div className="text-[60px]">
        <FrownOutlined />
      </div>
      <div className="mt-6 text-2xl">糟糕! 你要找的页面不存在</div>
    </div>
  </div>
);

export default PageNotFound;
