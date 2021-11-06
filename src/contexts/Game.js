import { createContext } from "react";

export const GameContext = createContext({});

export const GameProvider = (props) => {
  const config = {}
  const result = {}
  let questions = [];

  return(
    <GameContext.Provider value={{ config, result, questions }} >
      {props.children}
    </GameContext.Provider>
  )
};
