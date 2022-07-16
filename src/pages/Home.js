import React from "react";
import Welcome from "../components/Welcome";
import HomeContent from "../components/HomeContent";
import styled from "styled-components";


function Home() {
  return (
    <Wrapper>
      <Welcome />
      <HomeContent />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 890px) {
    grid-template-columns: 1fr 1fr;
  }
`;


export default Home;
