import { createGlobalStyle } from 'styled-components';
import background from '@static/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    background: ${({ theme }) =>
      theme.colors.background} url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }
`;
