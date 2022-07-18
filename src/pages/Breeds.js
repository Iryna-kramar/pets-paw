import React from "react";
import Welcome from "../components/Welcome";
import BreedsContent from "../components/BreedsContent";
import styled from "styled-components";

function Breeds() {
  return (
    <Wrapper>
      <div className="welcome">
        <Welcome />
      </div>
      <BreedsContent />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  height: 100%;


  @media (min-width: 890px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Breeds;
