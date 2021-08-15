import styled from 'styled-components';

export const Homepage = styled.main`

  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  section {
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    section {
      grid-template-columns: 1fr;
      grid-gap: 1rem;
      gap: 2rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 2rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 1rem 3rem;
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    button {
      width: 90%;
    }
  }
`;