import type { SuccessResponseData } from '../../types/apis/response';
import { privateAxiosInstance } from '../client/privateAxiosInstance';

interface RequestGetMyWalletsResponse {
  totalKrwBalance: number;
  wallets: {
    walletId: number;
    balance: number;
    currency: 'KRW' | 'USD' | 'JPY';
  }[];
}

export const requestGetMyWallets = async (): Promise<
  SuccessResponseData<RequestGetMyWalletsResponse>
> => {
  const res = await privateAxiosInstance.get('/wallets');

  return res.data;
};
