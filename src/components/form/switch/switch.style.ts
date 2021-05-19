import { css } from '@emotion/core';
import {
  fillContentStyle,
  inputStyle,
  invalidStyle, switchmarkStyle,
  validStyle,
} from '@/components/form/common.style';
import { Theme, VariantColors } from '@/styles/theme';

const noContentDisabled = () => css`
  border: 0;
  &.disabled {
    opacity: 0.6;
  }
`;

interface SwitchWrapProps {
  theme?: Theme;
  noContent?: boolean;
  variant: VariantColors;
}

const switchWrap = ({ theme, variant, noContent }: SwitchWrapProps) => css`
  position: relative;
  display: inline-block;
  
  label {
    ${!noContent ? inputStyle({ theme, variant }) : noContentDisabled()};
    display: flex;
    position: relative;
    padding: 12px 16px;
    overflow: hidden;
    align-items: center;
    cursor: pointer;
  }
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  .titles {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    
    .helper {
      margin-top: 4px;
      color: ${theme.colors.black.light}
    }
  }
  
  
  &[data-status="valid"] {
    > label {
      ${noContent ? '' : validStyle({ theme })};
    }
  }
  
  &[data-status="invalid"] {
    > label {
      ${noContent ? '' : invalidStyle({ theme })};
    }
  }
  
  ${switchmarkStyle({ theme, variant })};
   
  ${fillContentStyle({ theme, variant, noContent })};
`;

export default {
  switchWrap,
};
