import React from 'react';
import styled from '@emotion/styled';

import Styles from './col.style';

const ColWrap = styled.div`${Styles.colWrap}`;

type BreakpointsValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
type BreakpointsName = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ColProps = React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement
> & {
  children: React.ReactNode;
  className?: string;
  xs?: BreakpointsValue;
  sm?: BreakpointsValue;
  md?: BreakpointsValue;
  lg?: BreakpointsValue;
  xl?: BreakpointsValue;
  defaultSize?: BreakpointsValue;
};

const getClassByBreakpoint = (
  breakpointName: BreakpointsName,
  breakpointValue: BreakpointsValue,
  defaultSize?: BreakpointsValue,
): string => {
  if (!breakpointValue && defaultSize) {
    return `col-${breakpointName}-${defaultSize}`;
  }
  if (!breakpointValue) {
    return '';
  }
  switch (breakpointName) {
    case 'xs':
      return `col-xs-${breakpointValue}`;
    case 'sm':
      return `col-sm-${breakpointValue}`;
    case 'md':
      return `col-md-${breakpointValue}`;
    case 'lg':
      return `col-lg-${breakpointValue}`;
    case 'xl':
      return `col-xl-${breakpointValue}`;
    default:
      return '';
  }
};

const Col: React.FC<ColProps> = ({
  children,
  className = '',
  xs,
  sm,
  md,
  lg,
  xl,
  defaultSize,
}: ColProps) => {
  const classList = ['col', className];

  classList.push(getClassByBreakpoint('xs', xs, defaultSize));
  classList.push(getClassByBreakpoint('sm', sm, defaultSize));
  classList.push(getClassByBreakpoint('md', md, defaultSize));
  classList.push(getClassByBreakpoint('lg', lg, defaultSize));
  classList.push(getClassByBreakpoint('xl', xl, defaultSize));

  return (
    <ColWrap
      className={classList.join(' ')}
    >
      {children}
    </ColWrap>
  );
};

export { Col };
