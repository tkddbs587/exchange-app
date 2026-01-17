import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetOrderQuote } from '@/apis/hooks/query/exchange/useGetOrderQuote';
import type { ExchangeCurrency } from '@/types/exchange/currency';
import { useOrderExchange } from '@/apis/hooks/query/exchange/useOrderExchange';
import clsx from 'clsx';
import { useQueryClient } from '@tanstack/react-query';
import { exchangeKeys } from '@/apis/hooks/query/exchange/exchangeKeys';
import { requestGetExchangeRates } from '@/apis/requests/requestGetExchangeRates';
import { OrderQuote } from './_components/OrderQuote/OrderQuote';

export interface OrderFormValues {
  amount: number;
}

interface ExchangeOrderFormProps {
  isBuying: boolean;
  selectedCurrency: ExchangeCurrency;
  rate: number;
}

export function ExchangeOrderForm({
  isBuying,
  selectedCurrency,
  rate,
}: ExchangeOrderFormProps) {
  const queryClient = useQueryClient();

  const [debouncedAmount, setDebouncedAmount] = useState(0);

  const { register, watch, handleSubmit } = useForm<OrderFormValues>({
    defaultValues: {
      amount: 0,
    },
    mode: 'onChange',
  });

  const amount = watch('amount');

  const { mutateAsync: orderExchange } = useOrderExchange();

  const { data: orderQuote, isFetching: isLoadingOrderQuote } =
    useGetOrderQuote({
      fromCurrency: isBuying ? 'KRW' : selectedCurrency,
      toCurrency: isBuying ? selectedCurrency : 'KRW',
      forexAmount: debouncedAmount,
    });

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedAmount(amount);
    }, 500);

    return () => clearTimeout(id);
  }, [amount]);

  const onSubmit = async (data: OrderFormValues) => {
    const latest = await queryClient.fetchQuery({
      queryKey: exchangeKeys.rates(),
      queryFn: requestGetExchangeRates,
    });

    const latestRateId = latest.data.find(
      (r) => r.currency === selectedCurrency,
    )?.exchangeRateId;

    if (!latestRateId) return;

    await orderExchange({
      exchangeRateId: latestRateId,
      fromCurrency: isBuying ? 'KRW' : selectedCurrency,
      toCurrency: isBuying ? selectedCurrency : 'KRW',
      forexAmount: data.amount,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <OrderQuote
        isBuying={isBuying}
        isLoadingOrderQuote={isLoadingOrderQuote}
        selectedCurrency={selectedCurrency}
        register={register}
        krwAmount={orderQuote?.data?.krwAmount ?? 0}
      />

      <div className="mt-8 flex flex-col gap-8">
        <div className="border-t border-[#C5C8CE]" />

        <div className="flex justify-between">
          <span className="text-[20px] font-medium leading-[27px] text-[#646F7C]">
            적용 환율
          </span>
          <span className="text-[20px] font-semibold leading-[27px] text-[#646F7C]">
            1 {selectedCurrency} = {rate} 원
          </span>
        </div>

        <button
          type="submit"
          disabled={!orderQuote?.data?.krwAmount}
          className={clsx(
            'rounded-[12px] bg-[#1B2334] py-6 text-[22px] font-bold leading-[29px] text-white',
            !orderQuote?.data?.krwAmount && 'opacity-50',
          )}
        >
          환전하기
        </button>
      </div>
    </form>
  );
}
