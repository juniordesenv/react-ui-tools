import React from 'react';
import styled from '@emotion/styled';

import Styles from './modal.style';

const ModalActionWrap = styled.div`${Styles.modalActionWrap}`;

export type ModalActionProps = {
  children: React.ReactNode;
};

const ModalAction: React.FC<ModalActionProps> = ({ children }: ModalActionProps) => (
  <ModalActionWrap>
    {children}
  </ModalActionWrap>
);

export { ModalAction };
