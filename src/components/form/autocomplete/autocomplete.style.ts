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
}

const inputWrap = ({
  theme, variant, fullWidth, inputHeight,
}: InputWrapProps) => css`
  position: relative;
  ${fullWidth ? 'width: 100%' : ''};
  
  label {
    ${labelStyle({ theme })}
  }
  
  input {
    ${inputStyle({ theme, variant })}
  }
  
  
  &[data-status="valid"] {
    > input {
      ${validStyle({ theme })}
    }
  }
  
  &[data-status="invalid"] {
    > input {
      ${invalidStyle({ theme })}
    }
  }

  &:focus-within, :not([data-value='']) {
    label {
      ${labelFocusInStyle({ variant })}
    }
  }
  
  .content-options {
    margin: 0;
    padding: 8px 0;
    box-shadow: ${theme.card.shadow};
    background-color: white;
    height: max-content;
    max-height: 300px;
    position: absolute;
    overflow-y: auto;
    top: ${inputHeight}px;
    left: 0;
    width: 100%;
    z-index: 4;
  }
  
  ul {
      list-style: none;
      
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
  theme: Theme
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
