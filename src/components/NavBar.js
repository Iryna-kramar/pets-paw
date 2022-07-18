import React from "react";
import NavItem from "./UI/NavItem";
import styled from "styled-components";
import vote from "../images/vote.svg";
import images from "../images/images.svg";
import breeds from "../images/breeds.svg";

export default function NavBar() {

  const items = [
    {
      id: 1,
      icon: <img src={vote} className="icon" alt="vote"></img>,
      value: "VOTING",
    },
    {
      id: 2,
      icon: <img src={breeds} className="icon" alt="breeds"></img>,
      value: "BREEDS",
    },
    {
      id: 3,
      icon: <img src={images} className="icon" alt="images"></img>,
      value: "GALLERY",
    },
  ];

  return (
    <Wrapper>
      {items.map((item) => {
        return <NavItem key={item.id} {...item}></NavItem>;
      })}
    </Wrapper>
  );
};


const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding-top:20px;
`;

