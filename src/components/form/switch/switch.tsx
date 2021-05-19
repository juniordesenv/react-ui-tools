import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { HelperText } from '@/components/form/helper-text/helper-text';
import { useTheme } from 'emotion-theming';
import { Theme, VariantColorsType } from '@/styles/theme';
import Styles from './switch.style';

const SwitchWrap = styled.div`${Styles.switchWrap}`;

type SwitchProps = {
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
  textHelper?: string;
  hideHelper?: boolean;
  noContent?: boolean;
  variant?: VariantColorsType;
};

const Switch: React.FC<SwitchProps> = ({
  error,
  touched,
  label,
  secondaryLabel,
  value,
  forceState,
  className,
  noContent,
  textHelper,
  hideHelper,
  variant = 'primary',
  ...inputProps
}: SwitchProps) => {
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
    <SwitchWrap
      variant={theme.colors[variant]}
      data-status={getDataStatus()}
      data-value={isChecked}
      className={className}
      noContent={noContent}
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
        <span className="switchmark">
          <span className={['mark', inputProps.disabled ? 'disabled' : ''].join(' ')} />
        </span>
        <span className="titles">
          <span>{label}</span>
          { textHelper && (<span className="helper">{secondaryLabel}</span>) }
        </span>
        <div className="fill" />
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
    </SwitchWrap>
  );
};

export { Switch };
