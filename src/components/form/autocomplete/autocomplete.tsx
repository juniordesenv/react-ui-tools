import React, {
  Component, memo, Ref, useEffect, useRef, useState,
} from 'react';
import styled from '@emotion/styled';
import { HelperText } from '@/components/form/helper-text/helper-text';
import { useTheme } from 'emotion-theming';
import { Theme, VariantColorsType } from '@/styles/theme';
import {
  useEscKeyUp, useOutsideClick, useTabKeyUp, useDebounce, useNavigationKeyUp,
} from '@/hooks';
import { removeDiacritics } from '@/helpers';
import { VariableSizeList as List, areEqual } from 'react-window';
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
  itemSize?: number;
  maxSize?: number;
  defaultDebounce?: number;
};
const Row = memo(({ data, index, style }: any) => {
  const rowRef = useRef<any>({});

  const item = data[index];

  useEffect(() => {
    if (rowRef.current && item && item.setRowHeight) {
      item.setRowHeight(index, rowRef.current.clientHeight);
    }
    // eslint-disable-next-line
  }, [rowRef]);

  if (!item) {
    return (
      <LiNotFoundWrap ref={rowRef}>
        Nenhum resultado correspondente
      </LiNotFoundWrap>
    );
  }

  return (
    <div
      style={style}
      key={item.value}
    >
      <div
        ref={rowRef}
      >
        <button
          tabIndex={-1}
          onClick={() => {
            item.onClick(item);
          }}
          type="button"
          onMouseEnter={() => {
            item.onFocusRow(index);
          }}
        >
          {item.description}
        </button>
      </div>
    </div>
  );
}, areEqual);

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
  itemSize = 35,
  maxSize = 300,
  defaultDebounce = 100,
  ...inputProps
}: AutocompleteProps) => {
  const theme = useTheme() as Theme;
  const [debouncedValue, value, setValue] = useDebounce<string>('', defaultDebounce);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isEnterFocus, setIsEnterFocus] = useState<boolean>(false);
  const [forceValidationOnExit, setForceValidationOnExit] = useState<boolean>(false);
  const [triggerValidation, setTriggerValidation] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>();
  const inputRef = useRef<HTMLInputElement>();
  const rowHeights = useRef({});
  const listRef = useRef<any>({});
  const [focusedRow, setFocusedRow] = useState<any>(null);

  const getFilteredOptions = () => {
    if (!value) return options;
    const terms = value.split(' ');
    let filtered = options.filter((opt) => terms
      .reduce((previousResult, searchTerm) => previousResult && removeDiacritics(opt.description)
        .toLowerCase()?.includes(removeDiacritics(searchTerm)
          .toLowerCase()), true));
    if (limitShowed) {
      filtered = filtered.slice(0, 9);
    }
    return filtered;
  };

  const [filteredOptions, setFilteredOptions] = useState(options);

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
      const button = ul.children[optIndex]?.children[0] as HTMLButtonElement;
      button?.focus();
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
        const button = ul.children[optIndex - 1]?.children[0] as HTMLButtonElement;
        button?.focus();
      } else if (key === 'ArrowDown' && optIndex < (options.length - 1)) {
        event.preventDefault();
        const button = ul.children[optIndex + 1]?.children[0] as HTMLButtonElement;
        button?.focus();
      }
    }
  };

  const setRowHeight = (index, size) => {
    listRef.current.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: size };
  };

  useEffect(() => {
    let nextList = options;
    if (!isEnterFocus) nextList = getFilteredOptions();
    setFilteredOptions(nextList.map((data, optIndex) => ({
      ...data,
      onClick: (opt) => changeOption(opt),
      setRowHeight,
      onFocusRow: setFocusedRow,
    })));
  }, [debouncedValue, isEnterFocus, options]);

  useEffect(() => {
    rowHeights.current = {};
  }, [filteredOptions]);

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

  useNavigationKeyUp(menuRef, {
    keyUp: () => {
      // @ts-ignore
      menuRef.current?.children[focusedRow - 1]?.firstChild?.firstChild?.focus();
      setFocusedRow(focusedRow - 1);
    },
    keyDown: () => {
      // @ts-ignore
      menuRef.current?.children[focusedRow + 1]?.firstChild?.firstChild?.focus();
      setFocusedRow(focusedRow + 1);
    },
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

  //
  // const renderOptions = () => {
  //   if (resultFilter.length === 0) {
  //     return (
  //       <LiNotFoundWrap>
  //         Nenhum resultado correspondente
  //       </LiNotFoundWrap>
  //     );
  //   }
  //   return resultFilter;
  // };

  const getHeightRows = () => {
    const optionsAux = filteredOptions;
    const height = itemSize * optionsAux.length;
    if (height > maxSize) return maxSize;
    return height || itemSize;
  };

  function getRowHeight(index) {
    return rowHeights.current[index] || 35;
  }

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
          <List
            className="list"
            height={getHeightRows()}
            itemCount={filteredOptions.length || 1}
            ref={listRef}
            itemSize={getRowHeight}
            width="100%"
            innerRef={menuRef}
            itemData={filteredOptions}
          >
            {Row}
          </List>
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
