import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { requestSignIn } from '../requests/requestSignIn';
import { useAuthStore } from '../../store/authStore';
import type { ErrorResponseData } from '../../types/apis/response';

export const useSignIn = () => {
  const setToken = useAuthStore((s) => s.setToken);

  return useMutation({
    mutationFn: requestSignIn,
    onSuccess: (data) => {
      setToken(data.data.token);
      toast.success('로그인 성공', { position: 'top-center', autoClose: 3000 });
    },
    onError: (error: ErrorResponseData) => {
      console.error(error);
      toast.error(error.message, { position: 'top-center' });
    },
  });
};
