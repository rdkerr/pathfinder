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
  min-height: 100vh;
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


const App: React.FC = () => (
  <AppContainer>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
    </AppHeader>
  </AppContainer>
);

export default App;
