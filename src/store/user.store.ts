import { create } from 'zustand';

import { verificationApi } from '@/utils/func';
import userServices from '@/services/user';

interface UserStore {
  loading: boolean;
  error: string | null;
  userLoginAction: (payload: {
    email: string;
    password: string;
  }) => Promise<void>;
}

const useUserStore = create<UserStore>((set) => ({
  loading: false,
  error: null,

  userLoginAction: async (payload) => {
    set({ loading: true, error: null });
    try {
      const response = await userServices.userLogin(payload);
      const { data, message } = response;
      if (verificationApi(response)) {
        set({
          loading: false,
        });
        return data;
      } else {
        set({ loading: false, error: message });
      }
    } catch (err: any) {
      set({ error: err.response, loading: false });
    }
  },
}));

export default useUserStore;
