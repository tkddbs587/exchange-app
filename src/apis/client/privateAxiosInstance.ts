import axios, { AxiosError } from 'axios';
import { TOKEN_KEY } from '../../constants/auth';
import { useAuthStore } from '../../store/authStore';
import type { ErrorResponseData } from '../../types/apis/response';

export const privateAxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

privateAxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

privateAxiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponseData>) => {
    const { clearToken } = useAuthStore.getState();

    if (
      error.status === 401 ||
      error.response?.status === 401 ||
      error.response?.data.code === 'UNAUTHORIZED'
    ) {
      clearToken();
    }

    return Promise.reject(error);
  },
);
