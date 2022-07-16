import React from "react";
import Welcome from "../components/Welcome";
import VotingContent from "../components/VotingContent";
import styled from "styled-components";

function Voting() {
  return (
    <Wrapper>
      <Welcome />
      <VotingContent />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  height:100vh;

  @media (min-width: 890px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Voting;
