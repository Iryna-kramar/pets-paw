import React from "react";
import styled from "styled-components";
import MyButton from "./MyButton";
import { Link } from "react-router-dom";

const NavItem = ({ icon, color, value }) => {
  const lowerCaseValue = `${value}`.toLocaleLowerCase();

  return (
    <WrapperItems>
      <div className={value}>{icon}</div>
      <Link className="link" to={`/${lowerCaseValue}`}>
        <MyButton>{value}</MyButton>
      </Link>
    </WrapperItems>
  );
};

const WrapperItems = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  :hover {
    div {
      border: 4px solid #ffffff;
    }
  }
  :active {
    div {
      border: 4px solid #fbe0dc;
    }
  }
  div {
    width: 100%;
    height: 100%;
    border: 4px solid rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    display: grid;
    place-items: center;
  }

  .link {
    display: block;
    width: 100%;
  }

  .VOTING {
    background-color: #b4b7ff;
  }
  .BREEDS {
    background-color: #97eab9;
  }
  .GALLERY {
    background-color: #ffd280;
  }

`;

export default NavItem;
