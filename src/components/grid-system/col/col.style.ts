import { Theme } from '@/styles/theme';
import { css } from '@emotion/core';
import { minQ } from '@/helpers/mq';

const sizeCols = 8.333;

const writeBreakpoint = (theme: Theme, breakpoint: string) => `
    ${minQ(theme)[breakpoint]} {
       &.col-${breakpoint}-1 {
        flex: 0 0 ${sizeCols}%;
        max-width: ${sizeCols}%;
      }
      
       &.col-${breakpoint}-2 {
        flex: 0 0 ${sizeCols * 2}%;
        max-width: ${sizeCols * 2}%;
      }
      
      &.col-${breakpoint}-3 {
        flex: 0 0 ${sizeCols * 3}%;
        max-width: ${sizeCols * 3}%;
      }
      
      &.col-${breakpoint}-4 {
        flex: 0 0 ${sizeCols * 4}%;
        max-width: ${sizeCols * 4}%;
      }
      
      &.col-${breakpoint}-5 {
        flex: 0 0 ${sizeCols * 5}%;
        max-width: ${sizeCols * 5}%;
      }
      
      &.col-${breakpoint}-6 {
        flex: 0 0 ${sizeCols * 6}%;
        max-width: ${sizeCols * 6}%;
      }
      
      &.col-${breakpoint}-7 {
        flex: 0 0 ${sizeCols * 7}%;
        max-width: ${sizeCols * 7}%;
      }
      
      &.col-${breakpoint}-8 {
        flex: 0 0 ${sizeCols * 8}%;
        max-width: ${sizeCols * 8}%;
      }
      
      &.col-${breakpoint}-9 {
        flex: 0 0 ${sizeCols * 9}%;
        max-width: ${sizeCols * 9}%;
      }
      
      &.col-${breakpoint}-10 {
        flex: 0 0 ${sizeCols * 10}%;
        max-width: ${sizeCols * 10}%;
      }
      
      &.col-${breakpoint}-11 {
        flex: 0 0 ${sizeCols * 11}%;
        max-width: ${sizeCols * 11}%;
      }
      
      &.col-${breakpoint}-12 {
        flex: 0 0 ${sizeCols * 12}%;
        max-width: ${sizeCols * 12}%;
      }
      
      &.col-${breakpoint}-auto {
        flex: 0 0 auto;
      }
    }
 `;

type ColWrapProps = {
  theme?: Theme;
};

const colWrap = ({ theme }: ColWrapProps) => css`
    position: relative;
    width: 100%;
    
    ${writeBreakpoint(theme, 'xs')}
    ${writeBreakpoint(theme, 'sm')}
    ${writeBreakpoint(theme, 'md')}
    ${writeBreakpoint(theme, 'lg')}
    ${writeBreakpoint(theme, 'xl')}
`;

export default {
  colWrap,
};
