import { useQuery } from '@tanstack/react-query';
import { walletsKeys } from './walletsKeys';
import { requestGetMyWallets } from '../../../requests/requestGetMyWallets';

export const useGetMyWallets = () =>
  useQuery({
    queryKey: walletsKeys.myWallets(),
    queryFn: requestGetMyWallets,
  });
