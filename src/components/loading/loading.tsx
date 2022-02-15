import { VariantColorsType } from '@/styles/theme';
import React from 'react';
import styled from '@emotion/styled';

import Styles from './loading.style';

const LoadingWrap = styled.div`${Styles.loadingWrap}`;

export type LoadingProps = {
  size?: number
  className?: string;
  color?: VariantColorsType;
  scale?: 'main' | 'light' | 'dark' | 'contrastColor';
};

const Loading: React.FC<LoadingProps> = ({
  size = 32,
  scale = 'main',
  color = 'primary',
  className,
}: LoadingProps) => (
  <LoadingWrap
    className={['loading', className].join(' ')}
    size={size}
    color={color}
    scale={scale}
  >
    <div />
    <div />
  </LoadingWrap>
);

export { Loading };
