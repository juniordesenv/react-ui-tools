import React, { useCallback } from 'react';
import styled from '@emotion/styled';

import { useDropzone } from 'react-dropzone';
import { Theme, VariantColorsType } from '@/styles/theme';
import {
  ButtonIcon,
  MasksTypes,
  Typography,
} from '@/components';
import { HelperText } from '@/components/form/helper-text/helper-text';
import { useTheme } from 'emotion-theming';
import { FaTimes, FaUpload } from 'react-icons/fa';
import Styles from './input-file.style';

const InputFileWrap = styled.div`${Styles.inputFileWrap}`;

export type InputFileProps = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
> & {
  value: File | File[];
  label?: string;
  touched?: boolean;
  error?: string;
  className?: string;
  textHelper?: string;
  hideHelper?: boolean;
  fullWidth?: boolean;
  mask?: MasksTypes;
  variant?: VariantColorsType;
  textDragActive?: string | React.ReactNode;
  textDrag?: string | React.ReactNode;

};

const InputFile: React.FC<InputFileProps> = ({
  label,
  error,
  touched,
  className,
  fullWidth,
  textHelper,
  hideHelper,
  multiple,
  onBlur,
  variant = 'primary',
  textDragActive = 'Solte seu arquivo aqui',
  textDrag = (
    <>
      Solte seu arquivo aqui ou
      <br />
      clique para procurar o arquivo
      <br />
      e escolher em seguida
    </>
  ),
  onChange,
  ...inputProps
}: InputFileProps) => {
  const theme = useTheme() as Theme;

  const fakeBlur = () => {
    const fakeEvent: any = { target: { name: inputProps.name } };
    if (onBlur) onBlur(fakeEvent);
  };

  const onDrop = useCallback((acceptedFiles) => {
    const fakeEvent: any = {
      target: {
        name: inputProps.name,
        value: multiple ? [...inputProps.value as [], ...acceptedFiles] : acceptedFiles[0],
      },
    };
    if (onChange) onChange(fakeEvent);
    fakeBlur();
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const renderValues = () => {
    if (multiple) {
      const currentValues = inputProps.value as [];
      return (
        <ul>
          {currentValues.map((item: any, position: number) => (
            <li
              className="file-item"
              key={item.name}
            >
              <Typography>{item.name}</Typography>
              <ButtonIcon
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  currentValues.splice(position, 1);
                  const fakeEvent: any = {
                    target: {
                      name: inputProps.name,
                      value: currentValues,
                    },
                  };
                  if (onChange) onChange(fakeEvent);
                }}
              >
                <FaTimes
                  size="12px"
                />
              </ButtonIcon>
            </li>
          ))}
        </ul>
      );
    }
    const file = inputProps.value as File;
    if (!file) return null;
    return (
      <div className="file-item">
        <Typography>{file.name}</Typography>
        <ButtonIcon
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const fakeEvent: any = {
              target: {
                name: inputProps.name,
                value: null,
              },
            };
            if (onChange) onChange(fakeEvent);
          }}
        >
          <FaTimes
            size="12px"
          />
        </ButtonIcon>
      </div>
    );
  };

  const getDataStatus = () => {
    if (!touched || inputProps.disabled) return null;
    return error ? 'invalid' : 'valid';
  };

  return (
    <InputFileWrap
      className={['input-file', className].join(' ')}
      data-testid={`${inputProps.name}-wrap`}
      data-status={getDataStatus()}
      variant={theme.colors[variant]}
      fullWidth={fullWidth}
      isActive={isDragActive}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>{label}</label>
      <div
        {...getRootProps()}
      >
        <FaUpload
          size="32px"
        />
        <Typography
          as="h6"
          variant="gray"
          scale="dark"
        >
          { isDragActive ? textDragActive : textDrag }
        </Typography>
        <input
          {...getInputProps()}
          data-testid={inputProps.name}
          onChange={(event) => {
            const fakeEvent: any = {
              target: {
                name: inputProps.name,
                value: multiple ? [...event.target.files as any] : event.target.files[0],
              },
            };
            if (onChange) onChange(fakeEvent);
          }}
        />
        {renderValues()}
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
    </InputFileWrap>
  );
};

export { InputFile };
