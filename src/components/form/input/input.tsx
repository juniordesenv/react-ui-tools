import React, { useEffect, useState } from 'react';

import { useTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import { HelperText } from '@/components/form/helper-text/helper-text';
import { Theme, VariantColorsType } from '@/styles/theme';
import { useIMask } from 'react-imask';
import IMask from 'imask';
import Styles from './input.style';

import Mask from './mask';

const InputWrap = styled.div`${Styles.inputWrap}`;

export type MasksTypes = 'phone' | 'cpf' | 'cnpj' | 'cnj' | 'cpfCnpj' | 'money' | 'postalCode' | 'creditCard' | 'expiryCard' | 'phoneDDI';

export type InputProps = React.DetailedHTMLProps<
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
  mask?: MasksTypes;
  variant?: VariantColorsType;
};

const Input: React.FC<InputProps> = ({
  error,
  touched,
  label,
  className,
  fullWidth,
  textHelper,
  hideHelper,
  placeholder,
  variant = 'primary',
  mask,
  ...inputProps
}: InputProps) => {
  const theme = useTheme() as Theme;
  const [focused, setFocused] = useState(false);
  const { ref, maskRef } = useIMask(Mask[mask]);
  console.log(inputProps.value, 'inputProps.value');
  console.log(ref.current, 'ref');

  useEffect(() => {
    if (maskRef && maskRef.current && maskRef.current.updateValue) {
      if (maskRef.current.value !== inputProps.value && !focused) {
        const maskPipe = IMask.createPipe(Mask[mask] as any);
        maskRef.current.updateValue();
        inputProps.onChange({
          target: {
            name: inputProps.name,
            value: maskPipe(inputProps.value),
          },
        } as any);
      }
    }
  }, [inputProps.value]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    setFocused(true);
    if (!inputProps.readOnly) event.target.readOnly = false;
    if (inputProps.onFocus) Promise.resolve(inputProps.onFocus(event)).then();
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    setFocused(false);
    if (inputProps.onBlur) Promise.resolve(inputProps.onBlur(event)).then();
    if (maskRef.current) maskRef.current.updateValue();
  };

  const getDataStatus = () => {
    if (!touched || focused || inputProps.disabled) return null;
    return error ? 'invalid' : 'valid';
  };

  return (
    <InputWrap
      className={['input', className].join(' ')}
      data-testid={`${inputProps.name}-wrap`}
      data-status={getDataStatus()}
      data-value={inputProps.value}
      variant={theme.colors[variant]}
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
      <input
        {...inputProps}
        title={error}
        data-testid={inputProps.name}
        ref={ref as any}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={inputProps.disabled ? 'disabled' : null}
        autoComplete="off"
      />
      { !hideHelper && (
      <HelperText
        dataStatus={getDataStatus()}
        touched={touched}
        error={error}
        focused={focused}
        textHelper={textHelper}
        disabled={inputProps.disabled}
      />
      ) }
    </InputWrap>
  );
};

export { Input };
