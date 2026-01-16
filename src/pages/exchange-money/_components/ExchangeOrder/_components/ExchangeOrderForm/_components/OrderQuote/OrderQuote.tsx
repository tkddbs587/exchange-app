import ChevronDown from '@/assets/icons/keyboard_arrow_down.svg?react';
import { Input } from '@/components/Input/Input';
import type { ExchangeCurrency } from '@/types/exchange/currency';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type UseFormRegister } from 'react-hook-form';
import type { OrderFormValues } from '../../ExchangeOrderForm';

interface OrderQuoteProps {
  isBuying: boolean;
  selectedCurrency: ExchangeCurrency;
  register: UseFormRegister<OrderFormValues>;
  krwAmount: number;
}

export function OrderQuote({
  isBuying,
  selectedCurrency,
  register,
  krwAmount,
}: OrderQuoteProps) {
  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex w-full flex-col gap-3">
        <span className="text-[20px] font-medium leading-[27px] text-[#646F7C]">
          {isBuying ? '매수 금액' : '매도 금액'}
        </span>
        <div className="relative">
          <Input
            placeholder=""
            inputMode={selectedCurrency === 'USD' ? 'decimal' : 'numeric'}
            pattern={selectedCurrency === 'USD' ? '[0-9.]*' : '[0-9]*'}
            classNames={twMerge('pr-[104px] text-right')}
            register={register('amount', {
              valueAsNumber: true,
              validate: (value) => {
                if (Number.isNaN(value) || value <= 0)
                  return '유효한 금액을 입력해주세요.';
                if (selectedCurrency === 'JPY' && !Number.isInteger(value)) {
                  return 'JPY는 정수만 입력 가능합니다.';
                }
                if (selectedCurrency === 'USD') {
                  const str = String(value);
                  if (str.includes('.') && str.split('.')[1]?.length > 2) {
                    return 'USD는 소수점 2자리까지 입력 가능합니다.';
                  }
                }
                return true;
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
          {isBuying ? '필요 원화' : '수령 원화'}
        </span>

        <div className="flex h-[75px] w-full items-center justify-end gap-[10px] rounded-[12px] border border-[#ACB4BB] bg-[#F1F2F4] px-6 text-[20px] font-semibold leading-[27px]">
          <span className="text-[20px] font-semibold leading-[27px] text-[#646F7C]">
            {krwAmount}
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
  );
}
