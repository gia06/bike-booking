import styled from "styled-components";
import BikesContainer from "./components/BikeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyles } from "./GlobalStyles";
import { UseFetch } from "./hooks/useFetch";
import DataForm from "./components/DataForm";

function App() {
  const { bikes, bikeStats } = UseFetch();

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <BikesContainer bikes={bikes} />
        <DataForm bikeStats={bikeStats} />
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
