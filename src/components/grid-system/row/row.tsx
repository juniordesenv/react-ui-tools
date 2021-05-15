import React from 'react';
import styled from '@emotion/styled';

import Styles from './row.style';

const RowWrap = styled.div`${Styles.rowWrap}`;

export type RowProps = React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement
> & {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
  wrap?: 'wrap' | 'no-wrap' | 'unset' | 'wrap-reverse' | 'inherit' | 'initial' | 'reverse';
};

const Row: React.FC<RowProps> = ({
  children,
  className,
  gap,
  direction,
  justifyContent,
  alignItems,
  alignContent,
  wrap = 'wrap',
}: RowProps) => (
  <RowWrap
    className={['row', className].join(' ')}
    gap={gap}
    direction={direction}
    justifyContent={justifyContent}
    alignItems={alignItems}
    alignContent={alignContent}
    wrap={wrap}
  >
    {children}
  </RowWrap>
);

export { Row };
