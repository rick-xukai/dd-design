import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { CookieKeys } from '@/constants/keys';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    try {
      const info = Cookies.get(CookieKeys.userInfo);
      setUserInfo(info ? JSON.parse(info) : null);
    } catch (error) {
      console.error('Failed to parse user info:', error);
      setUserInfo(null);
    }
  }, []);

  return userInfo;
};

export default useUserInfo;
