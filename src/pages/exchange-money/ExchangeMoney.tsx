import { useGetExchangeRates } from '../../apis/hooks/query/exchange/useGetExchangeRates';
import { ExchangeHeader } from './_components/ExchangeHeader/ExchangeHeader';
import { ExchangeOrder } from './_components/ExchangeOrder/ExchangeOrder';
import { ExchangeRateSummary } from './_components/ExchangeRateSummary/ExchangeRateSummary';
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
          <ExchangeRateSummary exchangeRates={exchangeRates?.data} />
          <MyWallet />
        </div>

        <ExchangeOrder exchangeRates={exchangeRates?.data} />
      </div>
    </div>
  );
}
