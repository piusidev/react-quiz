import styled from 'styled-components';

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  border: 0.3rem solid ${props => props.theme.colors.primary};
  padding: 1rem;

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
