import { useGetExchangeHistory } from '@/apis/hooks/query/exchange/useGetExchangeHistory';

export function HistoryTable() {
  const { data: exchangeHistory } = useGetExchangeHistory();

  const gridCols = 'grid grid-cols-[140px_260px_1fr_1fr_1fr] gap-x-8';

  if (!exchangeHistory) return null;

  const formatIsoToSpace = (iso: string) => iso.replace('T', ' ');

  return (
    <div className="scrollbar-hide flex-1 overflow-y-auto rounded-[16px] border border-[#D0D6DB]">
      <div className="sticky top-4 z-10 border-y border-[#D0D6DB] bg-white">
        <div className={`${gridCols} h-[49px] items-center px-8`}>
          <span className="text-[16px] font-medium leading-[21px] text-[#646F7C]">
            거래 ID
          </span>
          <span className="text-[16px] font-medium leading-[21px] text-[#646F7C]">
            거래 일시
          </span>
          <span className="text-right text-[16px] font-medium leading-[21px] text-[#646F7C]">
            매수 금액
          </span>
          <span className="text-right text-[16px] font-medium leading-[21px] text-[#646F7C]">
            체결 환율
          </span>
          <span className="text-right text-[16px] font-medium leading-[21px] text-[#646F7C]">
            매도 금액
          </span>
        </div>
      </div>

      <div className="px-8 py-4">
        <div className="flex flex-col gap-y-2">
          {exchangeHistory.data.map((item) => (
            <div key={item.orderId} className={`${gridCols} h-12 items-center`}>
              <span className="text-left text-[#374553]">{item.orderId}</span>
              <span className="text-left text-[#374553]">
                {formatIsoToSpace(item.orderedAt)}
              </span>
              <span className="text-right text-[#374553]">{item.toAmount}</span>
              <span className="text-right text-[#374553]">
                {item.appliedRate}
              </span>
              <span className="text-right text-[#374553]">
                {item.fromAmount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
