import React from 'react';
import styled from '@emotion/styled';

import { useToastr } from '@/hooks';
import {
  FaCheck, FaInfoCircle, FaExclamationCircle, FaExclamationTriangle, FaTimes,
} from 'react-icons/fa';
import Styles from './toastr.style';

const ToastrWrap = styled.ul`${Styles.toastrWrap}`;
const MessageWrap = styled.li`${Styles.messageWrap}`;
const IconMessageWrap = styled.div`${Styles.iconMessageWrap}`;
const ContentMessageWrap = styled.div`${Styles.contentMessageWrap}`;
const CloseMessageWrap = styled.button`${Styles.closeMessageWrap}`;

const Icons = {
  success: (<FaCheck />),
  info: (<FaInfoCircle />),
  warning: (<FaExclamationTriangle />),
  error: (<FaExclamationCircle />),
};

export type MessageToastr = {
  type: 'success' | 'info' | 'warning' | 'error';
  content: string | React.ReactNode;
  timeoutSeconds: number;
  ref?: string;
};

export type ToastrProps = React.DetailedHTMLProps<
React.HTMLAttributes<HTMLUListElement>,
HTMLUListElement
> & {

};

const Toastr: React.FC<ToastrProps> = ({
  ...props
}: ToastrProps) => {
  const { listMessagesToastr, removeMessageToastr } = useToastr();

  const renderMessages = () => listMessagesToastr.map((message) => (
    <MessageWrap
      key={message.ref}
      variant={message.type}
      seconds={message.timeoutSeconds}
    >
      <IconMessageWrap>
        {Icons[message.type]}
      </IconMessageWrap>
      <ContentMessageWrap>
        {message.content}
      </ContentMessageWrap>
      <CloseMessageWrap onClick={() => { removeMessageToastr(message); }}>
        <FaTimes />
      </CloseMessageWrap>
    </MessageWrap>
  ));

  return (
    <ToastrWrap
      data-testid="toastr"
      {...props}
    >
      {renderMessages()}
    </ToastrWrap>
  );
};

export { Toastr };
