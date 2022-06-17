import React, { useEffect, useRef, useState } from 'react';

interface Transformation {
  transform (fieldName: string, input: Record<string, unknown>): any
}

interface Validation {
  validate (fieldName: string, input: Record<string, unknown>): string
}

type FormType = {
  initialValues: Record<string, unknown>;
  onSubmit: (values: any) => void | Promise<void>;
  onBlur?: (event: React.FocusEvent) => void | Promise<void>;
  validation?: Validation;
  transformation?: Transformation;
};
type FormResultType<T> = {
  values: Record<string, unknown>;
  setValues: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
  errors: Record<string, unknown>;
  touched: Record<string, unknown>;
  inputs: Record<keyof T, InputPropsForm<T>>;
  onSubmit: (values: any) => void | Promise<void>;
  isValid: boolean;
  isSubmitting: boolean;
  reset: () => void
};
export type InputPropsForm<T = any> = {
  value: any;
  name: Extract<keyof T, string>;
  onChange: (event: React.ChangeEvent<any>) => void;
  onBlur: (event: React.FocusEvent<any>) => void | Promise<void>;
  touched: boolean;
  error: any;
};

export const useForm = <T = Record<string, unknown>>({
  initialValues,
  onSubmit,
  validation,
  transformation,
  onBlur,
}: FormType): FormResultType<T> => {
  const [values, setValues] = useState<Record<string, unknown>>(initialValues || {});
  const [errors, setErrors] = useState<Record<string, unknown>>({});
  const [touched, setTouched] = useState<Record<string, unknown>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const formRendered = useRef(true);

  const validateForm = (): boolean => {
    const auxError: Record<string, unknown> = {};
    const auxTouched: Record<string, unknown> = {};
    let auxIsValid: boolean = true;
    Object.keys(initialValues).forEach((key) => {
      const fieldError = validation?.validate(key, values);
      auxError[key] = fieldError;
      if (fieldError) auxIsValid = false;
      auxTouched[key] = true;
    });
    setIsValid(auxIsValid);
    setErrors(auxError);
    setTouched(auxTouched);
    return auxIsValid;
  };

  useEffect(() => {
    if (!formRendered.current) {
      setValues(initialValues);
      setErrors({});
      setTouched({});
      setIsSubmitting(false);
      setIsValid(false);
    }
    formRendered.current = false;
  }, [JSON.stringify(initialValues)]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;

    setValues((preventValues) => ({
      ...preventValues,
      [name]: value,
    }));

    if (validation) {
      const formErrors: Record<string, unknown> = {};
      Object.keys(initialValues).forEach((key) => {
        if (!touched[key]) return;
        const transformed = { ...values };
        if (transformation) {
          transformed[key] = transformation.transform(key, values);
        }
        formErrors[key] = validation.validate(key, transformed);
      });
      setErrors(formErrors);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setValues((currentValues) => {
      const nextValues = { ...currentValues };
      const transformed = { ...currentValues };
      if (target?.type === 'text') {
        transformed[name] = value;
        nextValues[name] = value;
      }
      if (transformation) {
        transformed[name] = transformation.transform(name, currentValues);
      }
      setTouched({ ...touched, [name]: true });
      setErrors({ ...errors, [name]: validation ? validation.validate(name, transformed) : null });
      if (onBlur) {
        Promise.resolve(onBlur(event)).then();
      }
      return nextValues;
    });
  };

  const inputs: Record<string, InputPropsForm<T>> = {};

  Object.keys(initialValues).forEach((key) => {
    inputs[key] = {
      value: values[key],
      name: key,
      onChange: handleChange,
      onBlur: handleBlur,
      touched: touched[key],
      error: errors[key],
    } as InputPropsForm<T>;
  });

  const handleSubmit = async (event: any) => {
    if (event) event.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const transformedValues = { ...values };
      if (transformation) {
        Object.keys(transformedValues).forEach((key) => {
          transformedValues[key] = transformation.transform(key, transformedValues);
        });
      }
      await onSubmit(transformedValues);
      setIsSubmitting(false);
    }
  };

  return {
    values,
    setValues,
    errors,
    touched,
    inputs: inputs as Record<keyof T, InputPropsForm<T>>,
    onSubmit: handleSubmit,
    isSubmitting,
    isValid,
    reset: () => {
      setErrors({});
      setTouched({});
      setIsSubmitting(false);
      setIsValid(false);
      setValues((initialValues || {}));
    },
  };
};
