import React from 'react';
import styled from '@emotion/styled';

import { Checkbox } from '@/components';
import { HelperText } from '@/components/form/helper-text/helper-text';
import { VariantColorsType } from '@/styles/theme';
import Styles from './checkbox-group.style';

const CheckboxWrap = styled.div`${Styles.checkboxGroupWrap}`;

type CheckboxGroupOptions = {
  value: any;
  description: string | React.ReactNode;
  secondaryLabel?: string;
};

export type CheckboxGroupProps = {
  title: string;
  touched?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  value: any[];
  name: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  display?: 'inline' | 'block' | 'inline-block' | 'flex' | 'grid';
  options: CheckboxGroupOptions[];
  noContent?: boolean;
  hideHelper?: boolean;
  textHelper?: string;
  variant?: VariantColorsType;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  error,
  touched,
  title,
  name,
  value,
  options,
  display,
  className,
  noContent,
  hideHelper,
  textHelper,
  variant = 'primary',
  ...inputProps
}: CheckboxGroupProps) => {
  const handleChange = (valueChange: any) => {
    const event: any = {
      target: {
        name,
        value: [
          ...value,
        ],
      },
    };
    if (value?.includes(valueChange)) {
      event
        .target
        .value
        .splice(value.indexOf(valueChange), 1);
      inputProps.onChange(event);
    } else {
      event.target.value.push(valueChange);
      inputProps.onChange(event);
    }
  };

  const getDataStatus = () => {
    if (!touched || inputProps.disabled) return null;
    return error ? 'invalid' : 'valid';
  };

  return (
    <CheckboxWrap
      className={['checkbox-group', className].join(' ')}
      display={display}
    >
      <div className="title">
        {title}
      </div>
      <div className="options">
        {
          options.map((opt) => (
            <Checkbox
              variant={variant}
              noContent={noContent}
              key={opt.value}
              label={opt.description}
              value={value?.includes(opt.value)}
              secondaryLabel={opt.secondaryLabel}
              name={name}
              hideHelper
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
          disabled={inputProps.disabled}
        />
      ) }
    </CheckboxWrap>
  );
};

export { CheckboxGroup };
