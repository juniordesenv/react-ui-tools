import { useContext } from 'react';
import { ToastrContext } from '@/contexts';

export const useToastr = () => {
  const {
    listMessagesToastr,
    addMessageToastr,
    removeMessageToastr,
  } = useContext(ToastrContext);
  return {
    listMessagesToastr,
    addMessageToastr,
    removeMessageToastr,
  };
};
