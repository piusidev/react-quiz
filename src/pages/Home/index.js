import { Container, Heading, PrimaryButton, Typography } from "../../styles/global";
import { ButtonsContainer, Homepage, Wrapper } from "./styles";
import Option from "../../components/Option";
import { useRef } from "react";

const Home = () => {

  const quantityRef = useRef({});
  const difficultyRef = useRef({});

  const startGame = () => {
    let quantity = quantityRef.current;
    let difficulty = difficultyRef.current;

    Object.entries(quantity).forEach(([key, value]) => {
      if(value.checked === true) {
        quantity = value.value;
      }
    });

    Object.entries(difficulty).forEach(([key, value]) => {
      if(value.checked === true) {
        difficulty = value.value;
      }
    });
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
                <Option ref={el => quantityRef.current['0'] = el} text={'5'} value={5} name={'quantityQuestions'} />
                <Option ref={el => quantityRef.current['1'] = el}  text={'10'} value={10} name={'quantityQuestions'} />
                <Option ref={el => quantityRef.current['2'] = el}  text={'15'} value={15} name={'quantityQuestions'} />
                <Option ref={el => quantityRef.current['3'] = el}  text={'20'} value={20} name={'quantityQuestions'} />
              </ButtonsContainer>
            </div>
            <div>
              <Typography align={'center'}>
                Em qual dificuldade quer jogar?
              </Typography>
              <ButtonsContainer>
                <Option ref={el => difficultyRef.current['0'] = el} text={'Fácil'} value={'easy'} name={'difficultyQuestions'} />
                <Option ref={el => difficultyRef.current['1'] = el} text={'Médio'} value={'medium'} name={'difficultyQuestions'} />
                <Option ref={el => difficultyRef.current['2'] = el} text={'Díficil'} value={'hard'} name={'difficultyQuestions'} />
              </ButtonsContainer>
            </div>
          </section>
          <Wrapper>
            <PrimaryButton onClick={() => {startGame()}}>
              Começar!
            </PrimaryButton>
          </Wrapper>
        </Homepage>
      </Container>
    </div>
  )
}

export default Home;