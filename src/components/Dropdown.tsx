import React, { useRef, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeSet } from 'styled-theming';
import * as themeConf from '../ThemeManager/theme';
import { useTheme } from '../ThemeManager';

interface Props {
  show: boolean;
}

const DropdownContainer = styled.div`
  min-width: 150px;
  border: 1px solid ${themeConf.navColor};
  border-radius: 4px;
  border-color: ${(props: Props): string | ThemeSet => (props.show ? themeConf.colors.green : themeConf.navColor)};
  border-bottom-left-radius: ${(props: Props): string => (props.show ? '0px' : '4px')};
  border-bottom-right-radius: ${(props: Props): string => (props.show ? '0px' : '4px')};

  &:hover {
    border-color: ${themeConf.colors.green};
    color: ${themeConf.colors.green}
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    background-color: ${themeConf.buttonBackgroundColor};
  }
`;

const TextContainer = styled.ul`
  list-style: none;
  margin: 0 0 4px 0;
  padding: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const NestedContainer = styled.ul`
  height: ${(props: Props): number | string => (props.show ? 'auto' : 0)};
  background-color: ${themeConf.navColor};
  position: absolute;
  padding: 0;
  left: -1px;
  top: 4px;
  z-index: 2;
  width: 100%;
  border: solid ${themeConf.colors.green};
  border-width: ${(props: Props): string => (props.show ? '1px' : '0px')};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const ListElement = styled.li`
  display: block;
  position: relative;
  text-decoration: none;
  width: 100%;
  margin: 0 8px 0 0;

  &:hover {
    cursor: pointer;
    background-color: ${themeConf.buttonBackgroundColor};
  }
  &:nth-child(2) {
    margin-right: 20px;
  }
`;

const Title = styled.span`
  margin: 12px 8px 12px 16px;
`;

const Dropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (e: Event): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return (): void => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref]);

  const strings = ['a', 'b', 'c'];
  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <DropdownContainer ref={ref} onClick={(): void => setOpen(!open)} show={open}>
        <TextContainer>
          <ListElement>
            <Title>Select Algorithm</Title>
            <FontAwesomeIcon
              icon="chevron-circle-down"
              size="sm"
              color={themeConf.colors.green}
            />
          </ListElement>
          <ListElement>
            <NestedContainer show={open}>
              {open ? strings.map((s) => <ListElement>{s}</ListElement>) : null }
            </NestedContainer>
          </ListElement>
        </TextContainer>
      </DropdownContainer>
    </ThemeProvider>
  );
};

export default Dropdown;
