import React from 'react';
import styled from '@emotion/styled';

import Styles from './dropdown.style';

const DropdownItemWrap = styled.li`${Styles.dropdownItemWrap}`;

export type DropdownItemProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
  ['data-testid']?: string;
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onClick,
  ...props
}: DropdownItemProps) => (
  <DropdownItemWrap
    onClick={onClick}
    {...props}
  >
    { children }
  </DropdownItemWrap>
);

export { DropdownItem };
