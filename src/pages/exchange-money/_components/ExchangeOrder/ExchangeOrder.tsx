import { useMemo, useState } from 'react';
import type { ExchangeCurrency } from '@/types/exchange/currency';
import type { ExchangeRatesResponse } from '@/apis/requests/requestGetExchangeRates';
import { CurrencyDropdown } from './_components/CurrencyDropdown/CurrencyDropdown';
import { TradeTypeToggle } from './_components/TradeTypeToggle/TradeTypeToggle';
import { ExchangeOrderForm } from './_components/ExchangeOrderForm/ExchangeOrderForm';

interface ExchangeOrderProps {
  exchangeRates: ExchangeRatesResponse[] | undefined;
}

export function ExchangeOrder({ exchangeRates }: ExchangeOrderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuying, setBuying] = useState(false);
  const [selectedCurrency, setSelectedCurrency] =
    useState<ExchangeCurrency>('USD');

  const selectedRate = useMemo(
    () => exchangeRates?.find((item) => item.currency === selectedCurrency),
    [exchangeRates, selectedCurrency],
  );

  const handleClickCurrency = (currency: ExchangeCurrency) => {
    setIsOpen(false);
    setSelectedCurrency(currency);
  };

  return (
    <div className="flex-1 rounded-[12px] border border-[#D0D6DB] bg-[#F7F8F9] px-8 py-6">
      <CurrencyDropdown
        selectedCurrency={selectedCurrency}
        exchangeRates={exchangeRates}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClickCurrency={handleClickCurrency}
      />

      <TradeTypeToggle isBuying={isBuying} setBuying={setBuying} />
      <ExchangeOrderForm
        isBuying={isBuying}
        selectedCurrency={selectedCurrency}
        rate={selectedRate?.rate ?? 0}
      />
    </div>
  );
}
