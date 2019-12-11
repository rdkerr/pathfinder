import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Grid from './components/Grid';

const AppContainer = styled.div`
  text-align: center;
`;

const BOARD = Array.from({ length: 5 }, (_, i) => (
  Array.from({ length: 5 }, (__, j) => ({ row: i, col: j }))
));

const App: React.FC = () => (
  <AppContainer>
    <Header />
    <Grid board={BOARD} />
  </AppContainer>
);

export default App;
