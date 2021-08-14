import styled from 'styled-components';

export const Navbar = styled.nav`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #fff;

  display: flex;
  align-items: center;
  padding: 1rem;
`