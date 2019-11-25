import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const AppContainer = styled.div`
  text-align: center;
`;

const AppLogo = styled.img`
  height: 40vmin;
`;

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

// .App-link {
//   color: #09d3ac;
// }

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  background-color: #AAA;
`;

const Tile = styled.div`
  background-color: #444;
  color: #FFF;
  padding: 20px;
  font-size: 150%;
  border: 1px solid #222;
`;

const BOARD = Array.from({ length: 5 }, () => (
  Array.from({ length: 5 }, () => true)
));

let key = 0;

const App: React.FC = () => (

  <AppContainer>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
    </AppHeader>
    <Grid>
      {BOARD.map((row, i) => row.map((el, j) => <Tile key={key++}>{el ? 1 : 0}</Tile>))}
    </Grid>
  </AppContainer>
);

export default App;
