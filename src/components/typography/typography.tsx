import { Theme, VariantColorsLevel, VariantColorsType } from '@/styles/theme';
import { useTheme } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';

import Styles from './typography.style';

const TypographyWrap = styled.div`${Styles.typographyWrap}`;

export type TypographyProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';
  children: React.ReactNode;
  display?: 'inline' | 'block' | 'none';
  variant?: VariantColorsType;
  variantLevel?: VariantColorsLevel,
  className?: string;
  fontWeight?: 'normal' | '400' | '500' | '600' | '700' | 'bold';
  'data-testid'?: string;
};

const Typography: React.FC<TypographyProps> = ({
  as = 'p',
  children,
  variant,
  display,
  fontWeight = 'normal',
  className,
  variantLevel = 'main',
  ...props
}: TypographyProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const dataTestId = props['data-testid'];
  const theme = useTheme() as Theme;

  const renderTag = () => {
    switch (as) {
      case 'h1':
        return (<h1 data-testid={dataTestId}>{children}</h1>);
      case 'h2':
        return (<h2 data-testid={dataTestId}>{children}</h2>);
      case 'h3':
        return (<h3 data-testid={dataTestId}>{children}</h3>);
      case 'h4':
        return (<h4 data-testid={dataTestId}>{children}</h4>);
      case 'h5':
        return (<h5 data-testid={dataTestId}>{children}</h5>);
      case 'h6':
        return (<h6 data-testid={dataTestId}>{children}</h6>);
      case 'small':
        return (<small data-testid={dataTestId}>{children}</small>);
      case 'p':
      default:
        return (<p data-testid={dataTestId}>{children}</p>);
    }
  };

  return (
    <TypographyWrap
      className={['typography', `typography-${as}`, className].join(' ')}
      variantLevel={variantLevel}
      display={display}
      variant={theme.colors[variant]}
      fontWeight={fontWeight}
    >
      { renderTag() }
    </TypographyWrap>
  );
};

export { Typography };
