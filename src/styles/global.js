import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
`;

export const Container = styled.div`
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;

  @media(max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
  }
`;

export const Typography = styled.p`
  ${({ size = 22, weight, align = 'left' }) => css`
    font-size: ${size}px;
    font-weight: ${weight};
    text-align: ${align};

    @media (max-width: 768px) {
      font-size: 18px;
    }
  `};
`;

export const Heading = styled('h1').attrs(({ level }) => ({
  as: `h${level}`
}))`
  ${({ size, weight, align = 'left' }) => css`
    font-size: ${size}px;
    font-weight: ${weight};
    text-align: ${align};

    @media (max-width: 768px) {
      font-size: 24px;
    }
  `};
`;