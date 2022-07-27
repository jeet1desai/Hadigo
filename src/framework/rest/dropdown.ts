import type { Type } from '@/types';
import { useQuery } from 'react-query';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';

export function useCities() {
  

  // const { data, isLoading, error } = useQuery<Type[], Error>(
  //   [API_ENDPOINTS.CITY, options],
  //   ({ queryKey }) => client.types.all(Object.assign({}, queryKey[1]))
  // );
  // return {
  //   types: data,
  //   isLoading,
  //   error,
  // };
}
