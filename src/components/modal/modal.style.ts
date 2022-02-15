import { css } from '@emotion/core';
import { Theme } from '@/styles/theme';

type ModalWrapProps = {
  theme?: Theme;
};

const modalWrap = ({ theme }: ModalWrapProps) => css`
  display: none;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1010;
  
  &.open {
    animation: show-modal 0.6s forwards;
    display: block;
  }
  
  > div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: ${theme.card.shadow};
    min-width: 300px;
  }
  
  @keyframes show-modal {
    0% {
      opacity: 0;
      display: none;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
  
  
  @keyframes hide-modal {
    0% {
      display: block;
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
`;

const modalTitleWrap = css`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  
  .close {
    padding: 0;
  }
`;

const modalContentWrap = css`
  padding: 16px;
`;

const modalActionWrap = css`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding: 16px;
  
  > * {
    margin: 0 4px;
  }
`;

export default {
  modalWrap,
  modalTitleWrap,
  modalContentWrap,
  modalActionWrap,
};
