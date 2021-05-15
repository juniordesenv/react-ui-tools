import { css } from '@emotion/react';
import { minQ } from '@/helpers/mq';
import { Theme } from '@/styles/theme';

type ContainerProps = {
  theme?: Theme
};

const containerWrap = ({ theme }: ContainerProps) => css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    
    ${minQ(theme).xs} {
      padding: 0 15px;
    }
    
    ${minQ(theme).sm} {
      padding: 0 15px;
      max-width: ${theme.breakpoints.sm}px;
    }
    
    ${minQ(theme).md} {
      max-width: ${theme.breakpoints.md}px;
    }
    
    ${minQ(theme).lg} {
      max-width: ${theme.breakpoints.lg}px;
    }
    
    ${minQ(theme).xl} {
      max-width: ${theme.breakpoints.xl}px;
    }
`;

export default {
  containerWrap,
};
