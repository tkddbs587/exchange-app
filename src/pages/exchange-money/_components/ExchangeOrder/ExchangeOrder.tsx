import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import ChevronDown from '../../../../assets/icons/keyboard_arrow_down.svg?react';
import { Input } from '../../../../components/Input/Input';
import type { ExchangeRatesResponse } from '../../../../apis/requests/requestGetExchangeRates';
import { CurrencyDropdown } from './_components/CurrencyDropdown/CurrencyDropdown';
import { TradeTypeToggle } from './_components/TradeTypeToggle/TradeTypeToggle';

interface ExchangeOrderProps {
  exchangeRates: ExchangeRatesResponse[] | undefined;
}

export function ExchangeOrder({ exchangeRates }: ExchangeOrderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuying, setBuying] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<'JPY' | 'USD'>(
    'USD',
  );

  const { register } = useForm({
    defaultValues: {
      amount: '',
    },
    mode: 'onChange',
  });

  const selectedRate = exchangeRates?.find(
    (item) => item.currency === selectedCurrency,
  );

  const handleClickCurrency = (currency: 'JPY' | 'USD') => {
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

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex w-full flex-col gap-3">
          <span className="text-[20px] font-medium leading-[27px] text-[#646F7C]">
            {isBuying ? '매수 금액' : '매도 금액'}
          </span>
          <div className="relative">
            <Input
              placeholder=""
              inputMode="numeric"
              pattern="[0-9]*"
              classNames={twMerge('pr-[104px] text-right')}
              register={register('amount', {
                pattern: {
                  value: /^[0-9]+$/,
                  message: '숫자만 입력해주세요.',
                },
              })}
            />

            <span className="absolute right-6 top-[50%] translate-y-[-50%] text-[20px] font-medium leading-[27px] text-[#646F7C]">
              {selectedCurrency === 'JPY' ? '엔화' : '달러'}{' '}
              {isBuying ? '사기' : '팔기'}
            </span>
          </div>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D0D6DB]">
          <ChevronDown width={36} height={36} color="#fff" />
        </div>

        <div className="flex w-full flex-col gap-3">
          <span className="text-[20px] font-medium leading-[27px] text-[#646F7C]">
            필요 원화
          </span>

          <div className="flex h-[75px] w-full items-center justify-end gap-[10px] rounded-[12px] border border-[#ACB4BB] bg-[#F1F2F4] px-6 text-[20px] font-semibold leading-[27px]">
            <span className="text-[20px] font-semibold leading-[27px] text-[#646F7C]">
              {133290}
            </span>
            <span
              className={clsx(
                'text-[20px] font-bold leading-[27px]',
                isBuying ? 'text-[#FE5050]' : 'text-[#3479EB]',
              )}
            >
              {isBuying ? '원 필요해요' : '원 받을 수 있어요'}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-8">
        <div className="border-t border-[#C5C8CE]" />

        <div className="flex justify-between">
          <span className="text-[20px] font-medium leading-[27px] text-[#646F7C]">
            적용 환율
          </span>
          <span className="text-[20px] font-semibold leading-[27px] text-[#646F7C]">
            1 {selectedRate?.currency} = {selectedRate?.rate} 원
          </span>
        </div>

        <button className="rounded-[12px] bg-[#1B2334] py-6 text-[22px] font-bold leading-[29px] text-white">
          환전하기
        </button>
      </div>
    </div>
  );
}
