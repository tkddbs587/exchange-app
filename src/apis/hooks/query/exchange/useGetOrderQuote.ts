import { useQuery } from '@tanstack/react-query';

import {
  requestGetOrderQuote,
  type RequestGetOrderQuoteParams,
} from '@/apis/requests/requestGetOrderQuote';

import { exchangeKeys } from './exchangeKeys';

export const useGetOrderQuote = (params: RequestGetOrderQuoteParams) =>
  useQuery({
    queryKey: exchangeKeys.orderQuote(params),
    queryFn: () => requestGetOrderQuote(params),
    enabled: !!params.forexAmount,
  });
