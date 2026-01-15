import { useQuery } from '@tanstack/react-query';
import { requestGetExchangeHistory } from '@/apis/requests/requestGetExchangeHistory';
import { exchangeKeys } from './exchangeKeys';

export const useGetExchangeHistory = () =>
  useQuery({
    queryKey: exchangeKeys.history(),
    queryFn: requestGetExchangeHistory,
    staleTime: 1000 * 60 * 60,
  });
