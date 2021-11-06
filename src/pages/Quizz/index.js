import { useContext, useEffect, useState } from "react"

import Api from "../../services/api"

import { getDataFromUrl } from "../../utils"

import { GameContext } from "../../contexts/Game"
import { Question } from "./styles"
import { Container } from "../../styles/global"

const Quizz = () => {
  const [loading, setLoading] = useState(true)
  const { config } = useContext(GameContext)

  const getQuestions = async () => {
    const params = ['quantity', 'difficulty']
    const data = config.quantity || config.difficulty ? config : getDataFromUrl(params)
    const response = await Api(data.quantity, data.difficulty, setLoading(false))

    return response
  }

  useEffect(() => {
    getQuestions()
  }, [])
  
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
                  console.log()
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

export default Quizz