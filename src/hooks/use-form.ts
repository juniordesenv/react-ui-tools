import React, { useEffect, useRef, useState } from 'react';

interface Transformation {
  transform (fieldName: string, input: object): any
}

interface Validation {
  validate (fieldName: string, input: object): string
}

type FormType = {
  initialValues: object;
  onSubmit: (values: any) => void | Promise<void>;
  validation?: Validation;
  transformation?: Transformation;
};
type FormResultType<T> = {
  values: object;
  setValues: React.Dispatch<React.SetStateAction<object>>;
  errors: object;
  touched: object;
  inputs: {[key in keyof T]?: InputPropsForm<T>};
  onSubmit: (values: any) => void | Promise<void>;
  isValid: boolean;
  isSubmitting: boolean;
};
export type InputPropsForm<T = any> = {
  value: any;
  name: Extract<keyof T, string>;
  onChange: (event: React.ChangeEvent<any>) => void;
  onBlur: (event: React.FocusEvent<any>) => void;
  touched: boolean;
  error: any;
};

export const useForm = <T = any>({
  initialValues,
  onSubmit,
  validation,
  transformation,
}: FormType): FormResultType<T> => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const formRendered = useRef(true);

  const validateForm = (): boolean => {
    const auxError: object = {};
    const auxTouched: object = {};
    let auxIsValid: boolean = true;
    Object.keys(initialValues).forEach((key) => {
      const fieldError = validation.validate(key, values);
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
      const formErrors = {};
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
      return nextValues;
    });
  };

  const inputs = {};

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
    inputs,
    onSubmit: handleSubmit,
    isSubmitting,
    isValid,
  };
};
