import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow: hidden; /* Prevent scrolling */
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;


