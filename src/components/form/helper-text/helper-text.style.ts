import { css } from '@emotion/core';
import { Theme } from '@/styles/theme';

type HelperTextProps = {
  theme?: Theme;
};

const helperTextWrap = ({ theme }: HelperTextProps) => css`
  color: ${theme.colors.black.light};
  min-height: 16px;
  display: block;
  
  &[data-status="invalid"] {
    color: ${theme.colors.error.main};
  }
`;

export default {
  helperTextWrap,
};
