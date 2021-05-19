import React, { useEffect, useState } from 'react';
import { InputPropsForm } from '@/hooks/use-form';

type ArrayFieldResultType = {
  fields: InputPropsForm[];
  onAdd: () => void;
  onRemove: (index: number) => void;
};

export const useArrayField = (
  field: InputPropsForm,
): ArrayFieldResultType => {
  const [fields, setFields] = useState<InputPropsForm[]>([]);

  useEffect(() => {
    const nextFields = [];
    field?.value?.forEach((vl, index) => {
      nextFields.push({
        name: `${field.name}[${index}]`,
        value: fields[index]?.value || vl || '',
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          setFields((oldFields) => {
            const changeFields = [...oldFields];
            changeFields[index].value = event.target.value;
            return changeFields;
          });
        },
        onBlur: () => {
          field.onChange({
            target: {
              name: field.name,
              value: nextFields.map((changedField) => changedField.value),
            },
          } as any);
        },
        error: null,
        touched: false,
      });
    });
    setFields(nextFields);
  }, [field.value]);

  const onAdd = () => {
    field.onChange({
      target: {
        name: field.name,
        value: [
          ...field.value,
          '',
        ],
      },
    } as any);
  };

  const onRemove = (index: number) => {
    const nextFields = [...fields];
    nextFields.splice(index, 1);
    setFields(nextFields);
    field.onChange({
      target: {
        name: field.name,
        value: nextFields.map((changedField) => changedField.value),
      },
    } as any);
  };

  return {
    onAdd,
    fields,
    onRemove,
  };
};
