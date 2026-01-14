import type { SuccessResponseData } from '../../types/apis/response';
import { privateAxiosInstance } from '../client/privateAxiosInstance';

export interface ExchangeRatesResponse {
  rate: number;
  currency: 'JPY' | 'USD';
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
