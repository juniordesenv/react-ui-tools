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
          { value: '1', description: 'meu novo ventilador de teto' },
          { value: '2', description: 'meu novo ventilador' },
          { value: '3', description: 'meu novo teto' },
          { value: '4', description: 'minha nova televisão' },
          { value: '5', description: 'meu nova televisão' },
        ]}
      />
    </MainWrap>
  );
};

export default HomePage;
