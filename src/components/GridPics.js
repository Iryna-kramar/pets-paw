import React, { useContext } from "react";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import styled from "styled-components";
import { PetsPawContext } from "../API/PetsService";

function GridPics() {
  const { nameImageData } = useContext(PetsPawContext);

  return (
    <GridWrapper>
      <Box sx={{ maxWidth: "100%", maxHeight: "100%", overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={16}>
          {nameImageData.map((item) => (
            <ImageListItem key={item.url} className="imageListItem">
              <img
                src={`${item.url}?w=248&fit=crop&auto=format`}
                alt={item.title}
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              />
              <div className="imageListItemBar">
                <ImageListItemBar title={item.name}></ImageListItemBar>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  max-height: 100vh;
  margin-top: 20px;

  div.imageListItem {
    img {
      :hover {

          background: rgba(255, 134, 142, 0.6);
          border-radius: 20px;

      }
    }

    div.imageListItemBar {
      background: rgba(255, 134, 142, 0.6);
      background: #ffffff;
      border-radius: 10px;
      margin: auto 10px 10px 10px;
      height: 50px;
    }
  }
`;

export default GridPics;
