import { css } from '@emotion/react';
import { VariantColors } from '@/styles/theme';

type ChipWrapProps = {
  variant: VariantColors;
};
const chipWrap = ({ variant }: ChipWrapProps) => css`
  background-color: ${variant.main};
  color: ${variant.contrastColor};
  padding: 0;
  border-radius: 16px;
  outline: 0;
  height: 32px;
  display: flex;
  align-items: center;
  
  i {
    color: ${variant.contrastColor};
  }
  
  > span {
    padding: 0 12px;
    display: flex;
    align-items: center;
    
    > button {
      background-color: ${variant.main};
      box-shadow: none;
      border: 0;
      padding: 0;
      height: 20px;
      width: 20px;
      margin-left: 8px;
      margin-right: -4px;
      
      :hover {
        background-color: ${variant.dark};
      }
    }
  }
`;

export default {
  chipWrap,
};
