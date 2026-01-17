import { requestPostOrderExchange } from '@/apis/requests/requestPostOrderExchange';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import type { ErrorResponseData } from '@/types/apis/response';
import type { AxiosError } from 'axios';
import { walletsKeys } from '../wallets/walletsKeys';
import { exchangeKeys } from './exchangeKeys';

export const useOrderExchange = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: requestPostOrderExchange,
    onSuccess: (data) => {
      toast.success(data.message, {
        position: 'top-center',
        autoClose: 2000,
        pauseOnHover: false,
      });
      queryClient.invalidateQueries({ queryKey: walletsKeys.myWallets() });
      queryClient.invalidateQueries({ queryKey: exchangeKeys.history() });
    },
    onError: (error: AxiosError<ErrorResponseData>) => {
      toast.error(error.response?.data.message, {
        position: 'top-center',
        autoClose: 3000,
        pauseOnHover: false,
      });
    },
  });
};
