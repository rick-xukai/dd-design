import { RequestClientClass } from '@/utils/requestClient';
import API from '@/constants/apiConstants';

const requestClient = () =>
  new RequestClientClass(process.env.NEXT_PUBLIC_LOCAL_API_SERVER);

const getWaterfallTestData = async (payload: {
  pageNumber: number;
  pageSize: number;
}) => {
  const uri = API.waterfallTestData;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(payload)
    .doPost();
  return response;
};

export default { getWaterfallTestData };
