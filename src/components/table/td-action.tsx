import React from 'react';
import styled from '@emotion/styled';

import Styles from './table.style';

const TdActionWrap = styled.td`${Styles.tdActionWrap}`;

export type TdActionProps = React.DetailedHTMLProps<
React.TdHTMLAttributes<HTMLTableCellElement>,
HTMLTableCellElement
> & {
  className?: string;
  children: React.ReactNode;
};

const TdAction: React.FC<TdActionProps> = ({
  children,
  className,
  ...props
}: TdActionProps) => (
  <TdActionWrap
    className={['td-action', className].join(' ')}
    {...props}
  >
    <div>
      {children}
    </div>
  </TdActionWrap>
);

export { TdAction };
