import React, { useRef, useState } from 'react';

import styled from '@emotion/styled';
import { useEscKeyUp, useOutsideClick } from '@/hooks';
import { useTheme } from '@emotion/react';
import { Theme, VariantColorsType } from '@/styles/theme';
import { FaChevronCircleDown } from 'react-icons/fa';
import Styles from './select.style';
import { HelperText } from '../helper-text/helper-text';

const SelectWrap = styled.div`${Styles.selectWrap}`;

type SelectOptions = {
  value: any;
  description: React.ReactNode | string;
};

export type SelectProps = {
  label: string;
  className?: string;
  touched?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  value?: any;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  textHelper?: string;
  options: SelectOptions[];
  hideHelper?: boolean;
  variant?: VariantColorsType;
  fullWidth?: boolean;
};

const Select: React.FC<SelectProps> = ({
  error,
  touched,
  label,
  options,
  textHelper,
  hideHelper,
  variant = 'primary',
  fullWidth,
  className,
  ...inputProps
}: SelectProps) => {
  const theme = useTheme() as Theme;
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>();
  const selectRef = useRef<HTMLDivElement>();

  useOutsideClick(menuRef, () => {
    if (showDropdown) {
      setShowDropdown(false);
      selectRef.current.focus();
    }
  });

  useEscKeyUp(menuRef, () => {
    if (showDropdown) {
      setShowDropdown(false);
      selectRef.current.focus();
    }
  });

  const getDataStatus = () => {
    if (!touched || inputProps.disabled) return null;
    return error ? 'invalid' : 'valid';
  };

  const toggleDropdown = () => {
    if (inputProps.readOnly || inputProps.disabled) return;
    setShowDropdown(!showDropdown);
  };

  const changeOption = (value: any) => {
    if (inputProps.readOnly || inputProps.disabled) return;
    const event:any = {
      target: {
        name: inputProps.name,
        value,
      },
    };
    inputProps.onChange(event);
    selectRef.current.focus();
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

  const handleBlurSelect = () => {
    if (showDropdown) return;
    const fakeEvent: any = {
      target: {
        name: inputProps.name,
        value: inputProps.value,
      },
    };
    if (inputProps.onBlur) inputProps.onBlur(fakeEvent);
  };

  const getDescriptionValue = () => {
    const selected = options.find((item) => item.value === inputProps.value);
    return selected?.description;
  };

  return (
    <SelectWrap
      variant={theme.colors[variant]}
      data-testid={`${inputProps.name}-wrap`}
      data-status={getDataStatus()}
      data-value={inputProps.value || getDescriptionValue()}
      fullWidth={fullWidth}
      className={['select', className].join(' ')}
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
        type="hidden"
        name={inputProps.name}
        value={inputProps.value}
        data-testid={inputProps.name}
      />
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
      <div
        role="menu"
        tabIndex={inputProps.disabled ? undefined : 0}
        className={['select', inputProps.disabled ? 'disabled' : ''].join(' ')}
        onClick={toggleDropdown}
        onBlur={handleBlurSelect}
        ref={selectRef}
        data-testid={`${inputProps.name}-select`}
      >
        <span>{getDescriptionValue()}</span>
        <FaChevronCircleDown />
        { showDropdown && (
          <ul ref={menuRef}>
            {
              options.map((opt, optIndex) => (
                <li key={opt.value.toString()}>
                  <button
                    onClick={() => {
                      changeOption(opt.value);
                    }}
                    data-testid={`${inputProps.name}-opts`}
                    data-value={opt.value}
                    tabIndex={0}
                    type="button"
                    onMouseEnter={() => { handleMouseEnterOption(optIndex); }}
                    onKeyDown={(event) => { handleKeyDownOption(event, event.key, optIndex); }}
                  >
                    {opt.description}
                  </button>
                </li>
              ))
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
    </SelectWrap>
  );
};

export { Select };
