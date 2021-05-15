import { Button } from '@/components';
import React from 'react';
import styled from '@emotion/styled';
import { FaTimes } from 'react-icons/fa';

import Styles from './modal.style';

const ModalTitleWrap = styled.div`${Styles.modalTitleWrap}`;

type ModalProps = {
  children: React.ReactNode;
  handleClose: () => void;
};

const ModalTitle: React.FC<ModalProps> = ({ children, handleClose }: ModalProps) => (
  <ModalTitleWrap>
    {children}
    <Button
      onClick={handleClose}
      className="close"
      variant="text"
    >
      <FaTimes />
    </Button>
  </ModalTitleWrap>
);

export { ModalTitle };
