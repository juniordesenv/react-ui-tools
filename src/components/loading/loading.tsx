import React from 'react';
import styled from '@emotion/styled';

import Styles from './loading.style';

const LoadingWrap = styled.div`${Styles.loadingWrap}`;

export type LoadingProps = {
  size?: number
};

const Loading: React.FC<LoadingProps> = ({ size = 32 }: LoadingProps) => (
  <LoadingWrap size={size}>
    <div />
    <div />
  </LoadingWrap>
);

export { Loading };
