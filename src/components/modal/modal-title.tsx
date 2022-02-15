import { Button } from '@/components';
import React from 'react';
import styled from '@emotion/styled';
import { FaTimes } from 'react-icons/fa';

import Styles from './modal.style';

const ModalTitleWrap = styled.div`${Styles.modalTitleWrap}`;

type ModalProps = {
  children: React.ReactNode;
  handleClose: () => void;
  className?: string;
};

const ModalTitle: React.FC<ModalProps> = ({ children, handleClose, className }: ModalProps) => (
  <ModalTitleWrap className={['modal-title', className].join(' ')}>
    {children}
    <Button
      onClick={handleClose}
      className="close"
      variant="ghost"
    >
      <FaTimes />
    </Button>
  </ModalTitleWrap>
);

export { ModalTitle };
