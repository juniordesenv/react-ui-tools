import { css } from '@emotion/core';
import { Theme, VariantColors } from '@/styles/theme';

type Props = {
  theme?: Theme;
};

const labelStyle = ({ theme }: Props) => css`
    position: absolute;
    left: 12px;
    top: 20px;
    color: ${theme.input.labelColor};
    cursor: text;
    pointer-events: none;
    transform-origin: 0;
    transform: translateY(0);
    transition: transform 500ms ease;
    
    &.disabled {
      color: ${theme.colors.disabled.contrastColor};
    }
`;

type LabelFocusProps = {
  variant: VariantColors;
};

const labelFocusInStyle = ({ variant }: LabelFocusProps) => css`
    transform: scale(0.9) translateY(-20px);
    color: ${variant.main};
`;

type InputProps = Props & {
  variant: VariantColors;
};

const inputStyle = ({ theme, variant }: InputProps) => css`
    padding: 22px 12px 12px 12px;
    outline: none;
    box-shadow: 0 1px 3px ${theme.input.shadowColor}, 0 1px 0 rgba(0,0,0,.02);
    border-radius: 4px;
    margin-bottom: 8px;
    background-color: ${theme.input.bgColor};
    width: 100%;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom-color: transparent;
    border-bottom-width: 2px;
    border-style: solid;
    min-height: 52px;
    
    :focus, &:not(.disabled):hover {
      box-shadow: 0 1px 3px ${variant.main}, 0 1px 0 rgba(0,0,0,.02);
    }
    
    &.disabled {
      background-color: ${theme.colors.disabled.light};
    }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validStyle = ({ theme }: Props) => css`
`;

const invalidStyle = ({ theme }: Props) => css`
    border-bottom-color: ${theme.colors.error.main};
    border-bottom-width: 2px;
    border-style: solid;
`;

type CheckmarkProps = Props & {
  variant: VariantColors;
  checkColor?: string;
};

const checkmarkStyle = ({ variant }: CheckmarkProps) => css`
  .checkmark {
    position: relative;
    display: block;
    height: 22px;
    width: 22px;
    min-width: 22px;
    border-radius: 2px;
    background-color: ${variant.main};
    
    &:before {
        content: "";
        position: absolute;
        display: none;
        left: -13px;
        top: -13px;
        background-color: ${variant.main};
        width: 48px;
        height: 48px;
        opacity: 0.1;
        border-radius: 50%;
    }
    
    :after {
      content: "";
      position: absolute;
      display: none;
      left: 7px;
      top: 3px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  
  input:checked ~ .checkmark:after {
    display: block;
  }
    
  @media(hover: hover) and (pointer: fine) {
    :hover {
      .checkmark {
        &:before {
          display: block;
        }
      }
    }
  }
`;

const radiomarkStyle = ({ variant }: CheckmarkProps) => css`
  .radiomark {
    position: relative;
    display: block;
    height: 22px;
    width: 22px;
    min-width: 22px;
    border-radius: 50%;
    background-color: ${variant.main};
    
    &:before {
        content: "";
        position: absolute;
        display: none;
        left: -13px;
        top: -13px;
        background-color: ${variant.main};
        width: 48px;
        height: 48px;
        opacity: 0.1;
        border-radius: 50%;
    }
    
    :after {
      content: "";
      position: absolute;
      display: none;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      top: 3px;
      width: 10px;
      height: 10px;
      border: solid white 3px;
      border-radius: 50%;
    }
  }
  
  input:checked ~ .radiomark:after {
    display: block;
  }
  
  @media(hover: hover) and (pointer: fine) {
    :hover {
      .radiomark {
        &:before {
          display: block;
        }
      }
    }
  }
`;

type FillContentProps = Props & {
  noContent?: boolean;
  variant: VariantColors;
};

const fillContentStyle = ({ noContent, variant }: FillContentProps) => css`
  .fill {
    ${noContent ? 'display: none' : ''};
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${variant.main};
    opacity: 0.2;
    transform: scale(0, 1);
  }
  
   &[data-value="true"] {
    .fill {
      animation: pulse 0.4s forwards;
    }
  }
  
  &[data-value="false"] {
    .fill {
      animation: reverse-pulse 0.2s forwards;
    }
  }
  
  @keyframes pulse {
    100% {
      transform: scale(1, 1);
    }
  }
  
  @keyframes reverse-pulse {
    0% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(0, 1);
    }
  }
`;

const switchmarkStyle = ({ theme, variant }: CheckmarkProps) => css`
  .switchmark {
    position: relative;
    display: block;
    height: 26px;
    width: 52px;
    min-width: 52px;
    border-radius: 7px;
    background-color: ${variant.main};
    
    .mark {
      left: 2px;
      top: 2px;
      position: absolute;
      display: block;
      background-color:  ${variant.contrastColor};
      width: 20px;
      height: 21px;
      border-radius: 5px;
      
      &.disabled {
        background-color: ${theme.colors.disabled.main};
      }
    }
    
    &:before {
        content: "";
        position: absolute;
        display: none;
        left: -13px;
        top: -13px;
        background-color: ${variant.main};
        width: 48px;
        height: 48px;
        opacity: 0.1;
        border-radius: 50%;
    }
    
    :after {
      content: "";
      position: absolute;
      display: none;
      left: 34px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid ${variant.main};
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  
  input:checked ~ .switchmark:after {
    display: block;
  }
  input:checked ~ .switchmark:before {
    left: 16px;
  }
  input:not(:checked) ~ .switchmark {
    .mark {
      animation: right-to-left 0.6s forwards;
    }
  }
  input:checked ~ .switchmark {
    .mark {
      animation: left-to-right 0.6s forwards;
    }
  }
  
  @media(hover: hover) and (pointer: fine) {
    :hover {
      .switchmark:before {
          display: block;
      }
    }
  }
  
  
  @keyframes left-to-right {
    100% {
      left: 28px;
    }
  }
  
  @keyframes right-to-left {
    0% {
      left: 28px;
    }
    100% {
      left: 2px;
    }
  }
`;

export {
  labelStyle,
  validStyle,
  invalidStyle,
  inputStyle,
  labelFocusInStyle,
  checkmarkStyle,
  fillContentStyle,
  radiomarkStyle,
  switchmarkStyle,
};
