import React from "react";
import "../index.css";
import styled from "styled-components";
import Search from "./UI/Search";
import Reactions from "./UI/Reactions";
import Icons from "../images/Icons";
import IconButtons from "../images/IconButtons";


function ButtonTopBar() {
  return (
    <ButtonWrapper>
      <Search></Search>
      <Icons></Icons>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 2.3fr 1fr;
  grid-gap: 20px;
  align-items: center;
  padding-bottom: 10px;
`;

export default ButtonTopBar;
