import ArrowUp from '../../../../assets/icons/arrow_drop_up.svg?react';
import ArrowDown from '../../../../assets/icons/arrow_drop_down.svg?react';

interface ExchangeRateCardProps {
  currency: 'JPY' | 'USD';
  changePercentage: number;
  exchangeRate: number;
}

export function ExchangeRateCard({
  currency,
  changePercentage,
  exchangeRate,
}: ExchangeRateCardProps) {
  const isExchangeRateUp = changePercentage > 0;

  return (
    <div className="flex gap-5 rounded-[12px] border border-[#D0D6DB] px-8 py-6">
      <div className="flex flex-col gap-2">
        <span className="text-[20px] font-semibold leading-[27px] text-[#646F7C]">
          {currency}
        </span>

        <div className="flex w-[160px] flex-col gap-1">
          <span className="text-[24px] font-bold leading-[32px] text-[#28323C]">
            {exchangeRate} KRW
          </span>

          <div className="flex items-center">
            {isExchangeRateUp ? (
              <ArrowUp width={24} height={24} />
            ) : (
              <ArrowDown width={24} height={24} />
            )}
            <span
              className={`text-[16px] leading-[21px] ${isExchangeRateUp ? 'text-[#FE5050]' : 'text-[#3B6EFF]'}`}
            >
              {changePercentage}%
            </span>
          </div>
        </div>
      </div>

      <span className="text-[16px] leading-[21px] text-[#646F7C]">
        {currency === 'JPY' ? '일본 엔화' : '미국 달러'}
      </span>
    </div>
  );
}
