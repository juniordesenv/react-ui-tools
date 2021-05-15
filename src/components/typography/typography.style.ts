import { css } from '@emotion/react';
import { Theme, VariantColors, VariantColorsLevel } from '@/styles/theme';
import { minQ } from '@/helpers/mq';

type Props = {
  theme?: Theme;
  display: 'inline' | 'block' | 'none';
  variant: VariantColors;
  variantLevel: VariantColorsLevel;
  contrastColor?: boolean,
  fontWeight: 'normal' | '400' | '500' | '600' | '700' | 'bold';
};

const typographyWrap = ({
  theme,
  display,
  variant,
  variantLevel,
  fontWeight,
}: Props) => css`
  > * {
    ${display ? `display: ${display}` : ''};
    color: ${variant[variantLevel]};
  }
  
  h1 {
    font-style: normal;
    font-weight: ${fontWeight};
    font-size: 67px;
  }
  
  h2 {
    font-style: normal;
    font-weight: ${fontWeight};
    font-size: 50px;
  }
  
  h3 {
    font-style: normal;
    font-weight: ${fontWeight};
    font-size: 38px;
  }
  
  h4 {
    font-style: normal;
    font-weight: ${fontWeight};
    font-size: 28px;
  }
  
  h5 {
    font-style: normal;
    font-weight: ${fontWeight};
    font-size: 21px;
  }
  
  h6 {
    font-style: normal;
    font-weight: ${fontWeight};
    font-size: 18px;
  }
  
  p {
    font-style: normal;
    font-weight: ${fontWeight};
    font-size: 12px;
  
    ${minQ(theme).md} {
      font-style: normal;
      font-weight: ${fontWeight};
      font-size: 16px;
    }
  }
  
  small {
    font-style: normal;
    font-weight: ${fontWeight};
    font-size: 8px;
  
    ${minQ(theme).md} {
      font-style: normal;
      font-weight: ${fontWeight};
      font-size: 12px;
    }
  }
`;

export default {
  typographyWrap,
};
