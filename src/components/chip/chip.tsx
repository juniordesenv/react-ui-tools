import React from 'react';
import styled from '@emotion/styled';

import { Theme, VariantColorsType } from '@/styles/theme';
import { useTheme } from '@emotion/react';
import Styles from './chip.style';

const ChipWrap = styled.div`${Styles.chipWrap}`;

export type ChipProps = React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement> & {
  variant?: VariantColorsType;
  endAdornment?: React.ReactNode;
};

const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'primary',
  className,
  endAdornment = null,
  ...props
}: ChipProps) => {
  const theme = useTheme() as Theme;

  return (
    <ChipWrap
      {...props}
      variant={theme.colors[variant]}
      className={['chip', className].join(' ')}
    >
      <span>
        {children}
        {endAdornment}
      </span>
    </ChipWrap>
  );
};

export { Chip };
