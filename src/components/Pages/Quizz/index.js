import { useContext, useEffect, useState } from "react"

import Api from "../../../services/api"
import { getDataFromUrl } from "../../../utils"
import { GameContext } from "../../../contexts/Game"

import { Card } from "./styles"

const Question = ({ counter }) => {
  const { config } = useContext(GameContext)
  
  const getQuestions = async () => {
    const params = ['quantity', 'difficulty']
    const data = config.quantity || config.difficulty ? config : getDataFromUrl(params)
    const response = await Api(data.quantity, data.difficulty)
    
    return response
  }

  const renderQuestions = async () => {
    const data = await getQuestions()
    console.log(data)

    return (
      <section>
        <div>
        </div>
        <div>
        </div>
    </section>
    )
  }

  return(
    <Card>
      { renderQuestions(counter) }
    </Card>
  )
}

export default Question
