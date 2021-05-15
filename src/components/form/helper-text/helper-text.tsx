import React from 'react';
import styled from '@emotion/styled';

import Styles from './helper-text.style';

const HelperTextWrap = styled.span`${Styles.helperTextWrap}`;

type HelperTextProps = {
  touched?: boolean;
  error?: string;
  textHelper?: string;
  dataStatus?: 'valid' | 'invalid' | null;
  disabled: boolean;
};

const HelperText: React.FC<HelperTextProps> = ({
  touched,
  error,
  textHelper,
  dataStatus,
  disabled,
}: HelperTextProps) => (
  <HelperTextWrap
    data-status={dataStatus}
  >
    {touched && error && !disabled ? error : textHelper}
  </HelperTextWrap>
);

export { HelperText };
