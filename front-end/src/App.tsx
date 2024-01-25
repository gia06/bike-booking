import styled from "styled-components";
import BikeList from "./components/BikeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyles } from "./GlobalStyles";
import { UseFetch } from "./hooks/useFetch";
import DataForm from "./components/DataForm";

function App() {
  const { bikes, setBikes, bikeStats } = UseFetch();

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <BikeList bikes={bikes} setBikes={setBikes} />
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
