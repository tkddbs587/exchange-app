import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export function ProtectedRoute() {
  const token = useAuthStore((s) => s.token);
  const isHydrated = useAuthStore((s) => s.isHydrated);
  const location = useLocation();

  if (!isHydrated) return null;

  if (!token)
    return <Navigate to="/sign-in" replace state={{ from: location }} />;

  return <Outlet />;
}
