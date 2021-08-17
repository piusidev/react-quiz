import { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../../contexts/Game";
import Api from "../../services/api";
import { Question } from "./styles";
import { Container, Heading, PrimaryButton, Typography } from "../../styles/global";

const Quizz = () => {
  const { config } = useContext(GameContext);
  let { questions } = useContext(GameContext);
  const [loading, setLoading] = useState(true);

  const getQuestions = async () => {
    const response = await Api(config.quantity, config.difficulty);
    questions = [...response];
    console.log(questions)
    setLoading(false);
  }

  useEffect(() => {
    getQuestions();
  }, []);
  
  return(
    <Container>
      {
        loading === true ? (
          <>Carregando</>
        ) : (
          <Question>
            <section>
              <div>
                {
                  console.log(questions)
                }
              </div>
              <div>
                teste
              </div>
            </section>
          </Question>
        )
      }
    </Container>
  )
}

export default Quizz;