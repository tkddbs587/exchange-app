import { HistoryTable } from './_components/HistoryTable/HistoryTable';

export function ExchangeHistory() {
  return (
    <div className="mx-20 flex flex-1 flex-col gap-10 overflow-hidden pb-10 pt-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-[40px] font-bold leading-[53px] text-[#28323C]">
          환전 내역
        </h1>
        <h2 className="text-[20px] leading-[27px] text-[#374553]">
          환전 내역을 확인하실 수 있어요.
        </h2>
      </div>

      <HistoryTable />
    </div>
  );
}
