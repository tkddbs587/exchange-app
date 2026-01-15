import { NavLink, useNavigate } from 'react-router-dom';
import Rss from '../../assets/icons/rss.svg?react';
import { useAuthStore } from '../../store/authStore';

export function Header() {
  const navigate = useNavigate();
  const clearToken = useAuthStore((s) => s.clearToken);

  const handleLogout = () => {
    clearToken();
    navigate('/sign-in', { replace: true });
  };

  return (
    <header className="sticky top-0 z-10 flex h-[75px] min-h-[75px] w-full items-center justify-between border-b border-[#D0D6DB] bg-white px-10">
      <div className="flex h-[32px] items-center gap-2">
        <Rss className="h-[24px] w-[24px]" />
        <span className="text-[24px] font-bold leading-[32px]">
          Exchange App
        </span>
      </div>
      <div className="flex items-center gap-10">
        <nav className="flex items-center gap-2">
          <NavLink to="/" end className="flex h-[43px] items-center px-3">
            {({ isActive }) => (
              <span
                className={`text-center text-[20px] leading-[27px] ${isActive ? 'font-bold text-[#36414C]' : 'font-medium text-[#8899AA] hover:text-[#36414C]'}`}
              >
                환전 하기
              </span>
            )}
          </NavLink>
          <NavLink
            to="/history"
            end
            className="flex h-[43px] items-center px-3"
          >
            {({ isActive }) => (
              <span
                className={`text-center text-[20px] leading-[27px] ${isActive ? 'font-bold text-[#36414C]' : 'font-medium text-[#8899AA] hover:text-[#36414C]'}`}
              >
                환전 내역
              </span>
            )}
          </NavLink>
        </nav>
        <button
          type="button"
          onClick={handleLogout}
          className="h-[43px] rounded-[12px] bg-[#3479EB] px-3 text-center text-[20px] font-semibold leading-[27px] text-white"
        >
          Log out
        </button>
      </div>
    </header>
  );
}
