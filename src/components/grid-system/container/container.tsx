import React from 'react';
import styled from '@emotion/styled';

import Styles from './container.style';

const ContainerWrap = styled.div`${Styles.containerWrap}`;

export type ContainerProps = React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement
> & {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}: ContainerProps) => (
  <ContainerWrap
    {...props}
    className={['container', className].join(' ')}
  >
    {children}
  </ContainerWrap>
);

export { Container };
