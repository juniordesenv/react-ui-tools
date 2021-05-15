import React from 'react';
import styled from '@emotion/styled';

import Styles from './table.style';

const EmptyDataWrap = styled.tr`${Styles.emptyDataWrap}`;

export type EmptyDataProps = {
  colSpan: number;
  className?: string;
};

const EmptyData: React.FC<EmptyDataProps> = ({ colSpan, className }: EmptyDataProps) => (
  <EmptyDataWrap
    className={className}
  >
    <td colSpan={colSpan}>
      Nenhum registro correspondente encontrado
    </td>
  </EmptyDataWrap>
);

export { EmptyData };
