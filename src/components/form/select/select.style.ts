import { css } from '@emotion/core';
import { Theme, VariantColors } from '@/styles/theme';
import {
  inputStyle, invalidStyle, labelStyle, validStyle,
} from '@/components/form/common.style';

interface SelectWrapProps {
  theme?: Theme;
  variant?: VariantColors;
  fullWidth?: boolean;
}

const selectWrap = ({ theme, variant, fullWidth }: SelectWrapProps) => css`
  position: relative;
  ${fullWidth ? 'width: 100%' : ''};
  
  label {
    ${labelStyle({ theme })}
  }
  
  .select {
    ${inputStyle({ theme, variant })};
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding: 22px 8px 12px 12px;
    
    
    &.disabled {
      cursor: unset;
    }
    
    :focus {
      box-shadow: 0 1px 3px ${variant.main}, 0 1px 0 rgba(0,0,0,.02);
    }
    
    
    i {
      margin-left: 4px;
      color: ${variant.main}; 
    }
    
    ul {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      padding: 8px 0;
      box-shadow: ${theme.card.shadow};
      background-color: white;
      list-style: none;
      z-index: 4;
      max-height: 300px;
      overflow-y: scroll;
      
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
  }
  
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  
  &:not([data-value=""]) > label {
    color: ${variant.main}; 
    transform: scale(0.9) translateY(-20px);
  }
  
  &[data-status="valid"] {
    > .select {
      ${validStyle({ theme })}
    }
  }
  
  &[data-status="invalid"] {
    > .select {
      ${invalidStyle({ theme })}
    }
  }
  
  &:focus-within {
      label {
        transform: scale(0.9) translateY(-20px);
        color: ${variant.main};
      }
  }
  
`;

export default {
  selectWrap,
};
