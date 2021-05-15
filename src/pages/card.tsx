import { Card } from '@/components';
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

const HomePage = () => (
  <MainWrap>
    <div>
      <Card>
        CONTEUDO
      </Card>
    </div>
    <div>
      <Card hoverToBordered>
        CONTEUDO
      </Card>
    </div>
    <div>
      <Card hoverToPopping>
        CONTEUDO
      </Card>
    </div>
    <div>
      <Card isFloating={false}>
        CONTEUDO
      </Card>
    </div>
    <div>
      <div>
        <Card size="small">
          CONTEUDO
        </Card>
      </div>
      <div>
        <Card>
          CONTEUDO
        </Card>
      </div>
      <div>
        <Card size="medium">
          CONTEUDO
        </Card>
      </div>
      <div>
        <Card size="large">
          CONTEUDO
        </Card>
      </div>
      <div>
        <Card size="larger">
          CONTEUDO
        </Card>
      </div>
    </div>
  </MainWrap>
);

export default HomePage;
