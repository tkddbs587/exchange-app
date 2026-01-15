import type { SuccessResponseData } from '@/types/apis/response';
import type { AllCurrency } from '@/types/exchange/currency';
import { privateAxiosInstance } from '../client/privateAxiosInstance';

export interface RequestPostOrderExchangeParams {
  exchangeRateId: number;
  fromCurrency: AllCurrency;
  toCurrency: AllCurrency;
  forexAmount: number;
}

export const requestPostOrderExchange = async (
  params: RequestPostOrderExchangeParams,
): Promise<SuccessResponseData<string>> => {
  const res = await privateAxiosInstance.post('/orders', params);

  return res.data;
};
