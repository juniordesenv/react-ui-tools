import { createContext } from 'react';
import { MessageToastr } from '@/components';

type Props = {
  addMessageToastr: (message: MessageToastr) => void;
  removeMessageToastr: (message: MessageToastr) => void;
  listMessagesToastr: MessageToastr[];
};

const ApiContext = createContext<Props>(null);

export {
  ApiContext,
};
