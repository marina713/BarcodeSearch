import { AppContainer, Header, Heading, HeaderContainer } from "./styles";
import Home from "./screens/Home";

function App() {
  return (
    <AppContainer>
      <Header>
        <HeaderContainer>
          <Heading>Search a Barcode</Heading>
        </HeaderContainer>
      </Header>
      <Home />
    </AppContainer>
  );
}

export default App;
