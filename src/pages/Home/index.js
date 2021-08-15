import { Container, Heading, PrimaryButton, Typography } from "../../styles/global";
import {ButtonsContainer, Homepage} from "./styles";

const Home = () => {
  return(
    <div>
      <Container>
        <Heading level={1} size={36} align={'center'}>
          Welcome to ReactQuizz.
        </Heading>
        <Homepage>
          <div>
            <Typography align={'center'}>
              Quantas perguntas quer responder?
            </Typography>
          </div>
          <div>
            <Typography align={'center'}>
              Em qual dificuldade quer jogar?
            </Typography>
            <ButtonsContainer>
              <PrimaryButton>5</PrimaryButton>
              <PrimaryButton>10</PrimaryButton>
              <PrimaryButton>15</PrimaryButton>
              <PrimaryButton>20</PrimaryButton>
            </ButtonsContainer>
          </div>
        </Homepage>
      </Container>
    </div>
  )
}

export default Home;