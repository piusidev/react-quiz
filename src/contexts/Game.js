import { createContext } from "react";

export const GameContext = createContext({});

export const GameProvider = (props) => {
  const config = {
    quantity: '',
    difficulty: ''
  }

  const result = {
    wrong: 0,
    right: 0
  }

  let questions = [];

  return(
    <GameContext.Provider value={{ config, result, questions }} >
      {props.children}
    </GameContext.Provider>
  )
};
