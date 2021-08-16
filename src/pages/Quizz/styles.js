import styled from 'styled-components';

export const Question = styled.div`
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
