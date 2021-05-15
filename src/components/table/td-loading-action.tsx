import React from 'react';
import styled from '@emotion/styled';

import Styles from './table.style';

const TdLoadingWrap = styled.td`${Styles.tdLoadingActionWrap}`;

export type TdLoadingActionProps = React.DetailedHTMLProps<
React.TdHTMLAttributes<HTMLTableCellElement>,
HTMLTableCellElement
> & {
  className?: string;
};

const TdLoadingAction: React.FC<TdLoadingActionProps> = ({
  className,
  ...props
}: TdLoadingActionProps) => (
  <TdLoadingWrap
    className={['td-loading', className].join(' ')}
    {...props}
  >
    <span />
    <span />
  </TdLoadingWrap>
);

export { TdLoadingAction };
