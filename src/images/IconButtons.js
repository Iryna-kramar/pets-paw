import React from "react";
import styled from "styled-components";

function IconButtons({ value }) {

  const iconButtons = [
    {
      iconName: "search",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.3613 18.2168L14.6012 13.2662C15.8251 11.8113 16.4957 9.98069 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.7506 19.3034 19.764 18.6357 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z" />
        </svg>)
      ,
    },
    {
      iconName: "arrowLeft",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_1332)">
            <path d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z" />
          </g>
          <defs>
            <clipPath id="clip0_1_1332">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];


  return (
    <Wrapper>
      <button>{iconButtons.icon}</button>
      {/* {iconButtons
        .filter((item) => item.iconName === { value })
        .map((iconNameItem) => {
          return <button>{iconNameItem.icon}</button>
        })} */}
    </Wrapper>

  );
}

const Wrapper = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  background: #fbe0dc;
  border-radius: 10px;
  button {
    justify-content: center;
    width: 100%;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    padding: 0;
    svg {
      padding-top:5px;
      fill: #ff868e;
    }
  }

  :hover {
    background: #ff868e;
    svg {
      fill: #ffffff;
    }
  }
`;

export default IconButtons;
