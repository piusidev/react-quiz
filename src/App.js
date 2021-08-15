import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Quizz from './pages/Quizz';
import Report from './pages/Report';

import { useState } from "react";
import { ThemeProvider } from "styled-components";

import light from './styles/themes/light';
import dark from "./styles/themes/dark";

import { GlobalStyle } from './styles/global'
import Header from "./components/Header";
import { GameProvider } from './contexts/Game';

const App = () => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <Router>
      <GameProvider>
        <ThemeProvider theme={theme}>
          <div className="App">
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/quizz" component={Quizz} />
              <Route path="/report" component={Report} />
            </Switch>
          </div>
        </ThemeProvider>
      </GameProvider>
    </Router>
  );
}

export default App;
