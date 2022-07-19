import React, { useContext } from "react";
import "../index.css";
import styled from "styled-components";
import { PetsPawContext } from "../API/PetsService";
import ButtonTopBar from "./ButtonTopBar";
import ArrowLeftButton from "../images/ArrowLeftButton";
import VOTING from "../images/VOTING.png";

function VotingContent() {
  const { getName } = useContext(PetsPawContext);
  const { dataImage } = useContext(PetsPawContext);
  const { url, id } = dataImage;

  return (
    <div>
      <ButtonTopBar />
      <ContentWrapper>
        <div className="buttons">
          <ArrowLeftButton />
          <img src={VOTING} className="pageName" alt="voting"></img>
        </div>
        <div className="pictures">
          <img src={url} alt={getName}></img>
        </div>
        <div className="actions">
          <h3>{id}</h3>
        </div>
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
  height: 100vh;

  div.buttons {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10px;
  }

  div.pictures {
    margin-top: 20px;
    img {
      width: 100%;
      height: 360px;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  div.actions {
    background: #f8f8f7;

    width: 100%;
    border-radius: 20px;
  }
`;

export default VotingContent;
