import React, { useContext, useState } from "react";
import "../index.css";
import styled from "styled-components";
import BREEDS from "../images/BREEDS.png";
import ButtonTopBar from "./ButtonTopBar";
import GridPics from "./GridPics";
import ArrowLeftButton from "../images/ArrowLeftButton";
import { PetsPawContext } from "../API/PetsService";

function BreedsContent() {

  return (
    <ButtontWrapper>
      <ButtonTopBar></ButtonTopBar>
      <ContentWrapper>
        <div className="buttons">
          <ArrowLeftButton />
          <img src={BREEDS} className="pageName" alt="breeds"></img>
          <div>Select by Breeds</div>
          <div>Select by Limits</div>
          <div>Select by AB</div>
          <div>Select by BA </div>
        </div>
        <GridPics />
      </ContentWrapper>
    </ButtontWrapper>
  );
}

const ButtontWrapper = styled.div`
  height: 100vh;
`;

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
    img {
      width: 156px;
      height: 40px;
    }
  }
`;

export default BreedsContent;
