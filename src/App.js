import React from "react";
import "./index.css";
import Welcome from "./components/Welcome";
import MainContent from "./components/MainContent";
import styled from "styled-components";


function App() {
  return (
    <Wrapper>
        <Welcome />
        <MainContent />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  @media (min-width: 680px) {
    grid-template-columns: 1fr 1fr;
  }
`;


export default App;
