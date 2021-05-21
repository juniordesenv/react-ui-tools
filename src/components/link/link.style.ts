import { Theme, VariantColors, VariantColorsType } from '@/styles/theme';
import { css } from '@emotion/core';

type ContainedButtonProps = {
  color: VariantColors;
  scale: 'main'| 'light' | 'dark';
  hoverShadow: string;
};

const containedButtonCss = ({
  color,
  scale,
  hoverShadow,
}: ContainedButtonProps) => css`
  border: none;
  background: linear-gradient(160deg,${color[scale]},${color[scale]} 40%,${color.light} 65%);
  background-position-y: 0;
  background-size: 300%;
  transition: background-position-y .1s linear;
  color: ${color.contrastColor};

  :hover, :focus {
    opacity: 0.9;
    box-shadow: ${hoverShadow};
  }

  &[data-status="disabled"] {
    opacity: 0.5;
    box-shadow: none;
  }

  :before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    background-color: rgba(236, 240, 241, .3);
    transform: translate(-50%, -50%);
  }

  :active:before {
    width: 120%;
    padding-top: 120%;
    transition: width .2s ease-out, padding-top .2s ease-out;
  }
`;

type OutlinedButtonProps = {
  color: VariantColors;
  scale: 'main'| 'light' | 'dark';
  disabled: VariantColors;
  hoverShadow: string;
};

const outlinedButtonCss = ({
  color,
  scale,
  disabled,
  hoverShadow,
}: OutlinedButtonProps) => css`
  border: 1px solid ${color[scale]};
  background-color: transparent;
  color: ${color[scale]};

  :hover, :focus {
    box-shadow: ${hoverShadow};
  }

  &[data-status="disabled"] {
    border: 1px solid ${disabled.main};
    box-shadow: none;
  }
  
  .loading {
    * {
      border-color: ${color[scale]};
    }
  }
`;

type TextButtonProps = {
  color: VariantColors;
  scale: 'main'| 'light' | 'dark';
  disabled: VariantColors;
  shadowHover: string;
  bgDefault: string;
};

const textButtonCss = ({
  color, scale, disabled, shadowHover, bgDefault,
}: TextButtonProps) => css`
  border: none;
  background-color: transparent;
  box-shadow: none;
  color: ${color[scale]};


  :hover, :focus {
    background-color: ${bgDefault};
    box-shadow: ${shadowHover};
  }

  &[data-status="disabled"] {
    box-shadow: none;
    color: ${disabled.main};
    
    :hover {
      background-color: transparent;
    }
  }


  .loading {
    * {
      border-color: ${color[scale]};
    }
  }
`;

type GhostButtonProps = {
  color: VariantColors;
  scale: 'main'| 'light' | 'dark';
  disabled: VariantColors;
};

const ghostButtonCss = ({
  color, scale, disabled,
}: GhostButtonProps) => css`
  border: none;
  background-color: transparent;
  box-shadow: none;
  color: ${color[scale]};

  :hover, :focus {
    text-decoration: underline;
  }

  &[data-status="disabled"] {
    box-shadow: none;
    color: ${disabled.main};
    
    :hover {
      text-decoration: none;
    }
  }

  .loading {
    * {
      border-color: ${color[scale]};
    }
  }
`;

type ButtonProps = {
  theme: Theme;
  color: VariantColorsType;
  scale?: 'main' | 'light' | 'dark';
  variant?: 'contained' | 'outlined' | 'text' | 'ghost';
  fullWidth?: boolean;
};

const buttonWrap = ({
  theme,
  color,
  variant,
  fullWidth,
  scale,
}: ButtonProps) => css`
  box-sizing: border-box;
  position: relative;
  display: block;
  overflow: hidden;
  outline: none;
  border-radius: ${theme.button.radius};
  box-shadow: ${theme.button.shadow};
  padding: 12px 36px;
  width: ${fullWidth ? '100%' : 'auto'};
  cursor: pointer;
  text-decoration: none;
  
  ${variant === 'contained' && containedButtonCss({
    color: theme.colors[color],
    scale,
    hoverShadow: theme.button.shadowHover || theme.button.shadow,
  })}
  ${variant === 'outlined' && outlinedButtonCss({
    color: theme.colors[color],
    scale,
    disabled: theme.colors.disabled,
    hoverShadow: theme.button.shadowHover || theme.button.shadow,
  })}
  ${variant === 'text' && textButtonCss({
    scale,
    color: theme.colors[color],
    bgDefault: theme.button.bgDefault,
    shadowHover: theme.button.shadowHover,
    disabled: theme.colors.disabled,
  })}
  ${variant === 'ghost' && ghostButtonCss({
    scale,
    color: theme.colors[color],
    disabled: theme.colors.disabled,
  })}
  
  .loading {
    position: absolute;
    left: 0;
    top: 8px;
  }
`;

const buttonIconWrap = ({
  theme,
  color,
  variant,
  fullWidth,
  scale,
  size,
}: ButtonProps & { size: number }) => css`
${buttonWrap({
    theme,
    color,
    variant,
    fullWidth,
    scale,
  })}
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  font-size: ${size}px;
  height: ${size + size}px;
  width: ${size + size}px;
  
  * {
    font-size: ${size}px;
  }
  
  .left-icon {
    margin-right: 8px;
  }
  
  .right-icon {
    margin-left: 8px;
  }

  .loading {
    position: absolute;
    left: 0;
    top: 16px;
  }
`;

export default {
  buttonWrap,
  buttonIconWrap,
};
