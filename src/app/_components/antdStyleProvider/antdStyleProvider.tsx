'use client';
import React from 'react';
import { StyleProvider } from '@ant-design/cssinjs';

const AntdStyleProvider = ({ children }: { children: React.ReactNode }) => (
  <StyleProvider layer>{children}</StyleProvider>
);

export default AntdStyleProvider;
