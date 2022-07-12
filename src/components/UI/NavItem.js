import React from "react";
import styled from "styled-components";
import MyButton from "./MyButton";


const NavItem = ({ icon, color, value }) => {
  return (
    <WrapperItems>
      <div className={color}>{icon}</div>
      <MyButton>{value}</MyButton>
    </WrapperItems>
  );
};


const WrapperItems = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  div {
    width: 100%;
    height: 100%;
    border: 4px solid rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    display: grid;
    place-items: center;
  }

  .purple {
    background-color: #b4b7ff;
  }
  .green {
    background-color: #97eab9;
  }
  .yellow {
    background-color: #ffd280;
  }
`;

export default NavItem;