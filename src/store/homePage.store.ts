import { create } from 'zustand';

import { verificationApi } from '@/utils/func';

interface HomePageStore {
  recommendedData: any;
  waterfullListTotal: number | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: string, options: any) => Promise<void>;
}

const useHomePageStore = create<HomePageStore>((set) => ({
  recommendedData: {},
  waterfullListTotal: null,
  loading: false,
  error: null,

  fetchData: async (url, options) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(url, options);
      if (verificationApi(response)) {
        const responseData = await response.json();
        const { data } = responseData;
        set({
          recommendedData: data,
          waterfullListTotal: data.total,
          loading: false,
        });
        return data;
      } else {
        set({ loading: false, error: 'Something went wrong' });
      }
    } catch (err: any) {
      set({ error: err.response, loading: false });
    }
  },
}));

export default useHomePageStore;
