import styled from 'styled-components';

export const Homepage = styled.section`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    gap: 2rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 1rem 0;
`