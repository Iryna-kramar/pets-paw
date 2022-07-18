import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import styled from "styled-components";
import Home from "./pages/Home";
import Voting from "./pages/Voting";
import Breeds from "./pages/Breeds";
import Gallery from "./pages/Gallery";
import { PetsPawProvider } from "./API/PetsService";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
