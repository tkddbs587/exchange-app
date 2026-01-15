import type { SuccessResponseData } from '@/types/apis/response';
import type { AllCurrency } from '@/types/exchange/currency';
import { privateAxiosInstance } from '../client/privateAxiosInstance';

interface OrderQuoteResponse {
  krwAmount: number;
  appliedRate: number;
}

export interface RequestGetOrderQuoteParams {
  fromCurrency: AllCurrency;
  toCurrency: AllCurrency;
  forexAmount: number;
}

export const requestGetOrderQuote = async (
  params: RequestGetOrderQuoteParams,
): Promise<SuccessResponseData<OrderQuoteResponse>> => {
  const res = await privateAxiosInstance.get('/orders/quote', {
    params,
  });

  return res.data;
};
