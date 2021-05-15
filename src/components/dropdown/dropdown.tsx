import React from 'react';
import styled from '@emotion/styled';

import Styles from './dropdown.style';

const DropdownWrap = styled.ul`${Styles.dropdownWrap}`;

export type DropdownProps = {
  className?: string;
  children: React.ReactNode;
  isOpen: boolean;
  ['data-testid=']?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  children,
  className,
  ...props
}: DropdownProps) => (
  <DropdownWrap
    {...props}
    className={['dropdown', className].join(' ')}
    isOpen={isOpen}
  >
    { children }
  </DropdownWrap>
);

export { Dropdown };
