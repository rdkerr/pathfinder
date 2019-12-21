import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as themeConf from '../ThemeManager/theme';
import { useTheme } from '../ThemeManager';

const Button = styled.button`
    background: ${themeConf.buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${themeConf.buttonTextColor};
    cursor: pointer;
    padding: 0.5em 0;
    width: 60px;
  `;

const ToggleButton: React.FC = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <Button type="button" onClick={(): void => theme.toggle()}>
        {theme.mode === 'light' ? (
          <FontAwesomeIcon
            icon="cloud-moon"
            size="lg"
            color={themeConf.colors.green}
          />
        ) : (
          <FontAwesomeIcon
            icon="sun"
            size="lg"
            color={themeConf.colors.green}
          />
        )}
      </Button>
    </ThemeProvider>
  );
};

export default ToggleButton;
