import React from 'react';
import styled from '@emotion/styled';

import Styles from './modal.style';

const ModalContentWrap = styled.div`${Styles.modalContentWrap}`;

export type ModalContentProps = {
  className?: string;
  children: React.ReactNode;
};

const ModalContent: React.FC<ModalContentProps> = ({ children, className }: ModalContentProps) => (
  <ModalContentWrap className={['modal-content', className].join(' ')}>
    {children}
  </ModalContentWrap>
);

export { ModalContent };
