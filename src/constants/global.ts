import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  transition: background-color 0.5s ease-in-out;
  transition: color 0.5s ease-out;
}
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
