import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { apiClient } from '@shared/api';
import { setUser } from '@entities/user';
import { User } from '@entities/user';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const { data } = await apiClient.post<LoginResponse>('/auth/login', credentials);
      return data;
    },
    onSuccess: (data) => {
      localStorage.setItem('auth_token', data.token);
      dispatch(setUser(data.user));
    },
  });
};

export const useLogout = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async () => {
      await apiClient.post('/auth/logout');
    },
    onSuccess: () => {
      localStorage.removeItem('auth_token');
      dispatch(setUser(null as any));
    },
  });
};

