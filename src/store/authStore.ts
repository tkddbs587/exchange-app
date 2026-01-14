import { create } from 'zustand';
import { TOKEN_KEY } from '../constants/auth';

interface AuthState {
  token: string | null;
  isHydrated: boolean;
  hydrate: () => void;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isHydrated: false,

  hydrate: () => {
    const token = localStorage.getItem(TOKEN_KEY);
    set({ token, isHydrated: true });
  },

  setToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    set({ token });
  },

  clearToken: () => {
    localStorage.removeItem(TOKEN_KEY);
    set({ token: null, isHydrated: false });
  },
}));
