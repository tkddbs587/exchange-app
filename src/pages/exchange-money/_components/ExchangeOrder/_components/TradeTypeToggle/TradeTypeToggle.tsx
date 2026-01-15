interface TradeTypeToggleProps {
  isBuying: boolean;
  setBuying: (isBuying: boolean) => void;
}

export function TradeTypeToggle({ isBuying, setBuying }: TradeTypeToggleProps) {
  return (
    <div className="border-[#D0D6DB mt-4 flex gap-3 rounded-[16px] border bg-white p-3">
      <button
        className={`flex-1 rounded-[12px] py-4 text-[20px] font-bold leading-[27px] ${isBuying ? 'bg-[#FE5050] text-white shadow-[2px_2px_4px_0px_rgba(0,0,0,0.1)]' : 'text-[#FFA7A7]'}`}
        onClick={() => setBuying(true)}
      >
        살래요
      </button>
      <button
        className={`flex-1 rounded-[12px] py-4 text-[20px] font-bold leading-[27px] ${!isBuying ? 'bg-[#3479EB] text-white shadow-[2px_2px_4px_0px_rgba(0,0,0,0.1)]' : 'text-[#9DB6FF]'}`}
        onClick={() => setBuying(false)}
      >
        팔래요
      </button>
    </div>
  );
}
