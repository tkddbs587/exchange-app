import Rss from '../../../../assets/icons/rss.svg?react';

export function SignInHeader() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Rss className="h-[80px] w-[80px]" />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[48px] font-bold leading-[64px] text-[#374553]">
          반갑습니다.
        </h1>
        <h2 className="text-[32px] leading-[43px] text-[#646F7C]">
          로그인 정보를 입력해주세요.
        </h2>
      </div>
    </div>
  );
}
