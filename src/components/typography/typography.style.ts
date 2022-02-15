import { css } from '@emotion/core';
import { Theme, VariantColors, VariantColorsLevel } from '@/styles/theme';
import { minQ } from '@/helpers/mq';

type FontProps = {
  fontWeight: string;
};

const h1 = ({ fontWeight }: FontProps) => css`
  font-style: normal;
  font-weight: ${fontWeight};
  font-size: 6rem;
`;

const h2 = ({ fontWeight }: FontProps) => css`
  font-style: normal;
  font-weight: ${fontWeight};
  font-size: 3.75rem;
`;

const h3 = ({ fontWeight }: FontProps) => css`
  font-style: normal;
  font-weight: ${fontWeight};
  font-size: 3rem;
`;

const h4 = ({ fontWeight }: FontProps) => css`
  font-style: normal;
  font-weight: ${fontWeight};
  font-size: 2.125rem;
`;

const h5 = ({ fontWeight }: FontProps) => css`
  font-style: normal;
  font-weight: ${fontWeight};
  font-size: 1.5rem;
`;

const h6 = ({ fontWeight }: FontProps) => css`
  font-style: normal;
  font-weight: ${fontWeight};
  font-size: 1.25rem;
`;

const p = ({ fontWeight }: FontProps) => css`
  font-style: normal;
  font-weight: ${fontWeight};
  font-size: 1rem;
`;

const small = ({ fontWeight }: FontProps) => css` 
  font-style: normal;
  font-weight: ${fontWeight};
  font-size: 0.75rem;
`;

type Props = {
  theme?: Theme;
  display: 'inline' | 'block' | 'none';
  variant: VariantColors;
  scale: VariantColorsLevel;
  contrastColor?: boolean,
  fontWeight: 'normal' | '400' | '500' | '600' | '700' | 'bold';
  as: string;
};

const typographyWrap = ({
  display,
  variant,
  scale,
  fontWeight,
  as,
}: Props) => css`
  ${display ? `display: ${display}` : ''};
  color: ${variant[scale]};
  
  ${as === 'h1' && h1({ fontWeight })}
  ${as === 'h2' && h2({ fontWeight })}
  ${as === 'h3' && h3({ fontWeight })}
  ${as === 'h4' && h4({ fontWeight })}
  ${as === 'h5' && h5({ fontWeight })}
  ${as === 'h6' && h6({ fontWeight })}
  ${as === 'small' && small({ fontWeight })}
  ${as === 'p' && p({ fontWeight })}
`;

export default {
  typographyWrap,
};
