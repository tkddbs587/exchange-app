import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { Router } from './routes/Router';
import { useAuthStore } from './store/authStore';

function App() {
  const queryClient = new QueryClient();

  const hydrate = useAuthStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
