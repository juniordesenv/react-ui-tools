import React from 'react';
import styled from '@emotion/styled';

import { Scrollbar } from '@/components/scrollbar/scrollbar';
import Styles from './table.style';

const TableWrap = styled(Scrollbar)`${Styles.tableWrap}`;

export type TableProps = React.HTMLProps<HTMLTableElement> & {
  children: React.ReactNode;
  className?: string;
};

const Table: React.FC<TableProps> = ({
  children,
  className,
  ...props
}: TableProps) => (
  <TableWrap className={className}>
    <table
      {...props}
      cellSpacing={props.cellSpacing || '0'}
    >
      {children}
    </table>
  </TableWrap>
);

export { Table };
