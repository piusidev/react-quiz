import { useContext, useRef } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "../../contexts/Game"

import Option from "../../components/Option"
import { Container, Heading, PrimaryButton, Typography } from "../../styles/global"
import { ButtonsContainer, Homepage, Wrapper } from "./styles"

const Home = () => {
  const { config } = useContext(GameContext)
  const quantityRef = useRef([])
  const difficultyRef = useRef([])
  const history = useHistory()

  const startGame = () => {
    let quantity = quantityRef.current
    let difficulty = difficultyRef.current

    quantity.map((item) => {
      if(item.checked === true) {
        quantity = item.value
      }
    })

    difficulty.map((item) => {
      if(item.checked === true) {
        difficulty = item.value
      }
    })

    config.quantity = quantity
    config.difficulty = difficulty

    history.push(`/quizz?quantity=${quantity}&difficulty=${difficulty}`)
  }
  
  return(
    <div>
      <Container>
        <Homepage>
          <Heading level={1} size={3} align={'center'}>
            Bem-vindo ao ReactQuizz!
          </Heading>
          <section>
            <div>
              <Typography align={'center'}>
                Quantas perguntas quer responder?
              </Typography>
              <ButtonsContainer>
                <Option ref={el => quantityRef.current.push(el)} text={'5'}  value={5} name={'quantityQuestions'} />
                <Option ref={el => quantityRef.current.push(el)} text={'10'} value={10} name={'quantityQuestions'} />
                <Option ref={el => quantityRef.current.push(el)} text={'15'} value={15} name={'quantityQuestions'} />
                <Option ref={el => quantityRef.current.push(el)} text={'20'} value={20} name={'quantityQuestions'} />
              </ButtonsContainer>
            </div>
            <div>
              <Typography align={'center'}>
                Em qual dificuldade quer jogar?
              </Typography>
              <ButtonsContainer>
                <Option ref={el => difficultyRef.current.push(el)} text={'F??cil'} value={'easy'} name={'difficultyQuestions'} />
                <Option ref={el => difficultyRef.current.push(el)} text={'M??dio'} value={'medium'} name={'difficultyQuestions'} />
                <Option ref={el => difficultyRef.current.push(el)} text={'D??ficil'} value={'hard'} name={'difficultyQuestions'} />
              </ButtonsContainer>
            </div>
          </section>
          <Wrapper>
            <PrimaryButton onClick={() => {startGame()}}>
              Come??ar!
            </PrimaryButton>
          </Wrapper>
        </Homepage>
      </Container>
    </div>
  )
}

export default Home