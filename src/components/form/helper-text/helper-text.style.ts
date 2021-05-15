import { css } from '@emotion/react';
import { Theme } from '@/styles/theme';

type HelperTextProps = {
  theme?: Theme;
};

const helperTextWrap = ({ theme }: HelperTextProps) => css`
  color: ${theme.colors.black.light};
  min-height: 16px;
  display: block;
  margin-bottom: 8px;
  
  &[data-status="invalid"] {
    color: ${theme.colors.error.main};
  }
`;

export default {
  helperTextWrap,
};
