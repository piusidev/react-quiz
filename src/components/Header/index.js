import { Navbar } from "./styles";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Header = ({ toggleTheme }) => {
  const { colors } = useContext(ThemeContext);

  return(
    <Navbar>
      <button onClick={() => {toggleTheme()}}>mudar tema</button>
    </Navbar>
  )
}

export default Header;