import Header from "./components/Header";
import Body from "./components/Body";
import {Container} from './components/styled/Container.styled'

function App() {
  // you can add variables and functions before return
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default App;
