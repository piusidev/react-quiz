import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Navbar, ThemeSwitcher } from "./styles";

const Header = ({ toggleTheme }) => {
  const [isDark, setDark] = useState(true);

  const changeTheme = () => {
    setDark(!isDark);
    toggleTheme();
  }
  
  return(
    <Navbar>
      <Logo>
        <Link to='/'>
          <h1>QUIZZ</h1>
          <img src="/icon.svg" alt="Logo"/>
        </Link>
      </Logo>
      <ThemeSwitcher onClick={() => {changeTheme()}}>
        {
          isDark == true ? (
            <img src="https://img.icons8.com/color/48/000000/moon-satellite.png"/>
          ) : (
            <img src="https://img.icons8.com/color/48/000000/sun.png"/>
          )
        }
      </ThemeSwitcher>
    </Navbar>
  )
}

export default Header;