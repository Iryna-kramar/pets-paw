import React from "react";
import "../index.css";
import styled from "styled-components";
import girl from "../images/girl.svg";

function HomeContent() {
  return (
    <Wrapper>
      <div>
        <img src={girl} className="logo" alt="Logo" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #fbe0dc;
  border-radius: 20px;
  height: 100%;

  div {
    position: relative;
    right: -30px;
    img {
      width: 100%;
    }
  }
`;

export default HomeContent;
