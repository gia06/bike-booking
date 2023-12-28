import styled from "styled-components";
import Bike from "./components/Bike";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import { GlobalStyles } from "./GlobalStyles";
import Statistics from "./components/Statistics";
// import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Bike />
        <Form />
        <Statistics />
      </Main>
      <Footer />
    </>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: row;
`;
