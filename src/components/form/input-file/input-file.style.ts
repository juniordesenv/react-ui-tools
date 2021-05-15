import { css } from '@emotion/react';
import { Theme, VariantColors } from '@/styles/theme';
import { invalidStyle, validStyle } from '@/components/form/common.style';

type InputFileWrapProps = {
  theme?: Theme;
  variant: VariantColors;
  fullWidth?: boolean;
  isActive: boolean;
};

const inputFileWrap = ({ theme, variant, isActive }: InputFileWrapProps) => css`
  outline: none;
  
  :hover, :active {
    outline: none;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
    
  > div {
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${isActive ? variant.main : '#eeeeee'};
    border-style: solid;
    background-color: #fafafa;
    color: #bdbdbd;
    transition: border .24s ease-in-out;
    min-height: 135px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 8px;
    
    .typography {
      margin-top: 8px;
    }
    
    :hover, :active {
      outline: none;
      border-color: ${variant.main};
    }
    
     ul {
        list-style-type: none;
        padding: 0;
        overflow: hidden;
        max-width: 360px;
        margin: auto;
      }
      
      .file-item {
        max-width: 360px;
        margin: auto;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        
        .circle-progress-bar {
          margin-right: 8px;
        }
        
        button {
          background-color: transparent;
          border: 0;
          box-shadow: none;
          
          i:hover {
            color: ${variant.main};
          }
          
          :hover {
            background-color: transparent;
          }
        }
      }
  }
  
  
  &[data-status="valid"] {
    > div {
      ${validStyle({ theme })}
    }
  }
  
  &[data-status="invalid"] {
    > div {
      ${invalidStyle({ theme })}
    }
  }
  
  .content-images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: unset;
    
    > li {
      width: unset;
      margin: 8px;
      
      div {
        position: absolute;
        left: 0;
      }
      
      button {
        position: absolute;
        right: 0;
      }
    }
  }
`;

export default {
  inputFileWrap,
};
