import { css } from '@emotion/core';
import { Theme, VariantColors } from '@/styles/theme';
import {
  fillContentStyle,
  inputStyle,
  invalidStyle, radiomarkStyle,
  validStyle,
} from '@/components/form/common.style';

interface RadioWrapGroupProps {
  display: 'inline' | 'block' | 'inline-block' | 'flex' | 'grid';
  inlineLabel?: boolean;
}

const radioGroupWrap = ({ display = 'inline-block', inlineLabel }: RadioWrapGroupProps) => css`
  ${inlineLabel && `
    display: flex;
    flex-direction: row;
    align-items: center;
    
    label {
      margin-right: 16px;
    } 
  `}
  
  label {
    margin-bottom: 8px;
  }
  
  .options {
    margin: 0 -4px;
    
    > div {
      display: ${display};
      padding: 0 4px;
    }
  }
`;

const noContentDisabled = () => css`
  border: 0;
  &.disabled {
    opacity: 0.6;
  }
`;

interface RadioWrapProps {
  theme?: Theme;
  noContent?: boolean;
  variant: VariantColors;
}

const radioWrap = ({
  theme, variant, noContent,
}: RadioWrapProps) => css`
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
  
  ${radiomarkStyle({ theme, variant })};
   
  ${fillContentStyle({ theme, variant, noContent })};
`;

export default {
  radioGroupWrap,
  radioWrap,
};
