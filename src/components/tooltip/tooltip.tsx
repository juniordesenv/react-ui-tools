import { VariantColorsType } from '@/styles/theme';
import React, { useState } from 'react';
import styled from '@emotion/styled';

import Styles from './tooltip.style';

const TooltipWrap = styled.div`${Styles.tooltipWrap}`;

export type TooltipProps = React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement
> & {
  delay?: number;
  children: React.ReactNode;
  className?: string;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  title: string | React.ReactNode;
  color?: VariantColorsType;
  scale?: 'main' | 'light' | 'dark';
};

const Tooltip: React.FC<TooltipProps> = ({
  delay,
  className,
  children,
  direction,
  title,
  scale,
  color,
  ...props
}: TooltipProps) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <TooltipWrap
      {...props}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      className={['tooltip', className].join(' ')}
      scale={scale}
      color={color}
    >
      {children}
      {active && (
        <div className={`tooltip-tip ${direction || 'top'}`}>
          {title}
        </div>
      )}
    </TooltipWrap>
  );
};

export { Tooltip };
