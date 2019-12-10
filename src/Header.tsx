import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const AppLogo = styled.img`
  height: 25vmin;
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

const Header: React.FC = () => (
  <AppHeader>
    <AppLogo src={logo} alt="logo" />
  </AppHeader>
);

export default Header;
