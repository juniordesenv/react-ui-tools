import { css } from '@emotion/core';
import {
  checkmarkStyle,
  fillContentStyle,
  inputStyle,
  invalidStyle,
  validStyle,
} from '@/components/form/common.style';
import { Theme, VariantColors } from '@/styles/theme';

const noContentDisabled = () => css`
  border: 0;
  &.disabled {
    opacity: 0.6;
  }
`;

interface CheckboxWrapProps {
  theme?: Theme;
  variant: VariantColors;
  noContent?: boolean;
}

const checkboxWrap = ({ theme, variant, noContent }: CheckboxWrapProps) => css`
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
      color: ${theme.colors.black.light};
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
  
  ${checkmarkStyle({ theme, variant })};
   
  ${fillContentStyle({ theme, variant, noContent })};
`;

export default {
  checkboxWrap,
};
