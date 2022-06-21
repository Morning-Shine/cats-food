import './App.css';
import Header from './components/Header';
import styled from '@emotion/styled';
import { MAIN_HEADER_NAME } from './constants/textContent';
import { FEED_RANGE } from './constants/productsForCats';
import { SIDE_MARGIN } from './constants/cssDimentions';
import Card from './components/Card';


export default function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header name={MAIN_HEADER_NAME} />
        <TableContainer>
          {FEED_RANGE.map(item =>
            <Card
              key={item.vendorCode}
              taste={item.taste}
              weight={item.weight}
              inStock={item.inStock}
            />)}
        </TableContainer>
      </MainContainer>
      <MainShadow />
    </div>
  );
}

const MainContainer = styled.div`
  z-index: 10;
`;

const MainShadow = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 5e-05) 49.88%, rgba(0, 0, 0, 0.5) 100%);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`;

const TableContainer = styled.div`
  border: 1px solid yellow;

  padding: 0 ${SIDE_MARGIN}px;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-template-rows: repeat(fit-content, minmax(509px, 1fr));
`
