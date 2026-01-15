import type { RequestGetOrderQuoteParams } from '@/apis/requests/requestGetOrderQuote';

export const exchangeKeys = {
  all: ['exchange'] as const,
  rates: () => [...exchangeKeys.all, 'rates'] as const,

  orderQuote: (params: RequestGetOrderQuoteParams) =>
    [...exchangeKeys.all, 'order-quote', ...Object.values(params)] as const,
};
