import React from 'react';
import styled from '@emotion/styled';

import { HelperText } from '@/components/form/helper-text/helper-text';
import { VariantColorsType } from '@/styles/theme';
import Styles from './radio-group.style';
import { Radio } from './radio';

const RadioWrap = styled.div`${Styles.radioGroupWrap}`;

type RadioGroupOptions = {
  value: any;
  description: string;
  secondaryLabel?: string;
};

type RadioGroupProps = {
  title: string;
  touched?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  inlineLabel?: boolean;
  value: any;
  name: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  display?: 'inline' | 'block' | 'inline-block' | 'flex' | 'grid';
  options: RadioGroupOptions[];
  noContent?: boolean;
  textHelper?: string;
  hideHelper?: boolean;
  variant?: VariantColorsType;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  error,
  touched,
  title,
  name,
  value,
  options,
  display,
  className,
  noContent,
  textHelper,
  hideHelper,
  disabled,
  variant,
  inlineLabel,
  ...inputProps
}: RadioGroupProps) => {
  const handleChange = (valueChange: any) => {
    const event: any = {
      target: {
        name,
        value: valueChange,
      },
    };
    inputProps.onChange(event);
  };

  const getDataStatus = () => {
    if (!touched || disabled) return null;
    return error ? 'invalid' : 'valid';
  };

  return (
    <RadioWrap
      className={['radio-group', className].join(' ')}
      display={display}
      inlineLabel={inlineLabel}
    >
      <label>
        {title}
      </label>
      <div className="options">
        {
          options.map((opt) => (
            <Radio
              isGroup
              disabled={disabled}
              data-testid={name}
              variant={variant}
              noContent={noContent}
              key={opt.value}
              label={opt.description}
              value={value?.includes(opt.value)}
              name={name}
              secondaryLabel={opt.secondaryLabel}
              forceState={getDataStatus()}
              onChange={() => {
                handleChange(opt.value);
              }}
              onBlur={() => {
                const event: any = {
                  target: {
                    name,
                  },
                };
                inputProps.onBlur(event);
              }}
            />
          ))
        }
      </div>
      { !hideHelper && (
        <HelperText
          dataStatus={getDataStatus()}
          touched={touched}
          error={error}
          textHelper={textHelper}
          disabled={disabled}
        />
      ) }
    </RadioWrap>
  );
};

export { RadioGroup };
