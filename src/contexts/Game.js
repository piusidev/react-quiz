import { createContext } from "react";

export const GameContext = createContext({});

export const GameProvider = (props) => {
  const config = {
    quantity: '',
    difficulty: ''
  }

  const questions = {
    wrong: 0,
    right: 0
  }

  return(
    <GameContext.Provider value={{ config, questions }} >
      {props.children}
    </GameContext.Provider>
  )
};