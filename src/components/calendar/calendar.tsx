import { useTheme } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';

import ReactCalendar, { CalendarProps as ReactCalendarProps } from 'react-calendar';

import { Theme, VariantColorsType } from '@/styles/theme';
import Styles from './calendar.style';

const CalendarWrap = styled.div`${Styles.calendarWrap}`;

type CalendarProps = ReactCalendarProps & {
  variant?: VariantColorsType;
};

const Calendar: React.FC<CalendarProps> = ({
  variant = 'primary',
  className,
  ...props
}: CalendarProps) => {
  const theme = useTheme() as Theme;

  return (
    <CalendarWrap
      className={['calendar', className].join('')}
      variant={theme.colors[variant]}
    >
      <ReactCalendar
        locale="pt-Br"
        {...props}
      />
    </CalendarWrap>
  );
};

export { Calendar };
