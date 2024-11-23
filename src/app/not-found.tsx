import React from 'react';
import { FrownOutlined } from '@ant-design/icons';

const PageNotFound = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-themePrimary text-center">
      <div className="text-[60px]">
        <FrownOutlined />
      </div>
      <div className="mt-6 text-2xl">
        Whoops, the page you are looking for was not found.
      </div>
    </div>
  </div>
);

export default PageNotFound;
