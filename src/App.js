import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import Welcome from "./components/Welcome";
import MainContent from "./components/HomeContent";
import styled from "styled-components";
import Home from "./pages/Home";
import Voting from "./pages/Voting";
import Breeds from "./pages/Breeds";
import Gallery from "./pages/Gallery";
import { PetsPawProvider } from "./API/PetsService";

function App() {
  return (
    <PetsPawProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </PetsPawProvider>
  );
}

export default App;
