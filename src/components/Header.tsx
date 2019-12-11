import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import logo from '../assets/logo.svg';
import ToggleButton from './ToggleButton';
import * as themeConf from '../ThemeManager/theme';
import { useTheme } from '../ThemeManager';

const AppLogo = styled.img`
  height: 8vh;
`;

const AppHeader = styled.div`
  background-color: ${themeConf.navColor};
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${themeConf.textColor};
`;

const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <ToggleButton />
      </AppHeader>
    </ThemeProvider>
  );
};

export default Header;
