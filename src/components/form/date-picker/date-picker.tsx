import { ButtonIcon } from '@/components';
import React, { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { HelperText } from '@/components/form/helper-text/helper-text';
import { useTheme } from '@emotion/react';
import { Theme, VariantColorsType } from '@/styles/theme';
import IMask from 'imask';
import { Calendar } from '@/components/calendar/calendar';
import { dateToBrFormat } from '@/helpers/date';
import { useEscKeyUp, useOutsideClick } from '@/hooks';
import { FaCalendar } from 'react-icons/fa';
import Styles from './date-picker.style';

const InputWrap = styled.div`${Styles.inputWrap}`;

export type DatePickerProps = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
> & {
  label: string;
  touched?: boolean;
  error?: string;
  className?: string;
  textHelper?: string;
  hideHelper?: boolean;
  fullWidth?: boolean;
  variant?: VariantColorsType;
};

const DatePicker: React.FC<DatePickerProps> = ({
  error,
  touched,
  label,
  className,
  fullWidth,
  textHelper,
  hideHelper,
  variant = 'primary',
  ...inputProps
}: DatePickerProps) => {
  const theme = useTheme() as Theme;
  const contentRef = useRef<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>();
  const [masked, setMasked] = useState(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  useOutsideClick(contentRef, (element: any) => {
    if (element?.target?.className?.includes('calendar__year-view__months__month')) return;
    setShowCalendar(false);
  });

  useEscKeyUp(inputRef, () => {
    setShowCalendar(false);
  });

  useEffect(() => {
    const auxMask = IMask(inputRef.current, { mask: '00/00/0000' });

    setMasked(auxMask);

    return () => {
      auxMask.destroy();
    };
  }, [inputRef]);

  const handleChange = (date: Date) => {
    const fakeEvent: any = {
      target: {
        name: inputProps.name,
        value: dateToBrFormat(date),
      },
    };
    inputProps.onChange(fakeEvent);
    setShowCalendar(false);
    masked.updateValue();
    inputRef.current.focus();
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (!inputProps.readOnly) event.target.readOnly = false;
    if (inputProps.onFocus) inputProps.onFocus(event);
  };

  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };

  const getDataStatus = () => {
    if (!touched || inputProps.disabled) return null;
    return error ? 'invalid' : 'valid';
  };

  return (
    <InputWrap
      className={['input', 'input-datepicker', className].join(' ')}
      data-testid={`${inputProps.name}-wrap`}
      data-status={getDataStatus()}
      variant={theme.colors[variant]}
      fullWidth={fullWidth}
      showCalendar={showCalendar}
      ref={contentRef}
    >
      <input
        {...inputProps}
        title={error}
        data-testid={inputProps.name}
        readOnly
        ref={inputRef}
        placeholder=" "
        onFocus={handleFocus}
        className={inputProps.disabled ? 'disabled' : null}
        autoComplete="off"
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        data-testid={`${inputProps.name}-label`}
        title={error}
        className={inputProps.disabled ? 'disabled' : null}
      >
        {label}
      </label>
      <ButtonIcon
        type="button"
        tabIndex={-1}
        onClick={handleClick}
      >
        <FaCalendar />
      </ButtonIcon>
      <Calendar
        onChange={handleChange}
        value={null}
      />
      { !hideHelper && (
        <HelperText
          dataStatus={getDataStatus()}
          touched={touched}
          error={error}
          textHelper={textHelper}
          disabled={inputProps.disabled}
        />
      ) }
    </InputWrap>
  );
};

export { DatePicker };
