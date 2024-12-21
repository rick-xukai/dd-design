import { create } from 'zustand';

import { verificationApi } from '@/utils/func';
import homePageServices from '@/services/homePage';

interface HomePageStore {
  recommendedData: any;
  waterfullListTotal: number | null;
  loading: boolean;
  error: string | null;
  getWaterfallTestDataAction: (payload: {
    pageNumber: number;
    pageSize: number;
  }) => Promise<void>;
}

const useHomePageStore = create<HomePageStore>((set) => ({
  recommendedData: {},
  waterfullListTotal: null,
  loading: false,
  error: null,

  getWaterfallTestDataAction: async (payload) => {
    set({ loading: true, error: null });
    try {
      const response = await homePageServices.getWaterfallTestData(payload);
      if (verificationApi(response)) {
        const { data } = response;
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
