import { Theme } from '@/styles/theme';
import { css } from '@emotion/core';

const paginationWrap = css`
  width: 100%;
  border-radius: 0 0 5px 5px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  border-right: 1px solid rgba(224, 224, 224, 1);
  border-left: 1px solid rgba(224, 224, 224, 1);
  background-color:white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const buttonWrap = css`
    position: relative;
    padding: 0 8px;
    
    li {
      padding: 8px;
    }
    
    button {
      padding: 8px;
      
      :hover, :focus, :active {
        background-color: transparent;
        box-shadow: none;
      }
    
    }
`;

export type InfoWrapProps = {
  theme?: Theme;
};

const infoWrap = ({ theme }: InfoWrapProps) => css`
  display: flex;
  align-items: center;
  
  > div { 
    padding: 0 8px;
    display: flex;
    
    button[data-status="disabled"] {
      background-color: transparent;
      cursor: default;      
      
      > i {
        color: ${theme.colors.disabled.main};
      }
    }
    
    button, button:hover, button:active, button:focus {
      background-color: transparent;
      box-shadow: none;
      border: none;
    }
    
    button:first-of-type { 
      margin-right: 8px;
    }
    
    button:last-of-type { 
      margin-right: -8px;
    }
  }
`;

export default {
  paginationWrap,
  buttonWrap,
  infoWrap,
};
