import { useGetExchangeRates } from '../../apis/hooks/query/exchange/useGetExchangeRates';
import type { ExchangeRatesResponse } from '../../apis/requests/requestGetExchangeRates';
import { ExchangeHeader } from './_components/ExchangeHeader/ExchangeHeader';
import { ExchangeRateCard } from './_components/ExchangeRateCard/ExchangeRateCard';

export function ExchangeMoney() {
  const { data: exchangeRates } = useGetExchangeRates();

  return (
    <div className="mx-20 pt-10">
      <ExchangeHeader />

      <div className="flex gap-5">
        {exchangeRates?.data?.map((item: ExchangeRatesResponse) => {
          const { currency, changePercentage, rate, exchangeRateId } = item;

          return (
            <ExchangeRateCard
              key={exchangeRateId}
              currency={currency}
              changePercentage={changePercentage}
              exchangeRate={rate}
            />
          );
        })}
      </div>
    </div>
  );
}
