// eslint-disable-next-line import/no-extraneous-dependencies
import { Loading } from '@/components/loading/loading';
import React from 'react';
import { VariantColorsType } from '@/styles/theme';
import styled from '@emotion/styled';

import Styles from './button.style';

const ButtonIconWrap = styled.button`${Styles.buttonIconWrap}`;

export type ButtonIconProps = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
> & {
  children: React.ReactNode;
  color?: VariantColorsType;
  variant?: 'contained' | 'outlined' | 'text' | 'ghost';
  scale?: 'main' | 'light' | 'dark';
  fullWidth?: boolean;
  isLoading?: boolean;
  size?: number;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({
  children,
  color = 'primary',
  variant = 'contained',
  scale = 'main',
  type = 'button',
  fullWidth,
  size = 16,
  isLoading,
  ...buttonProps
}: ButtonIconProps) => (
  <ButtonIconWrap
    {...buttonProps}
    size={size}
    type={type}
    disabled={isLoading || buttonProps.disabled}
    data-status={buttonProps.disabled ? 'disabled' : null}
    fullWidth={fullWidth}
    color={color}
    variant={variant}
    scale={scale}
  >
    {children}
    {isLoading && (
    <div className="loading">
      <Loading size={16} />
    </div>
    )}
  </ButtonIconWrap>
);

export { ButtonIcon };
