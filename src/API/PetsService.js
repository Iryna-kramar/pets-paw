import React, { useState, createContext } from "react";

const PetsPawContext = createContext();

const PetsPawProvider = ({ children }) => {
  const [breed, setBreed] = useState([]);
  // const [id, setId] = useState([]);

  const axios = require("axios").default;

  const headers = {
    "x-api-key": "16ed9974-5f25-443f-8cb6-cd0d9d6d3b1a",
  };
  const url = "https://api.thecatapi.com/v1/breeds/";

  const searchBreeds = async (name) => {
    const response = await axios
      .get(`${url}search?q=${name}`, `${headers}`)
      .catch((err) => console.log(err));
    if (response.data.length === 1) {
      setBreed(response.data);


      
      console.log(response.data);
    } else {
      console.log("no such name. Try again!");
    }
  };

    return (
      <PetsPawContext.Provider value={{ breed, searchBreeds }}>
        {children}
      </PetsPawContext.Provider>
    );
  };

export { PetsPawProvider, PetsPawContext };

