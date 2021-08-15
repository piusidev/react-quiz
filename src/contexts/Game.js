import { createContext } from "react";
import Api from "../services/api";

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

  const getQuestions = async (quantity, difficulty) => {
    const teste = await Api(quantity, difficulty);

    console.log(teste);
  }

  return(
    <GameContext.Provider value={{ config, questions, getQuestions }} >
      {props.children}
    </GameContext.Provider>
  )
};