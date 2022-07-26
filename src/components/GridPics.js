import React, { useContext, useEffect } from "react";
import {
  Grid,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import styled from "styled-components";
import { PetsPawContext } from "../API/PetsService";

function GridPics() {
  const { nameImageData } = useContext(PetsPawContext);
  const { getAllData } = useContext(PetsPawContext);

  useEffect(() => {
    getAllData();
  }, []);

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  function itemData(url) {
    return [
      {
        img: `${url[0]?.url}`,
        title: `${url[0]?.name}`,
        rows: 2,
        cols: 1,
      },
      {
        img: `${url[1]?.url}`,
        title: `${url[1]?.name}`,
        rows: 1,
        cols: 1,
      },
      {
        img: `${url[2]?.url}`,
        title: `${url[2]?.name}`,
        rows: 1,
        cols: 1,
      },
      {
        img: `${url[3]?.url}`,
        title: `${url[3]?.name}`,
        rows: 2,
        cols: 2,
      },
      {
        img: `${url[4]?.url}`,
        title: `${url[4]?.name}`,
        rows: 1,
        cols: 1,
      },
      {
        img: `${url[5]?.url}`,
        title: `${url[5]?.name}`,
        rows: 1,
        cols: 1,
      },
      {
        img: `${url[6]?.url}`,
        title: `${url[6]?.name}`,
        rows: 1,
        cols: 1,
      },
      {
        img: `${url[7]?.url}`,
        title: `${url[7]?.name}`,
        rows: 2,
        cols: 1,
      },
      {
        img: `${url[8]?.url}`,
        title: `${url[8]?.name}`,
        rows: 2,
        cols: 2,
      },
      {
        img: `${url[9]?.url}`,
        title: `${url[9]?.name}`,
        rows: 1,
        cols: 1,
      },
      {
        img: `${url[10]?.url}`,
        title: `${url[10]?.name}`,
        rows: 2,
        cols: 1,
      },
      {
        img: `${url[11]?.url}`,
        title: `${url[11]?.name}`,
        rows: 1,
        cols: 1,
      },
      {
        img: `${url[12]?.url}`,
        title: `${url[12]?.name}`,
        rows: 1,
        cols: 1,
      },
      {
        img: `${url[13]?.url}`,
        title: `${url[13]?.name}`,
        rows: 2,
        cols: 2,
      },
      {
        img: `${url[14]?.url}`,
        title: `${url[14]?.name}`,
        rows: 1,
        cols: 1,
      },
    ];
  }

  return (
    <GridWrapper>
      <Grid>
        <ImageList
          sx={{ maxHeight: 746, overflowY: "scroll" }}
          variant="quilted"
          cols={3}
          rowHeight={121}
          gap={16}
        >
          {itemData(nameImageData).map((item) => (
            <ImageListItem
              key={item?.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item?.img, 121, item.rows, item.cols)}
                alt={item?.title}
                loading="lazy"
              />
              <ImageListItemBar className="hoverBackground"></ImageListItemBar>
              <ImageListItemBar title={item.title}>
                {item.title}
              </ImageListItemBar>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  max-height: 100vh;
  margin-top: 20px;

  li {
    display: flex;
    img {
      border-radius: 20px;
    }

    div {
      display: none;
    }

    div.hoverBackground {
      display: none;
    }
  }

  li:hover {
    div {
      height: 34px;
      left: 10px;
      right: 10px;
      background: #ffffff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      bottom: 10px;

      div {
        text-align: center;
        justify-content: center;
        color: #ff868e;
      }
    }

    div.hoverBackground {
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      height: 100%;
      background: rgba(255, 134, 142, 0.6);
      border-radius: 20px;
      div {
        display: none;
      }
    }
  }
`;

export default GridPics;
