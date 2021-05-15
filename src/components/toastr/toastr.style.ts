import { css } from '@emotion/react';
import { Theme, VariantColorsType } from '@/styles/theme';

const toastrWrap = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1040;
  right: 0;
  top: 200px;
  overflow: hidden;
  width: 300px;
  max-width: 100%;
`;

type MessageWrapProps = {
  theme?: Theme;
  variant: VariantColorsType;
  seconds: number;
};

const messageWrap = ({ theme, seconds, variant }: MessageWrapProps) => css`
    list-style: none;
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: ${theme.colors[variant].light};
    color: ${theme.colors[variant].contrastColor};
    animation: show 1.5s both;
    width: 100%;
    box-shadow: ${theme.card.shadow};
    padding: 8px 0;
    
    i {
      color: ${theme.colors[variant].contrastColor};
    }
 
    :before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: ${theme.colors[variant].dark};
      animation: hide-progress both ${seconds}s 1.5s;
    }
  
    @keyframes show {
      0% {
        right: -300px;
      }
      100% {
        right: 0;
      }
    }
    
    @keyframes hide-progress {
      0% {
        width: 100%;
      }
      100% {
        width: 0;
      }
    }
`;

const iconMessageWrap = css`
  align-items: center;
  padding: 16px;
`;

const contentMessageWrap = css`
  align-items: center;
  flex-grow: 1;
  display: flex;
`;

const closeMessageWrap = css`
  align-items: center;
  padding: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default {
  toastrWrap,
  messageWrap,
  iconMessageWrap,
  contentMessageWrap,
  closeMessageWrap,
};
