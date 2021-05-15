import React from 'react';
import styled from '@emotion/styled';

import Styles from './table.style';

const TdLoadingWrap = styled.td`${Styles.tdLoadingWrap}`;

export type TdLoadingProps = React.DetailedHTMLProps<
React.TdHTMLAttributes<HTMLTableCellElement>,
HTMLTableCellElement
> & {
  className?: string;
  percentSize: number;
};

const TdLoading: React.FC<TdLoadingProps> = ({
  className,
  percentSize,
  ...props
}: TdLoadingProps) => (
  <TdLoadingWrap
    percentSize={percentSize}
    className={['td-loading', className].join(' ')}
    {...props}
  />
);

export { TdLoading };
