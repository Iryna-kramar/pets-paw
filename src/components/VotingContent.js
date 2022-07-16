import React from "react";
import "../index.css";
import styled from "styled-components";
import { PetsPawContext } from "../API/PetsService";
import ButtonTopBar from "./ButtonTopBar";
import ArrowLeftButton from "../images/ArrowLeftButton";
import VOTING from "../images/VOTING.png";


function VotingContent() {
    const { image } = React.useContext(PetsPawContext);
    const { id } = image;

  return (
    <div>
      <ButtonTopBar></ButtonTopBar>
      <ContentWrapper>
        <div className="buttons">
          <ArrowLeftButton />
          <img src={VOTING} className="pageName"></img>
        </div>
        <div className="pictures">
          {/* <img src={image.url} alt={name}></img> */}
          <h3>{id}</h3>
        </div>
        <div className="actions"></div>
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

  div.pictures {
    width: 100%;
    background: url(oLtx9gsxx.jpg);
    border-radius: 20px;
  }
`;

export default VotingContent;
