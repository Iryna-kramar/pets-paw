import React from "react";
import { Stack, ImageList, ImageListItem } from "@mui/material";
import styled from "styled-components";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function GridPics() {
  return (
    <GridWrapper>
      <Stack>
        <ImageList
          sx={{ maxWidth: "100%", maxHeight: "100%" }}
          variant="quilted"
          cols={3}
          rowHeight={121}
          gap={16}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </GridWrapper>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 2,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 2,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 2,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "cat",
    rows: 1,
    cols: 1,
  },
];

const GridWrapper = styled.div`
    max-height: 100vh;
    overflow: scroll;
    margin-top: 20px;
   img {
    border-radius: 16px;
  }
`;

export default GridPics;
