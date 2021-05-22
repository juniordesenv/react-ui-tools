import { createContext } from 'react';
import { MessageToastr } from '@/components';

type Props = {
  addMessageToastr: (message: MessageToastr) => void;
  removeMessageToastr: (message: MessageToastr) => void;
  listMessagesToastr: MessageToastr[];
};

const ToastrContext = createContext<Props>(null);

export {
  ToastrContext,
};
