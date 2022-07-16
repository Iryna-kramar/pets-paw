import React from "react";
import "../index.css";
import NavBar from "./NavBar";
import styled from "styled-components";
import Logo from "../images/Logo.svg";

function Welcome() {
  return (
    <Wrapper>
      <img src={Logo} className="logo" alt="Logo" />
      <h1>Hi intern!</h1>
      <p>Welcome to MI 2022 Front-end test</p>
      <div>
        <h4>Lets start using The Cat API</h4>
        <NavBar />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 446px;

  h1 {
    padding-top: 75px;
  }
  p {
    color: #8c8c8c;
    padding-bottom: 60px;
  }

  div {
    p {
      color: #1d1d1d;
      font-style: normal;
      padding-bottom: 20px;
    }
  }
`;

export default Welcome;
