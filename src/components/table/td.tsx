import React from 'react';
import styled from '@emotion/styled';

import Styles from './table.style';

const TdWrap = styled.td`${Styles.tdWrap}`;

export type TdProps = React.DetailedHTMLProps<
React.TdHTMLAttributes<HTMLTableCellElement>,
HTMLTableHeaderCellElement
> & {
  className?: string;
  children: React.ReactNode;
};

const Td: React.FC<TdProps> = ({
  children,
  className,
  ...props
}: TdProps) => (
  <TdWrap
    className={['td', className].join(' ')}
    {...props}
  >
    {children}
  </TdWrap>
);

export { Td };
