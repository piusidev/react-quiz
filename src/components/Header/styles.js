import styled from 'styled-components';

export const Navbar = styled.nav`
  max-height: 80px;
  background: ${props => props.theme.colors.navbar};
  color: ${props => props.theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

export const Logo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;

  h1 {
    font-size: 36px;
  }
`

export const ThemeSwitcher = styled.button`
  border: none;
  outline: none;
  cursor: pointer;

  background: none;

  border-radius: 100%;
  width: 50px;
  height: 50px;
`