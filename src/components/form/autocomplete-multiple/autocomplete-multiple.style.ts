import { css } from '@emotion/core';
import { Theme, VariantColors } from '@/styles/theme';
import {
  inputStyle, invalidStyle, labelFocusInStyle, labelStyle, validStyle,
} from '@/components/form/common.style';

interface InputWrapProps {
  theme?: Theme;
  variant: VariantColors;
  fullWidth?: boolean;
  inputHeight: number;
  hasValue: boolean;
}

const inputWrap = ({
  theme, variant, fullWidth, inputHeight, hasValue,
}: InputWrapProps) => css`
  ${fullWidth ? 'width: 100%' : ''};
  
  .autocomplete-input {
    position: relative;
    ${inputStyle({ theme, variant })};
    padding: 14px 12px 2px 12px;
    display: flex;
    cursor: text;
    align-items: flex-end;
    flex-wrap: wrap;
    
    .chip {
      height: 26px;
      margin-top: 8px;
      margin-right: 8px;
    }
  }
  
  input {
    flex-grow: 1;
    border: none;
    background-color: transparent;
    outline: none;
    height: 100%;
    margin-bottom: 4px;
    margin-top: 8px;
  }
  
  label {
    ${labelStyle({ theme })};
    
    ${hasValue ? `
    color: ${theme.colors.primary.main}; 
    transform: scale(0.9) translateY(-20px);
    ` : ''};
  }
  
  :focus + label {
    color: ${theme.colors.primary.main}; 
    transform: scale(0.9) translateY(-20px);
  }
  
  
  &[data-status="valid"] {
    .autocomplete-input {
      ${validStyle({ theme })}
    }
  }
  
  &[data-status="invalid"] {
    .autocomplete-input {
      ${invalidStyle({ theme })}
    }
  }
  
  &:focus-within {
      label {
        ${labelFocusInStyle({ variant })}
      }
  }
  
  ul {
      position: absolute;
      top: ${inputHeight}px;
      left: 0;
      width: 100%;
      padding: 8px 0;
      box-shadow: ${theme.card.shadow};
      background-color: white;
      list-style: none;
      z-index: 4;
      
      li {
        button {
          cursor: pointer;
          outline: none;
          border: none;
          text-align: left;
          width: 100%;
          height: 100%;
          padding: 8px;
          background-color: transparent;
          
          :focus,:hover {
            background-color: #FAFAFA;
            border: none;
          }
        }
      }
    }
`;

interface HelperTextProps {
  theme?: Theme
}

const helperText = ({ theme }: HelperTextProps) => css`
  color: ${theme.colors.black.light};
  
  &[data-status="invalid"] {
    color: ${theme.colors.error.main};
  }
`;

interface LiNotFoundWrapProps {
  theme?: Theme
}

const liNotFoundWrap = ({ theme }: LiNotFoundWrapProps) => css`
  padding: 8px;
  display: flex;
  justify-content: center;
  color: ${theme.colors.disabled.main};
`;

export default {
  inputWrap,
  helperText,
  liNotFoundWrap,
};
