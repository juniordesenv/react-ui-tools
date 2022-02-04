import { Scrollbar } from '@/components';
import React, { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { HelperText } from '@/components/form/helper-text/helper-text';
import { useTheme } from 'emotion-theming';
import { Theme, VariantColorsType } from '@/styles/theme';
import { useEscKeyUp, useOutsideClick, useTabKeyUp } from '@/hooks';
import Styles from './autocomplete.style';

const InputWrap = styled.div`${Styles.inputWrap}`;
const LiNotFoundWrap = styled.div`${Styles.liNotFoundWrap}`;

type Option = {
  value: any;
  description: string;
};

export type AutocompleteProps = React.DetailedHTMLProps<
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
  limitShowed?: number;
};

const Autocomplete: React.FC<AutocompleteProps> = ({
  error,
  touched,
  label,
  className,
  fullWidth,
  textHelper,
  hideHelper,
  placeholder,
  variant = 'primary',
  options,
  limitShowed,
  ...inputProps
}: AutocompleteProps) => {
  const theme = useTheme() as Theme;
  const [value, setValue] = useState('');
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isEnterFocus, setIsEnterFocus] = useState<boolean>(false);
  const [forceValidationOnExit, setForceValidationOnExit] = useState<boolean>(false);
  const [triggerValidation, setTriggerValidation] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>();
  const inputRef = useRef<HTMLInputElement>();

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
    if (!exist) {
      setValue('');
      const event:any = {
        target: {
          name: inputProps.name,
          value: '',
        },
      };
      inputProps.onChange(event);
    }
  };

  useEffect(() => {
    if (!showDropdown && triggerValidation) {
      validOptions();
    }
  }, [triggerValidation, showDropdown]);

  useEffect(() => {
    const selectedOption = options.find((opt) => opt.value === inputProps.value);
    setValue(selectedOption?.description || '');
  }, [inputProps.value, options]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    setInputFocused(true);
    setIsEnterFocus(true);
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
    setIsEnterFocus(false);
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
        value: opt.value,
      },
    };
    inputProps.onChange(event);
    setValue(opt.description);
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

  const renderOptions = () => {
    let filtered = isEnterFocus ? options : options
      .filter((opt) => opt.description.toLowerCase()?.includes(value.toLowerCase())
        && opt.value !== inputProps.value);
    if (limitShowed) {
      filtered = filtered.slice(0, 9);
    }
    const resultFilter = filtered.map((opt, optIndex) => (
      <li key={opt.value.toString()}>
        <button
          tabIndex={-1}
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
    if (resultFilter.length === 0) {
      return (
        <LiNotFoundWrap>
          Nenhum resultado correspondente
        </LiNotFoundWrap>
      );
    }
    return resultFilter;
  };

  return (
    <InputWrap
      className={['autocomplet', className].join(' ')}
      data-testid={`${inputProps.name}-wrap`}
      data-status={getDataStatus()}
      data-value={value}
      variant={theme.colors[variant]}
      fullWidth={fullWidth}
      inputHeight={inputRef?.current?.offsetHeight}
      onBlur={handleBlurWrap}
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
        onChange={handleChange}
        value={value}
        title={error}
        data-testid={inputProps.name}
        readOnly
        ref={inputRef}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={inputProps.disabled ? 'disabled' : null}
        autoComplete="off"
      />
      { showDropdown && (
        <div className="content-options">
          {/* <Scrollbar> */}
          <ul
            ref={menuRef}
          >
            {
              renderOptions()
            }
          </ul>
          {/* </Scrollbar> */}
        </div>
      )}
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

export { Autocomplete };