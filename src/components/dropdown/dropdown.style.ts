import { css } from '@emotion/react';
import { Theme } from '@/styles/theme';

type DropdownWrapProps = {
  isOpen: boolean;
  theme?: Theme;
};

const dropdownWrap = ({
  isOpen, theme,
}: DropdownWrapProps) => css`
  display: ${isOpen ? 'block' : 'none'};
  width: 100%;
  list-style: none;
  position: absolute;
  z-index: 1010;
  background-color: white;
  top: 100%;
  left: 0;
  padding: 8px 0;
  box-shadow: ${theme.card.shadow};
`;

type DropdownItemWrapProps = {
  theme?: Theme;
};

const dropdownItemWrap = ({
  theme,
}: DropdownItemWrapProps) => css`
    width: 100%;
    white-space: nowrap;
    text-align: left;
    
    > button, > * {
      padding: 8px;
      display: inline-block;
      width: 100%;
      text-align: left;
      
      :hover {
        background-color: unset;
      }
    }
    
    
    :hover  {
      background-color: rgba(0, 0, 0, 0.04);
    
      > * {
        color: ${theme.colors.black.dark};
      }
    }
`;

export default {
  dropdownWrap,
  dropdownItemWrap,
};
