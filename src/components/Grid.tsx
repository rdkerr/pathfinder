import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import * as themeConf from '../ThemeManager/theme';
import { useTheme } from '../ThemeManager';

const { medGray } = themeConf.colors;

type GridProps = {
  width: number;
}

const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props): number => props.width}, 1fr);
  grid-gap: 10px;
  background-color: ${medGray};
  height: 90vh;
`;

const Tile = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  padding: 20px;
  font-size: 1em;

  &:hover {
    outline: 2px solid ${themeConf.borderColor};
  }
`;

type Space = {
  row: number;
  col: number;
}

type Props = {
  board: Array<Array<Space>>;
}

const Grid: React.FC<Props> = ({ board }) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <GridContainer width={board.length}>
        {board.map((row) => row.map((el) => <Tile key={`${el.row}-${el.col}`}>{`${el.row}-${el.col}`}</Tile>))}
      </GridContainer>
    </ThemeProvider>
  );
};

export default Grid;
