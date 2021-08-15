import { Container, Heading } from "../../styles/global"

const Home = () => {
  return(
    <div>
      <Container>
        <Heading level={1} size={36} align={'center'}>
          Olá! Seja bem vindo ao ReactQuizz
        </Heading>
      </Container>
    </div>
  )
}

export default Home;