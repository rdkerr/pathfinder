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

// interface Element {
//   row: number;
//   col: number;
// }

const BOARD = Array.from({ length: 5 }, (_, i) => (
  Array.from({ length: 5 }, (__, j) => ({ row: i, col: j }))
));

const App: React.FC = () => (
  <AppContainer>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
    </AppHeader>
    <Grid>
      {BOARD.map((row) => row.map((el) => <Tile key={`${el.row}-${el.col}`}>{`${el.row}-${el.col}`}</Tile>))}
    </Grid>
  </AppContainer>
);

export default App;
