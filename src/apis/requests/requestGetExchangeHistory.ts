import type { SuccessResponseData } from '@/types/apis/response';
import type { AllCurrency } from '@/types/exchange/currency';
import { privateAxiosInstance } from '../client/privateAxiosInstance';

interface ExchangeHistoryResponse {
  orderId: number;
  fromCurrency: AllCurrency;
  fromAmount: number;
  toCurrency: AllCurrency;
  toAmount: number;
  appliedRate: number;
  orderedAt: string;
}

export const requestGetExchangeHistory = async (): Promise<
  SuccessResponseData<ExchangeHistoryResponse[]>
> => {
  const res = await privateAxiosInstance.get('/orders');

  return res.data;
};
