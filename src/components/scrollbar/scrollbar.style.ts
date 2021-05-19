import { css } from '@emotion/core';

const scrollbarWrap = css`
  .ScrollbarsCustom-TrackY {
    top: 0 !important;
    height: 100% !important;
    width: 8px !important;
  }
  
  .ScrollbarsCustom-TrackX {
    height: 8px !important;
  }
`;

export default {
  scrollbarWrap,
};
