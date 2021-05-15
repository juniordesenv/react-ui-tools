import { Button, ButtonIcon } from '@/components';
import styled from '@emotion/styled';
import { FaTimes } from 'react-icons/fa';

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    button {
      margin: 8px;
    }
  }
`;

const ButtonPage = () => (
  <MainWrap>
    <div>
      <Button
        scale="light"
        variant="contained"
      >
        Teste
      </Button>
      <Button
        variant="contained"
      >
        Teste
      </Button>
      <Button
        scale="dark"
        variant="contained"
      >
        Teste
      </Button>
      <Button
        disabled
        variant="contained"
      >
        Teste
      </Button>
      <Button
        isLoading
        variant="contained"
      >
        Teste
      </Button>
    </div>

    <div>
      <ButtonIcon
        scale="light"
        variant="contained"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        variant="contained"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        scale="dark"
        variant="contained"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        disabled
        variant="contained"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        isLoading
        variant="contained"
      >
        <FaTimes />
      </ButtonIcon>
    </div>

    <div>
      <Button
        scale="light"
        variant="outlined"
      >
        Teste
      </Button>
      <Button
        variant="outlined"
      >
        Teste
      </Button>
      <Button
        scale="dark"
        variant="outlined"
      >
        Teste
      </Button>
      <Button
        disabled
        variant="outlined"
      >
        Teste
      </Button>
      <Button
        isLoading
        variant="outlined"
      >
        Teste
      </Button>
    </div>

    <div>
      <ButtonIcon
        scale="light"
        variant="outlined"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        variant="outlined"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        scale="dark"
        variant="outlined"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        disabled
        variant="outlined"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        isLoading
        variant="outlined"
      >
        <FaTimes />
      </ButtonIcon>
    </div>

    <div>
      <Button
        scale="light"
        variant="text"
      >
        Teste
      </Button>
      <Button
        variant="text"
      >
        Teste
      </Button>
      <Button
        scale="dark"
        variant="text"
      >
        Teste
      </Button>
      <Button
        disabled
        variant="text"
      >
        Teste
      </Button>
      <Button
        isLoading
        variant="text"
      >
        Teste
      </Button>
    </div>

    <div>
      <ButtonIcon
        scale="light"
        variant="text"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        variant="text"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        scale="dark"
        variant="text"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        disabled
        variant="text"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        isLoading
        variant="text"
      >
        <FaTimes />
      </ButtonIcon>
    </div>

    <div>
      <Button
        scale="light"
        variant="ghost"
      >
        Teste
      </Button>
      <Button
        variant="ghost"
      >
        Teste
      </Button>
      <Button
        scale="dark"
        variant="ghost"
      >
        Teste
      </Button>
      <Button
        disabled
        variant="ghost"
      >
        Teste
      </Button>
      <Button
        isLoading
        variant="ghost"
      >
        Teste
      </Button>
    </div>

    <div>
      <ButtonIcon
        scale="light"
        variant="ghost"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        variant="ghost"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        scale="dark"
        variant="ghost"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        disabled
        variant="ghost"
      >
        <FaTimes />
      </ButtonIcon>
      <ButtonIcon
        isLoading
        variant="ghost"
      >
        <FaTimes />
      </ButtonIcon>
    </div>
  </MainWrap>
);

export default ButtonPage;
