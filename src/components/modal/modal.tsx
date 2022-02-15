import React from 'react';
import styled from '@emotion/styled';

import Styles from './modal.style';

const ModalWrap = styled.div`${Styles.modalWrap}`;

export type ModalProps = {
  className?: string;
  isOpen: boolean;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, className }: ModalProps) => (
  <ModalWrap className={[className, isOpen ? 'open' : ''].join(' ')}>
    <div>
      {children}
    </div>
  </ModalWrap>
);

export { Modal };
