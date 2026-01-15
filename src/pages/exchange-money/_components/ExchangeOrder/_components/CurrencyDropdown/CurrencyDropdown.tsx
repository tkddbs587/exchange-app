import ChevronDown from '@/assets/icons/keyboard_arrow_down.svg?react';
import ChevronUp from '@/assets/icons/keyboard_arrow_up.svg?react';
import UsaFlag from '@/assets/icons/usa_flag.svg?react';
import type { ExchangeRatesResponse } from '@/apis/requests/requestGetExchangeRates';
import type { ExchangeCurrency } from '@/types/exchange/currency';

interface CurrencyDropdownProps {
  selectedCurrency: ExchangeCurrency;
  exchangeRates: ExchangeRatesResponse[] | undefined;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClickCurrency: (currency: ExchangeCurrency) => void;
}

export function CurrencyDropdown({
  selectedCurrency,
  exchangeRates,
  isOpen,
  setIsOpen,
  onClickCurrency,
}: CurrencyDropdownProps) {
  return (
    <div className="relative flex items-center gap-2">
      {selectedCurrency === 'USD' ? (
        <UsaFlag width={24} height={24} />
      ) : (
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#F1F2F4] bg-white">
          <span className="h-3 w-3 rounded-full bg-[#d80127]" />
        </div>
      )}

      <button
        className="flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[24px] font-bold leading-[32px] text-[#36414C]">{`${selectedCurrency} 환전하기`}</span>
        {isOpen ? (
          <ChevronUp width={28} height={28} />
        ) : (
          <ChevronDown width={28} height={28} />
        )}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-0 z-10 mt-[40px] w-[140px] rounded-[10px] border border-[#E9EBEE] bg-white py-2">
          {exchangeRates?.map((item) => {
            const { currency, exchangeRateId } = item;

            return (
              <button
                key={exchangeRateId}
                onClick={() => onClickCurrency(currency)}
                className="flex w-full items-center gap-3 px-4 py-3 hover:bg-[#F7F8FA]"
              >
                {currency === 'USD' ? (
                  <UsaFlag width={20} height={20} />
                ) : (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#F1F2F4]">
                    <span className="h-2 w-2 rounded-full bg-[#d80127]" />
                  </div>
                )}
                <span className="font-medium leading-[21px] text-[#374553]">
                  {currency === 'JPY' ? '일본' : '미국'} {currency}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
