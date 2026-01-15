import type { ExchangeCurrency } from '@/types/exchange/currency';
import type { SuccessResponseData } from '../../types/apis/response';
import { privateAxiosInstance } from '../client/privateAxiosInstance';

export interface ExchangeRatesResponse {
  rate: number;
  currency: ExchangeCurrency;
  changePercentage: number;
  exchangeRateId: number;
  applyDateTime: string;
}

export const requestGetExchangeRates = async (): Promise<
  SuccessResponseData<ExchangeRatesResponse[]>
> => {
  const res = await privateAxiosInstance.get('/exchange-rates/latest');

  return res.data;
};
