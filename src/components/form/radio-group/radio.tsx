import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { HelperText } from '@/components/form/helper-text/helper-text';
import { Theme, VariantColorsType } from '@/styles/theme';
import { useTheme } from 'emotion-theming';
import Styles from './radio-group.style';

const RadioWrap = styled.div`${Styles.radioWrap}`;

export type RadioProps = {
  label: string;
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
  isGroup?: boolean;
  textHelper?: string;
  noContent?: boolean;
  variant?: VariantColorsType;
};

const Radio: React.FC<RadioProps> = ({
  error,
  touched,
  label,
  secondaryLabel,
  textHelper,
  value,
  noContent,
  forceState,
  className,
  isGroup,
  variant = 'primary',
  ...inputProps
}: RadioProps) => {
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
    <RadioWrap
      variant={theme.colors[variant]}
      data-status={getDataStatus()}
      data-value={isChecked}
      noContent={noContent}
      className={className}
      data-testid={`${inputProps.name}-wrap`}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        data-testid={`${inputProps.name}-label`}
        className={inputProps.disabled ? 'disabled' : null}
      >
        <input
          type="radio"
          {...inputProps}
          data-testid={`${inputProps.name}`}
          onChange={handleChange}
          checked={isChecked}
          value={value}
        />
        <span className="radiomark" />
        <span className="titles">
          <span data-testid={`${inputProps.name}-text`}>{label}</span>
          { secondaryLabel && (<span className="helper">{secondaryLabel}</span>) }
        </span>
        <div className="fill" />
      </label>
      { !isGroup && (
      <HelperText
        textHelper={textHelper}
        dataStatus={getDataStatus()}
        touched={touched}
        error={error}
        disabled={inputProps.disabled}
      />
      ) }
    </RadioWrap>
  );
};

export { Radio };
