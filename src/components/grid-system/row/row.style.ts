import { css } from '@emotion/react';

type RowWrapProps = {
  gap?: number;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
  wrap?: 'wrap' | 'no-wrap' | 'unset' | 'wrap-reverse' | 'inherit' | 'initial' | 'reverse';
};

const rowWrap = ({
  gap,
  direction,
  justifyContent,
  alignItems,
  alignContent,
  wrap,
}: RowWrapProps) => css`
  display: flex;
  flex-direction: ${direction};
  ${justifyContent ? `justify-content: ${justifyContent}` : ''};
  ${alignItems ? `align-items: ${alignItems}` : ''};
  ${alignContent ? `align-content: ${alignContent}` : ''};
   flex-wrap: ${wrap};
   ${gap ? `
    margin-left: -${gap / 2}px;
    margin-right: -${gap / 2}px;
    ` : ''}
  
  > div {
    ${gap ? `
    padding-left: ${gap / 2}px;
    padding-right: ${gap / 2}px;
    ` : ''}
  }
`;

export default {
  rowWrap,
};
