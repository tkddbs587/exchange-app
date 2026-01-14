import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

export function ProtectedLayout() {
  return (
    <div className="flex h-full flex-col bg-white">
      <Header />
      <Outlet />
    </div>
  );
}
