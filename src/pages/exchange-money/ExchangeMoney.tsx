import { useGetExchangeRates } from '../../apis/hooks/query/exchange/useGetExchangeRates';
import type { ExchangeRatesResponse } from '../../apis/requests/requestGetExchangeRates';
import { ExchangeHeader } from './_components/ExchangeHeader/ExchangeHeader';
import { ExchangeOrder } from './_components/ExchangeOrder/ExchangeOrder';
import { ExchangeRateCard } from './_components/ExchangeRateCard/ExchangeRateCard';
import { MyWallet } from './_components/MyWallet/MyWallet';

export function ExchangeMoney() {
  const { data: exchangeRates, isError } = useGetExchangeRates();

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="mx-20 flex flex-1 flex-col gap-10 pb-[50px] pt-10">
      <ExchangeHeader />

      <div className="flex flex-1 gap-6">
        <div className="flex flex-col gap-6">
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

          <MyWallet />
        </div>

        <ExchangeOrder exchangeRates={exchangeRates?.data} />
      </div>
    </div>
  );
}
