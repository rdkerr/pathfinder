import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import * as themeConf from '../ThemeManager/theme';
import { useTheme } from '../ThemeManager';

const Button = styled.button`
    background: ${themeConf.buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${themeConf.buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

const ToggleButton: React.FC = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <Button type="button" onClick={(): void => theme.toggle()}>Toggle</Button>
    </ThemeProvider>
  );
};

export default ToggleButton;
