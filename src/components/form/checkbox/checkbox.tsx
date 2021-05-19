import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { HelperText } from '@/components/form/helper-text/helper-text';
import { useTheme } from 'emotion-theming';
import { Theme, VariantColorsType } from '@/styles/theme';
import Styles from './checkbox.style';

const CheckboxWrap = styled.div`${Styles.checkboxWrap}`;

type CheckboxProps = {
  label: string | React.ReactNode;
  secondaryLabel?: string;
  touched?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  className?: string;
  value: any;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  forceState?: 'valid' | 'invalid' | null;
  textHelper?: string;
  noContent?: boolean;
  hideHelper?: boolean;
  variant?: VariantColorsType;
};

const Checkbox: React.FC<CheckboxProps> = ({
  error,
  touched,
  label,
  secondaryLabel,
  textHelper,
  value,
  noContent,
  forceState,
  className,
  hideHelper,
  variant = 'primary',
  ...inputProps
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const theme = useTheme() as Theme;

  useEffect(() => {
    if (value.toString() === 'true') setIsChecked(true);
    else setIsChecked(false);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputProps.readOnly) return;
    const nextValue = value.toString() === 'true' ? 'false' : 'true';
    inputProps.onChange({
      ...event,
      target: {
        ...event.target,
        name: inputProps.name,
        value: nextValue,
      },
    });
  };

  const getDataStatus = () => {
    if (forceState) return forceState;
    if (!touched || inputProps.disabled) return null;
    return error ? 'invalid' : 'valid';
  };

  return (
    <CheckboxWrap
      variant={theme.colors[variant]}
      data-status={getDataStatus()}
      data-value={isChecked}
      noContent={noContent}
      className={['checkbox', className].join(' ')}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        className={inputProps.disabled ? 'disabled' : null}
      >
        <input
          type="checkbox"
          {...inputProps}
          onChange={handleChange}
          checked={isChecked}
        />
        <span className="checkmark" />
        <span className="titles">
          <span>{label}</span>
          { secondaryLabel && (<span className="helper">{secondaryLabel}</span>) }
        </span>
        <div className="fill" />
      </label>
      { !hideHelper && (
      <HelperText
        textHelper={textHelper}
        dataStatus={getDataStatus()}
        touched={touched}
        error={error}
        disabled={inputProps.disabled}
      />
      ) }
    </CheckboxWrap>
  );
};

export { Checkbox };
