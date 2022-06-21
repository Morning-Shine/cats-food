import './App.css';
import Header from './components/Header';
import styled from '@emotion/styled';
import { MAIN_HEADER_NAME } from './constants/textContent';
import { FEED_RANGE } from './constants/productsForCats';
import { SIDE_MARGIN } from './constants/cssDimentions';
import Card from './components/Card';


export default function App() {
  let data = FEED_RANGE.slice();
  if (data.length % 2 === 1) {
    data[data.length - 1].isLastAlone = true;
  }
  return (
    <div className="App">
      <MainContainer>
        <Header name={MAIN_HEADER_NAME} />
        <TableContainer>
          {data.map(item =>
            <Card
              key={item.vendorCode}
              taste={item.taste}
              weight={item.weight}
              inStock={item.inStock}
              isLastAlone={item?.isLastAlone}
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
  column-gap: ${SIDE_MARGIN}px;
  row-gap: ${SIDE_MARGIN / 2}px;
  justify-items: center;
  display: grid;
  width: max-content;
  position: relative;
  margin: 0 auto;
  grid-template-columns: repeat(3, minmax(320px, 1fr));
  grid-template-rows: repeat(fit-content, minmax(509px, 1fr));
  
  @media (max-width: 1150px) {
      grid-template-columns: repeat(2, minmax(320px, 1fr));
  }

  @media (max-width: 750px) {
      grid-template-columns: repeat(1, minmax(320px, 1fr));
  }
`
