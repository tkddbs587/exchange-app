import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

export function ProtectedLayout() {
  return (
    <div className="bg-white">
      <Header />
      <Outlet />
    </div>
  );
}
