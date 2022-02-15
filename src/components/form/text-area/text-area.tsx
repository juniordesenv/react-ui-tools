import { useTheme } from 'emotion-theming';
import React, { useRef } from 'react';

import styled from '@emotion/styled';
import { HelperText } from '@/components/form/helper-text/helper-text';
import { Theme, VariantColorsType } from '@/styles/theme';
import Styles from './text-area.style';

const InputWrap = styled.div`${Styles.inputWrap}`;

type InputProps = React.DetailedHTMLProps<
React.TextareaHTMLAttributes<HTMLTextAreaElement>,
HTMLTextAreaElement
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

const TextArea: React.FC<InputProps> = ({
  error,
  touched,
  label,
  className,
  fullWidth,
  textHelper,
  hideHelper,
  variant = 'primary',
  ...inputProps
}: InputProps) => {
  const theme = useTheme() as Theme;
  const inputRef = useRef<HTMLTextAreaElement>();

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>): void => {
    if (!inputProps.readOnly) event.target.readOnly = false;
    if (inputProps.onFocus) inputProps.onFocus(event);
  };

  const getDataStatus = () => {
    if (!touched || inputProps.disabled) return null;
    return error ? 'invalid' : 'valid';
  };

  return (
    <InputWrap
      className={['input', className].join(' ')}
      data-testid={`${inputProps.name}-wrap`}
      data-status={getDataStatus()}
      variant={theme.colors[variant]}
      data-value={inputProps.value}
      fullWidth={fullWidth}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        data-testid={`${inputProps.name}-label`}
        title={error}
        className={inputProps.disabled ? 'disabled' : null}
      >
        {label}
      </label>
      <textarea
        {...inputProps}
        title={error}
        data-testid={inputProps.name}
        readOnly
        ref={inputRef}
        placeholder=" "
        onFocus={handleFocus}
        className={inputProps.disabled ? 'disabled' : null}
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

export { TextArea };
