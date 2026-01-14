import type { SuccessResponseData } from '../../types/apis/response';
import { publicAxiosInstance } from '../client/publicAxiosInstance';

interface SignInResponseData {
  memberId: number;
  token: string;
}

export const requestSignIn = async (
  email: string,
): Promise<SuccessResponseData<SignInResponseData>> => {
  const res = await publicAxiosInstance.post('/auth/login', undefined, {
    params: { email },
  });

  return res.data;
};
