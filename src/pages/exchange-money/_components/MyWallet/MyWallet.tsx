import { useGetMyWallets } from '../../../../apis/hooks/query/wallets/useGetMyWallets';

export function MyWallet() {
  const { data: myWallets } = useGetMyWallets();

  return (
    <div className="flex flex-1 flex-col gap-[32px] rounded-[12px] bg-[#F7F8F9] px-8 py-6">
      <span className="text-[24px] font-extrabold leading-[32px] text-[#28323C]">
        내 지갑
      </span>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-3">
          {myWallets?.data?.wallets.map((wallet) => (
            <div
              key={wallet.walletId}
              className="flex items-center justify-between"
            >
              <span className="text-[20px] font-medium leading-[27px] text-[#646F7C]">
                {wallet.currency}
              </span>
              <span className="text-[20px] font-semibold leading-[27px] text-[#646F7C]">
                {`${wallet.currency === 'USD' ? '$' : '₩'} ${wallet.balance}`}
              </span>
            </div>
          ))}
        </div>

        <div className="flex h-[55px] items-center justify-between border-t border-[#C5C8CE] pt-3">
          <span className="text-[20px] font-medium leading-[27px] text-[#646F7C]">
            총 보유 자산
          </span>
          <span className="text-[24px] font-bold leading-[27px] text-[#3479EB]">{`₩ ${myWallets?.data?.totalKrwBalance}`}</span>
        </div>
      </div>
    </div>
  );
}
