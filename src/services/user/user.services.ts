import { RequestClientClass } from '@/utils/requestClient';
import API from '@/constants/apiConstants';

const requestClient = () =>
  new RequestClientClass(process.env.NEXT_PUBLIC_LOCAL_API_SERVER);

const userLogin = async (payload: { email: string; password: string }) => {
  const uri = API.userLogin;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(payload)
    .doPost();
  return response;
};

export default { userLogin };
