import { useContext } from 'react';
import { ApiContext } from '@/contexts';

export const useToastr = () => {
  const {
    listMessagesToastr,
    addMessageToastr,
    removeMessageToastr,
  } = useContext(ApiContext);
  return {
    listMessagesToastr,
    addMessageToastr,
    removeMessageToastr,
  };
};
