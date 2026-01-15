import { useState } from 'react';
import type { ExchangeCurrency } from '@/types/exchange/currency';
import type { ExchangeRatesResponse } from '@/apis/requests/requestGetExchangeRates';
import { CurrencyDropdown } from './_components/CurrencyDropdown/CurrencyDropdown';
import { TradeTypeToggle } from './_components/TradeTypeToggle/TradeTypeToggle';
import { OrderQuote } from './_components/OrderQuote/OrderQuote';

interface ExchangeOrderProps {
  exchangeRates: ExchangeRatesResponse[] | undefined;
}

export function ExchangeOrder({ exchangeRates }: ExchangeOrderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuying, setBuying] = useState(false);
  const [selectedCurrency, setSelectedCurrency] =
    useState<ExchangeCurrency>('USD');

  const selectedRate = exchangeRates?.find(
    (item) => item.currency === selectedCurrency,
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

      <OrderQuote isBuying={isBuying} selectedCurrency={selectedCurrency} />

      <div className="mt-8 flex flex-col gap-8">
        <div className="border-t border-[#C5C8CE]" />

        <div className="flex justify-between">
          <span className="text-[20px] font-medium leading-[27px] text-[#646F7C]">
            적용 환율
          </span>
          <span className="text-[20px] font-semibold leading-[27px] text-[#646F7C]">
            1 {selectedCurrency} = {selectedRate?.rate} 원
          </span>
        </div>

        <button className="rounded-[12px] bg-[#1B2334] py-6 text-[22px] font-bold leading-[29px] text-white">
          환전하기
        </button>
      </div>
    </div>
  );
}
