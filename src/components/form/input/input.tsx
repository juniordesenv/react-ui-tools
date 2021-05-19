import React, { useEffect, useRef, useState } from 'react';

import { useTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import { HelperText } from '@/components/form/helper-text/helper-text';
import { Theme, VariantColorsType } from '@/styles/theme';
import IMask from 'imask';
import Styles from './input.style';

import Mask from './mask';

const InputWrap = styled.div`${Styles.inputWrap}`;

export type MasksTypes = 'phone' | 'cpf' | 'cnpj' | 'cpfCnpj' | 'money' | 'postalCode' | 'creditCard' | 'expiryCard';

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
  variant = 'primary',
  mask,
  ...inputProps
}: InputProps) => {
  const theme = useTheme() as Theme;
  const inputRef = useRef<HTMLInputElement>();
  const [masked, setMasked] = useState<IMask.InputMask<any>>(null);

  useEffect(() => {
    if (!mask) return () => {};
    const maskedTemp = IMask(inputRef.current, Mask[mask]);

    setMasked(maskedTemp);

    return () => {
      maskedTemp.destroy();
      setMasked(null);
    };
  }, [inputRef]);

  useEffect(() => {
    if (masked) {
      masked.updateValue();
      if (masked.value !== inputProps.value) {
        inputProps.onChange({
          target: {
            name: inputProps.name,
            value: masked.value,
          },
        } as any);
      }
    }
  }, [inputProps.value, masked]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
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
      fullWidth={fullWidth}
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

export { Input };
