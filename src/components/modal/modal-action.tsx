import React from 'react';
import styled from '@emotion/styled';

import Styles from './modal.style';

const ModalActionWrap = styled.div`${Styles.modalActionWrap}`;

export type ModalActionProps = {
  className?: string;
  children: React.ReactNode;
};

const ModalAction: React.FC<ModalActionProps> = ({ children, className }: ModalActionProps) => (
  <ModalActionWrap className={['modal-action', className].join(' ')}>
    {children}
  </ModalActionWrap>
);

export { ModalAction };
