import { useState } from "react"

import Question from "../../components/Pages/Quizz"
import { Container } from "../../styles/global"

const Quizz = () => {
  const [counter, setCounter] = useState(0)

  const handleAnswer = () => {
    setCounter(counter++)
  }

  return(
    <Container>
      <Question counter={counter} />
    </Container>
  )
}

export default Quizz
