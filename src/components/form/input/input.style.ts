import { css } from '@emotion/core';
import { Theme, VariantColors } from '@/styles/theme';
import {
  inputStyle, invalidStyle, labelFocusInStyle, labelStyle, validStyle,
} from '@/components/form/common.style';

interface InputWrapProps {
  theme?: Theme;
  variant: VariantColors;
  fullWidth?: boolean;
}

const inputWrap = ({ theme, variant, fullWidth }: InputWrapProps) => css`
  position: relative;
  ${fullWidth ? 'width: 100%' : ''};
  
  label {
    ${labelStyle({ theme })}
  }
  
  input {
    ${inputStyle({ theme, variant })}
    
    &:not(:placeholder-shown) + label {
      color: ${theme.colors.primary.main}; 
      transform: scale(0.9) translateY(-20px);
    }
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
  
  &:focus-within {
      label {
        ${labelFocusInStyle({ variant })}
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

export default {
  inputWrap,
  helperText,
};
