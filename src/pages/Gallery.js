import React from "react";
import Welcome from "../components/Welcome";
import GalleryContent from "../components/GalleryContent";
import styled from "styled-components";

function Gallery() {
  return (
    <Wrapper>
      <Welcome />
      <GalleryContent />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  height: 100%;

  @media (min-width: 890px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Gallery;
