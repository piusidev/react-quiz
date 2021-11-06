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
  min-height: calc(100vh - 80px);
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem;

  @media(max-width: 768px) {
    max-width: 100%;
  }
`;

export const Typography = styled.p`
  ${({ size = 1.5, weight, align = 'left' }) => css`
    font-size: ${size}rem;
    font-weight: ${weight};
    text-align: ${align};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `};
`;

export const PrimaryButton = styled.button`
  color: ${props => props.theme.colors.text};
  outline: none;
  background: none;
  border: 2px solid #bd93f9;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  font-size: 1rem;

  &:hover {
    background: #bd93f9;
  }
`;

export const Heading = styled('h1').attrs(({ level }) => ({
  as: `h${level}`
}))`
  ${({ size, weight, align = 'left' }) => css`
    font-size: ${size}rem;
    font-weight: ${weight};
    text-align: ${align};

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  `};
`;
