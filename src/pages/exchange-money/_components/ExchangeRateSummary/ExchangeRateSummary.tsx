import type { ExchangeRatesResponse } from '@/apis/requests/requestGetExchangeRates';
import { ExchangeRateCard } from './_components/ExchangeRateCard/ExchangeRateCard';

interface ExchangeRateSummaryProps {
  exchangeRates: ExchangeRatesResponse[] | undefined;
}

export function ExchangeRateSummary({
  exchangeRates,
}: ExchangeRateSummaryProps) {
  return (
    <div className="flex gap-5">
      {exchangeRates?.map((item) => {
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
  );
}
