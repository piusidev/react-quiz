import { Container, Heading, PrimaryButton, Typography } from "../../styles/global";
import {ButtonsContainer, Homepage, StartGame} from "./styles";
import Option from "../../components/Option";

const Home = () => {

  return(
    <div>
      <Container>
        <Homepage>
          <Heading level={1} size={3} align={'center'}>
            Welcome to ReactQuizz.
          </Heading>
          <section>
            <div>
              <Typography align={'center'}>
                Quantas perguntas quer responder?
              </Typography>
              <ButtonsContainer>
                <Option text={'5'} value={5} name={'quantityQuestions'} />
                <Option text={'10'} value={10} name={'quantityQuestions'} />
                <Option text={'15'} value={15} name={'quantityQuestions'} />
                <Option text={'20'} value={20} name={'quantityQuestions'} />
              </ButtonsContainer>
            </div>
            <div>
              <Typography align={'center'}>
                Em qual dificuldade quer jogar?
              </Typography>
              <ButtonsContainer>
                <Option text={'Fácil'} value={'easy'} name={'difficultyQuestions'} />
                <Option text={'Médio'} value={'medium'} name={'difficultyQuestions'} />
                <Option text={'Díficil'} value={'hard'} name={'difficultyQuestions'} />
              </ButtonsContainer>
            </div>
          </section>
          <StartGame>
            <PrimaryButton onClick={() => {start()}}>
              Começar!
            </PrimaryButton>
          </StartGame>
        </Homepage>
      </Container>
    </div>
  )
}

export default Home;