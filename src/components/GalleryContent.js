import React from "react";
import "../index.css";
import styled from "styled-components";
import ButtonTopBar from "./ButtonTopBar";
import ArrowLeftButton from "../images/ArrowLeftButton";
import GALLERY from "../images/GALLERY.png";
import UPLOAD from "../images/UPLOAD.svg";
import GridPics from "./GridPics";

function GalleryContent() {
  return (
    <div>
      <ButtonTopBar></ButtonTopBar>
      <ContentWrapper>
        <div className="buttons">
          <div>
            <ArrowLeftButton />
            <img src={GALLERY} className="pageName"></img>
          </div>
          <img src={UPLOAD} className="upload"></img>
        </div>
        <div className="filter"></div>
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
  height: 100vh;

  div.buttons {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 10px;
    div {
      display: flex;
      gap: 10px;    }
  }

  div.filter {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10px;
    height: 156px;
    width: 100%;
    background: #f8f8f7;
    border-radius: 20px;
    margin-top: 20px;
  }
`;
export default GalleryContent;
