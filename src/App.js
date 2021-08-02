import React from "react";
import styled from "styled-components";
import Back from "./Components/Back";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Stuff from "./Components/Stuff";

function App() {
  return (
    <Container>
      <Header />
      <Banner />
      <Back />
      <Stuff />
    </Container>
  );
}

export default App;

const Container = styled.div``;
