import { css } from '@emotion/core';
import { Theme, VariantColors } from '@/styles/theme';
import {
  inputStyle, invalidStyle, labelFocusInStyle, labelStyle, validStyle,
} from '@/components/form/common.style';

interface InputWrapProps {
  theme?: Theme;
  variant: VariantColors;
  fullWidth?: boolean;
  showCalendar: boolean
}

const inputWrap = ({
  theme, variant, fullWidth, showCalendar,
}: InputWrapProps) => css`
  position: relative;
  ${fullWidth ? 'width: 100%' : ''};
  
  label {
    ${labelStyle({ theme })};
    background-color: ${theme.input.bgColor};
    padding-top: 8px;
    top: 16px;
    
    &.disabled {
      background-color: ${theme.colors.disabled.light};
    }
  }
  
  input {
    ${inputStyle({ theme, variant })};
    padding-right: 58px;    
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
  
  .button-icon {
    position: absolute;
    right: 16px;
    top: 8px;
  }
  
  .calendar {
    width: 100%;
    display: ${showCalendar ? 'block' : 'none'};
    position: absolute;
    left: 0;
    top: 53px;
    z-index: 1010;
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
