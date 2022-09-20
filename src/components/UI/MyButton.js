import React, {useState} from "react";
import styled from "styled-components";

const MyButton = ({ children, ...props }) => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  };

  return (
    <ButtonStyle className={isActive ? 'active' : ''} onClick={handleClick}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  padding: 10px;
  border: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background-color: white;
  width: 100%;
  height: 100%;
  left: 133px;
  top: 551px;

  background: #ffffff;
  border-radius: 10px;
  text-align: center;
  letter-spacing: 2px;

  color: #ff868e;

  :hover {
    background-color: #fbe0dc;
    color: #ff868e;
    border: #fbe0dc;
  }

  .active {
    background-color: #ff868e;
    color: white;
    border: #ff868e;
  }

`;

export default MyButton;
