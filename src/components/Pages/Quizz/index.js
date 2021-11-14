import { useContext, useEffect, useState } from "react"

import Api from "../../../services/api"
import { getDataFromUrl } from "../../../utils"
import { GameContext } from "../../../contexts/Game"

import { Card } from "./styles"

const Question = () => {
  const { config } = useContext(GameContext)
  const [counter, setCounter] = useState(0)
  const [question, setQuestion] = useState()
  
  const getQuestions = async () => {
    const data = config.quantity || config.difficulty ? config : getDataFromUrl()
    try {
      const response = await Api(data.quantity, data.difficulty)
      setQuestion(response)
    } catch (err) {
      console.log(err)
    }
  }

  const handleAnswer = () => {
    const questionsQuantity = question.length - 1

    if (counter < questionsQuantity) {
      return setCounter(counter + 1)
    }
  }

  const renderQuestions = () => {
    const answers = [
      ...question[counter].incorrect_answers,
      question[counter].correct_answer
    ]

    return (
      <div>
        <div>{question[counter].category}</div>
        <div>{question[counter].question}</div>
        {
          answers.map((answer, index) => {
            return (
              <div key={index}>
                <div>{answer}</div>
              </div>
            )
          })
        }
      </div>
    )
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return(
    <Card>
      {
        question && question.length ? renderQuestions() : null
      }
      <button onClick={() => handleAnswer()}>clique</button>
    </Card>
  )
}

export default Question
