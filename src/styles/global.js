import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
  font-family: 'JetBrains Regular';
  src: url('/fonts/JetBrains-Regular.ttf');
  }

  @font-face {
    font-family: 'JetBrains Bold';
    src: url('/fonts/JetBrains-Bold.ttf');
  }

  body {
    font-family: 'JetBrains Regular';
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    transition: background 0.3s ease-in-out;
  }

  h1,
  h2,
  h3 {
    font-family: 'JetBrains Bold';
  }
`