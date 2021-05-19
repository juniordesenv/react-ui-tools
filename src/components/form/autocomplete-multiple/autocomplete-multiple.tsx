import React, { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { HelperText } from '@/components/form/helper-text/helper-text';
import { Theme, VariantColorsType } from '@/styles/theme';
import { useEscKeyUp, useOutsideClick, useTabKeyUp } from '@/hooks';
import { ButtonIcon, Chip } from '@/components';
import { FaTimes } from 'react-icons/fa';
import { useTheme } from 'emotion-theming';
import Styles from './autocomplete-multiple.style';

const InputWrap = styled.div`${Styles.inputWrap}`;
const LiNotFoundWrap = styled.div`${Styles.liNotFoundWrap}`;

type Option = {
  value: any;
  description: string;
};

export type AutocompleteMultipleProps = React.DetailedHTMLProps<
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
  options: Option[];
  value: any[];
};

const AutocompleteMultiple: React.FC<AutocompleteMultipleProps> = ({
  error,
  touched,
  label,
  className,
  fullWidth,
  textHelper,
  hideHelper,
  variant = 'primary',
  options,
  ...inputProps
}: AutocompleteMultipleProps) => {
  const theme = useTheme() as Theme;
  const [value, setValue] = useState('');
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [forceValidationOnExit, setForceValidationOnExit] = useState<boolean>(false);
  const [triggerValidation, setTriggerValidation] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>();
  const inputRef = useRef<HTMLInputElement>();
  const autocompleteRef = useRef<HTMLDivElement>();

  useOutsideClick(menuRef, () => {
    if (showDropdown && !inputFocused) {
      setShowDropdown(false);
    }
  });

  useEscKeyUp(menuRef, () => {
    setTriggerValidation(false);
    setShowDropdown(false);
    setForceValidationOnExit(true);
  });

  useTabKeyUp(menuRef, () => {
    if (showDropdown) {
      setShowDropdown(false);
      setTriggerValidation(true);
    }
  });

  const validOptions = () => {
    const fakeEvent: any = {
      target: {
        name: inputProps.name,
      },
    };
    if (inputProps.onBlur) inputProps.onBlur(fakeEvent);
    const exist = options.some((opt) => opt.description.toLowerCase() === value.toLowerCase());
    if (!exist) setValue('');
  };

  useEffect(() => {
    if (!showDropdown && triggerValidation) {
      validOptions();
    }
  }, [triggerValidation, showDropdown]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    setInputFocused(true);
    if (!showDropdown) setShowDropdown(true);
    if (!triggerValidation) setTriggerValidation(true);
    if (!inputProps.readOnly) event.target.readOnly = false;
    if (inputProps.onFocus) inputProps.onFocus(event);
  };

  const getDataStatus = () => {
    if (!touched || inputProps.disabled) return null;
    return error ? 'invalid' : 'valid';
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (!showDropdown) {
      setShowDropdown(true);
      setTriggerValidation(true);
    }
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  const handleBlurWrap = () => {
    if (forceValidationOnExit) setTriggerValidation(true);
  };

  const changeOption = (opt: Option) => {
    if (inputProps.readOnly || inputProps.disabled) return;
    const event:any = {
      target: {
        name: inputProps.name,
        value: [...inputProps.value, opt.value],
      },
    };
    inputProps.onChange(event);
    setValue('');
    setShowDropdown(false);
  };

  const handleMouseEnterOption = (optIndex: number) => {
    if (menuRef && menuRef.current) {
      const ul = menuRef?.current;
      const button = ul.children[optIndex].children[0] as HTMLButtonElement;
      button.focus();
    }
  };

  const handleKeyDownOption = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    key: string,
    optIndex: number,
  ) => {
    if (menuRef && menuRef.current) {
      const ul = menuRef?.current;
      if (key === 'ArrowUp' && optIndex > 0) {
        event.preventDefault();
        const button = ul.children[optIndex - 1].children[0] as HTMLButtonElement;
        button.focus();
      } else if (key === 'ArrowDown' && optIndex < (options.length - 1)) {
        event.preventDefault();
        const button = ul.children[optIndex + 1].children[0] as HTMLButtonElement;
        button.focus();
      }
    }
  };

  const handleRemove = (valueInput: any) => {
    setShowDropdown(false);
    const aux = [...inputProps.value];
    aux.splice(inputProps.value.indexOf(valueInput), 1);
    const event:any = {
      target: {
        name: inputProps.name,
        value: aux,
      },
    };
    inputProps.onChange(event);
  };

  const handleClick = () => {
    setShowDropdown(true);
  };

  const renderOptions = () => {
    const filtered = options
      .filter((opt) => opt.description.toLowerCase().includes(value.toLowerCase())
          && !inputProps.value.includes(opt.value))
      .slice(0, 9)
      .map((opt, optIndex) => (
        <li key={opt.value.toString()}>
          <button
            tabIndex={-1}
            data-testid={`${inputProps.name}-opts`}
            data-value={opt.value}
            onClick={() => {
              changeOption(opt);
            }}
            type="button"
            onMouseEnter={() => { handleMouseEnterOption(optIndex); }}
            onKeyDown={(event) => { handleKeyDownOption(event, event.key, optIndex); }}
          >
            {opt.description}
          </button>
        </li>
      ));
    if (filtered.length === 0) {
      return (
        <LiNotFoundWrap>
          Nenhum resultado correspondente
        </LiNotFoundWrap>
      );
    }
    return filtered;
  };

  const getDescriptionByValue = (val: any) => {
    const optSelected = options.find((opt) => opt.value === val);
    return optSelected ? optSelected.description : '';
  };

  return (
    <InputWrap
      className={['autocomplete-multiple', className].join(' ')}
      data-testid={`${inputProps.name}-wrap`}
      data-status={getDataStatus()}
      variant={theme.colors[variant]}
      fullWidth={fullWidth}
      inputHeight={autocompleteRef?.current?.offsetHeight}
      onBlur={handleBlurWrap}
      hasValue={inputProps.value.length > 0}
    >
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        ref={autocompleteRef}
        onClick={() => { inputRef?.current?.focus(); }}
        className="autocomplete-input"
      >
        { inputProps.value.map((valueInput: any) => (
          <Chip
            key={valueInput}
            endAdornment={(
              <ButtonIcon
                onClick={() => { handleRemove(valueInput); }}
              >
                <FaTimes />
              </ButtonIcon>
              )}
          >
            { getDescriptionByValue(valueInput) }
          </Chip>
        )) }
        <input
          type="hidden"
          name={inputProps.name}
          value={inputProps.value}
          data-testid={inputProps.name}
        />
        <input
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          onClick={handleClick}
          autoComplete="off"
          data-testid={`${inputProps.name}-autocomplete`}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          data-testid={`${inputProps.name}-label`}
          title={error}
          className={inputProps.disabled ? 'disabled' : null}
        >
          {label}
        </label>
        { showDropdown && (
          <ul
            ref={menuRef}
          >
            {
              renderOptions()
            }
          </ul>
        )}
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
    </InputWrap>
  );
};

export { AutocompleteMultiple };
