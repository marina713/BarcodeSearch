import { AppContainer, Header, Heading, HeaderContainer } from "./styles";
import Home from "./screens/Home";

function App() {
  return (
    <AppContainer>
      <Header>
        <HeaderContainer>
          <Heading>Search a Barcode</Heading>
        </HeaderContainer>
        <Home />
      </Header>
    </AppContainer>
  );
}

export default App;
