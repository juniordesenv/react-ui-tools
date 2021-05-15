import React from 'react';
import styled from '@emotion/styled';

import Styles from './table.style';

const ErrorDataWrap = styled.tr`${Styles.errorDataWrap}`;

export type ErrorDataProps = {
  colSpan: number;
  className?: string;
  children: React.ReactNode;
};

const ErrorData: React.FC<ErrorDataProps> = ({ colSpan, className, children }: ErrorDataProps) => (
  <ErrorDataWrap
    className={className}
    data-testid="error-table"
  >
    <td colSpan={colSpan}>
      {children}
    </td>
  </ErrorDataWrap>
);

export { ErrorData };
