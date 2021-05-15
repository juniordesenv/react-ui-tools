// eslint-disable-next-line import/no-extraneous-dependencies
import { Loading } from '@/components/loading/loading';
import React from 'react';
import { VariantColorsType } from '@/styles/theme';
import styled from '@emotion/styled';

import Styles from './button.style';

const ButtonWrap = styled.button`${Styles.buttonWrap}`;

export type ButtonProps = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
> & {
  children: React.ReactNode;
  color?: VariantColorsType;
  scale?: 'main' | 'light' | 'dark';
  variant?: 'contained' | 'outlined' | 'text' | 'ghost';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  variant,
  scale,
  type = 'button',
  fullWidth,
  isLoading,
  leftIcon,
  rightIcon,
  ...buttonProps
}: ButtonProps) => (
  <ButtonWrap
    {...buttonProps}
    type={type}
    disabled={isLoading || buttonProps.disabled}
    data-status={buttonProps.disabled ? 'disabled' : null}
    fullWidth={fullWidth}
    color={color}
    variant={variant}
    scale={scale}
  >
    {leftIcon && <span className="left-icon">{leftIcon}</span>}
    {children}
    {rightIcon && <span className="right-icon">{rightIcon}</span>}
    {isLoading && (
    <div className="loading">
      <Loading size={16} />
    </div>
    )}
  </ButtonWrap>
);

export { Button };
