import React from "react";
import "../index.css";
import styled from "styled-components";
import BREEDS from "../images/VOTING.png";
import ButtonTopBar from "./ButtonTopBar";
import GridPics from "./GridPics";
import ArrowLeftButton from "../images/ArrowLeftButton";

function BreedsContent() {
  return (
    <div>
      <ButtonTopBar></ButtonTopBar>
      <ContentWrapper>
        <div className="buttons">
          <ArrowLeftButton />
          <img src={BREEDS} className="pageName"></img>
          <div>Select by Breeds</div>
          <div>Select by Limits</div>
          <div>Select by AB</div>
          <div>Select by BA </div>
        </div>
        <GridPics />
      </ContentWrapper>
    </div>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
  border-radius: 20px;
  height: 100%;

  div.buttons {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10px;
  }


`;

export default BreedsContent;
