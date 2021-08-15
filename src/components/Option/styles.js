import styled from 'styled-components';

export const StyledOption = styled.label`
  span {
    color: ${props => props.theme.colors.text};
    outline: none;
    background: none;
    border: 2px solid #bd93f9;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
  
    font-size: 1rem;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + span {
    background: #bd93f9;
  }

  span:hover {
    background: #bd93f9;
  }
`;