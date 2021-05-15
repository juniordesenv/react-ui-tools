import React from 'react';
import styled from '@emotion/styled';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import Styles from './table.style';

const ThWrap = styled.th`${Styles.thWrap}`;

export type ThProps = React.DetailedHTMLProps<
React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
HTMLTableHeaderCellElement
> & {
  isSorted?: boolean;
  orderSort?: 'asc' | 'desc';
  className?: string;
  children: React.ReactNode;
};

const Th: React.FC<ThProps> = ({
  children,
  className,
  onClick,
  orderSort,
  isSorted = false,
  ...props
}: ThProps) => {
  const renderSortIcon = () => {
    if (!isSorted) return null;
    return orderSort === 'asc' ? (<FaChevronDown />) : (<FaChevronUp />);
  };

  return (
    <ThWrap
      className={['th', className, onClick ? 'has-event' : ''].join(' ')}
      onClick={onClick}
      {...props}
    >
      <div>
        {children}
        {renderSortIcon()}
      </div>
    </ThWrap>
  );
};

export { Th };
