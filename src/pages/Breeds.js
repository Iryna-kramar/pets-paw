import React from "react";
import Welcome from "../components/Welcome";
import BreedsContent from "../components/BreedsContent";
import styled from "styled-components";

function Breeds() {
  return (
    <Wrapper>
      <Welcome />
      <BreedsContent />
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

export default Breeds;
