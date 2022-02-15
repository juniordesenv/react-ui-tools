import { Theme, VariantColorsLevel, VariantColorsType } from '@/styles/theme';
import { useTheme } from 'emotion-theming';
import React from 'react';
import styled from '@emotion/styled';

import Styles from './typography.style';

const TypographyWrap = styled.div`${Styles.typographyWrap}`;

export type TypographyProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';
  children: React.ReactNode;
  display?: 'inline' | 'block' | 'none';
  variant?: VariantColorsType;
  scale?: VariantColorsLevel,
  className?: string;
  fontWeight?: 'normal' | '400' | '500' | '600' | '700' | 'bold';
  'data-testid'?: string;
};

const Typography: React.FC<TypographyProps> = ({
  as = 'p',
  children,
  variant = 'typography',
  display,
  fontWeight = 'normal',
  className,
  scale = 'main',
  ...props
}: TypographyProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const dataTestId = props['data-testid'];
  const theme = useTheme() as Theme;

  // @ts-ignore
  return (
    <TypographyWrap
      // @ts-ignore
      as={as}
      className={['typography', `typography-${as}`, className].join(' ')}
      scale={scale}
      display={display}
      variant={theme.colors[variant]}
      fontWeight={fontWeight}
      data-testid={dataTestId}
    >
      { children }
    </TypographyWrap>
  );
};

export { Typography };
