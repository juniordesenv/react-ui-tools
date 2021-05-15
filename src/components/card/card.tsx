import React from 'react';

import { VariantColorsType } from '@/styles/theme';
import styled from '@emotion/styled';

import Styles from './card.style';

const CardWrap = styled.div`${Styles.cardWrap}`;

type CardProps = React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement
> & {
  children: React.ReactNode;
  className?: string;
  color?: VariantColorsType;
  scale?: 'main' | 'light' | 'dark';
  size?: 'small' | 'normal' | 'medium' | 'large' |'larger';
  hoverToPopping?: boolean;
  hoverToBordered?: boolean;
  isFloating?: boolean;
};

const Card: React.FC<CardProps> = ({
  children,
  className,
  size = 'normal',
  hoverToPopping = false,
  hoverToBordered = false,
  isFloating = true,
  color,
  scale,
  ...props
}: CardProps) => (
  <CardWrap
    {...props}
    size={size}
    color={color}
    scale={scale}
    hoverToPopping={hoverToPopping}
    hoverToBordered={hoverToBordered}
    isFloating={isFloating}
    className={[className, 'card'].join(' ')}
  >
    {children}
  </CardWrap>
);

Card.defaultProps = {
  className: '',
  size: 'normal',
  hoverToPopping: false,
  hoverToBordered: false,
  isFloating: true,
  color: 'primary',
  scale: 'main',
};

export { Card };
