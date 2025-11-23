import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@shared/api';
import { User } from '../model/types';

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['user', 'current'],
    queryFn: async () => {
      const { data } = await apiClient.get<User>('/users/me');
      return data;
    },
    enabled: !!localStorage.getItem('auth_token'),
  });
};

