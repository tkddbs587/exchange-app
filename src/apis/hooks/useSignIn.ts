import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import type { AxiosError } from 'axios';
import { requestSignIn } from '../requests/requestSignIn';
import { useAuthStore } from '../../store/authStore';
import type {
  ErrorResponseData,
  ValidationErrorResponseData,
} from '../../types/apis/response';

export function isValidationError(
  error: ErrorResponseData,
): error is ValidationErrorResponseData {
  return error.code === 'VALIDATION_ERROR';
}

export const useSignIn = () => {
  const setToken = useAuthStore((s) => s.setToken);

  return useMutation({
    mutationFn: requestSignIn,
    onSuccess: (data) => {
      setToken(data.data.token);
      toast.success('로그인 성공', {
        position: 'top-center',
        autoClose: 1500,
        pauseOnHover: false,
        hideProgressBar: true,
      });
    },
    onError: (error: AxiosError<ErrorResponseData>) => {
      console.error(error);
      if (error.response) {
        toast.error(
          isValidationError(error.response.data)
            ? error.response.data.data.email
            : error.response.data.message,
          {
            position: 'top-center',
            autoClose: 3000,
            pauseOnHover: false,
          },
        );
      }
    },
  });
};
