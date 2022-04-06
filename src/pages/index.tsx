import { Autocomplete, Input } from '@/components';
import { useForm } from '@/hooks';
import styled from '@emotion/styled';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <Input
        label="teste2"
        mask="cnj"
        {...inputs.description}
      />
    </MainWrap>
  );
};

export default HomePage;
