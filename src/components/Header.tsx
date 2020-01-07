import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from './Dropdown';
import ToggleButton from './ToggleButton';
import * as themeConf from '../ThemeManager/theme';
import { useTheme } from '../ThemeManager';

const AppHeader = styled.header`
  background-color: ${themeConf.navColor};
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${themeConf.textColor};
  padding: 0 1em;

  & > span {
    flex: 1;
    margin: 1em;
  }

  & > span:hover {
    color: ${themeConf.colors.green}
    cursor: pointer;
    box-shadow: 0 0 0 1px ${themeConf.colors.green} inset;
  }
`;

const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <AppHeader>
        <FontAwesomeIcon
          icon="search-location"
          size="lg"
          color={themeConf.colors.green}
        />
        <Dropdown />
        <span>Maze</span>
        <span>Cookie</span>
        <span>Clear</span>
        <span>Speed</span>
        <span>Find</span>
        <ToggleButton />
      </AppHeader>
    </ThemeProvider>
  );
};

export default Header;
