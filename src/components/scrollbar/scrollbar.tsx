import React from 'react';
import styled from '@emotion/styled';

import CustomScrollbar from 'react-scrollbars-custom';

import Styles from './scrollbar.style';

const ScrollbarWrap = styled(CustomScrollbar)`${Styles.scrollbarWrap}`;

type ScrollbarProps = {
  children: React.ReactNode;
  className?: string;
};

const Scrollbar: React.FC<ScrollbarProps> = ({ children, className }: ScrollbarProps) => (
  <ScrollbarWrap className={className}>
    {children}
  </ScrollbarWrap>
);

export { Scrollbar };
