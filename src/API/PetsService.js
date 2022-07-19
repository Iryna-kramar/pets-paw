import React, { useState, createContext } from "react";

const PetsPawContext = createContext();

const PetsPawProvider = ({ children }) => {
  const [dataByName, setdDataByName] = useState([]);
  const [dataImage, setDataImage] = useState([]);
  const [getName, setGetName] = useState([]);
  const [data, setData] = useState([]);

  const axios = require("axios").default;

  const headers = {
    "x-api-key": "16ed9974-5f25-443f-8cb6-cd0d9d6d3b1a",
  };
  const url = "https://api.thecatapi.com/v1/breeds/";

  const searchBreeds = async (name) => {
    const response = await axios
      .get(`${url}`, `${headers}`)
      .catch((err) => console.log(err));
    setData(response.data);

    const data = response.data;
    console.log(data, "DATA");

    const result = data.filter((breed) => breed.name === `${name}`);
    setdDataByName(result);
    setDataImage(result[0].image);
    setGetName(result[0].name);
  };

  return (
    <PetsPawContext.Provider
      value={{ dataByName, dataImage, getName, data, searchBreeds }}
    >
      {children}
    </PetsPawContext.Provider>
  );
};

export { PetsPawProvider, PetsPawContext };

// const searchBreeds = async (name) => {
//   const response = await axios
//     .get(`${url}search?q=${name}`, `${headers}`)
//     .catch((err) => console.log(err));
//   if (response.data.length === 1) {
//     setBreed(response.data);
//     console.log(response.data);
//   } else {
//     console.log("no such name. Try again!");
//   }
// };
