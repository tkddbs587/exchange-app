import { useQuery } from '@tanstack/react-query';
import { requestGetExchangeRates } from '../../../requests/requestGetExchangeRates';
import { exchangeKeys } from './exchangeKeys';

export const useGetExchangeRates = () =>
  useQuery({
    queryKey: exchangeKeys.rates(),
    queryFn: requestGetExchangeRates,
    refetchInterval: 60 * 1000,
    refetchOnWindowFocus: true,
    refetchIntervalInBackground: true,
  });
