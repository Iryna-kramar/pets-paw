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
      color: "purple",
      value: "VOTING",
    },
    {
      id: 2,
      icon: <img src={breeds} className="icon" alt="breeds"></img>,
      color: "green",
      value: "BREEDS",
    },
    {
      id: 3,
      icon: <img src={images} className="icon" alt="images"></img>,
      color: "yellow",
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
  gap: 10px;
  padding-top:20px;
`;

