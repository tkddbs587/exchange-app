import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export function PublicOnlyRoute() {
  const token = useAuthStore((s) => s.token);
  const isHydrated = useAuthStore((s) => s.isHydrated);

  if (!isHydrated) return null;
  if (token) return <Navigate to="/" replace />;

  return <Outlet />;
}
