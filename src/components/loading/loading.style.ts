import { css } from '@emotion/react';

const loadingWrap = ({ size }: { size: number }) => css`
  div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  
  div:nth-of-type(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: ${size}px;
      left: ${size}px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: ${size * 2}px;
      height: ${size * 2}px;
      opacity: 0;
    }
  }
`;

export default {
  loadingWrap,
};
