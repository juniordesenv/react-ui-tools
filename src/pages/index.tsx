import { Autocomplete } from '@/components';
import { useForm } from '@/hooks';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    > div {
      margin: 8px;
    }
  }
`;

const HomePage = () => {
  const { inputs, setValues } = useForm<{ description: string }>({
    initialValues: { description: '' },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <MainWrap>
      <Autocomplete
        label="Teste"
        {...inputs.description}
        options={[
          { value: '1', description: '1' },
          { value: '2', description: '2' },
          { value: '3', description: '3' },
          { value: '4', description: '4' },
          { value: '5', description: '5' },
          { value: '6', description: '6' },
          { value: '7', description: '7' },
          { value: '8', description: '8' },
          { value: '9', description: '9' },
          { value: '10', description: '10' },
          { value: '11', description: '11' },
          { value: '12', description: '12' },
          { value: '13', description: '13' },
          { value: '14', description: '14' },
          { value: '15', description: '15' },
          { value: '16', description: '16' },
          { value: '17', description: '17' },
        ]}
      />
    </MainWrap>
  );
};

export default HomePage;
