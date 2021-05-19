import { Input } from '@/components';
import { useForm } from '@/hooks';
import styled from '@emotion/styled';
import { Button } from '../../lib';

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
  const { inputs } = useForm<{ description: string }>({
    initialValues: { description: '' },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <MainWrap>
      <Input label="Teste" {...inputs.description} />
      <Button>woowo</Button>
    </MainWrap>
  );
};

export default HomePage;
