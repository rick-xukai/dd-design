'use client';
import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePush = () => {
    router.push(searchParams.get('returnUrl') || '/');
  };

  useEffect(() => {
    console.log(searchParams.get('returnUrl'));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        background: '#fff',
      }}
    >
      0000
      <div onClick={handlePush}>Login</div>
      <Input type="email" placeholder="Email" />
    </div>
  );
};

export default LoginPage;
