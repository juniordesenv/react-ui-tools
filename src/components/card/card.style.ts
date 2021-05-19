import { css } from '@emotion/core';
import { Theme, VariantColorsType } from '@/styles/theme';

type CardWrapProps = {
  theme?: Theme
  size: 'small' | 'normal' | 'medium' | 'large' |'larger';
  hoverToPopping?: boolean;
  color: VariantColorsType;
  scale?: 'main' | 'light' | 'dark';
  hoverToBordered?: boolean;
  isFloating?: boolean;
};

const cardWrap = ({
  theme,
  size,
  hoverToPopping,
  hoverToBordered,
  isFloating,
  color,
  scale,
}: CardWrapProps) => css`
  box-sizing: border-box;
  display: block;
  box-shadow: ${isFloating ? theme.card.shadow : 'none'};
  border-radius: ${theme.card.radius};
  background-color: ${theme.card.bgDefault};
  transition-duration: .3s;
  border: transparent 1px solid;
  
  :hover {
    ${hoverToPopping && `box-shadow: ${theme.card.shadowHover};`};
    ${hoverToBordered && `border: ${theme.colors[color][scale]} 1px solid;`};
  }

  ${size === 'small' && 'padding: 8px;'}
  ${size === 'normal' && 'padding: 16px;'}
  ${size === 'medium' && 'padding: 32px;'}
  ${size === 'large' && 'padding: 48px;'}
  ${size === 'larger' && 'padding: 64px;'}
`;

export default {
  cardWrap,
};
