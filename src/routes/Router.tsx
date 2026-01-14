import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicOnlyRoute } from './PublicOnlyRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { SignIn } from '../pages/sign-in/SignIn';
import { ExchangeMoney } from '../pages/exchange-money/ExchangeMoney';
import { ExchangeHistory } from '../pages/exchange-history/ExchangeHistory';
import { ProtectedLayout } from './ProtectedLayout';

export function Router() {
  return (
    <Routes>
      <Route element={<PublicOnlyRoute />}>
        <Route path="/sign-in" element={<SignIn />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<ExchangeMoney />} />
          <Route path="/history" element={<ExchangeHistory />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
