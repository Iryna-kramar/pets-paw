import React, { useState, createContext } from "react";
//import axios from "axios";


const PetsPawContext = createContext();

const PetsPawProvider = ({ children }) => {
  const [breed, setBreed] = useState([]);
  const [image, setImage] = useState([]);
  
  const searchBreeds = async (name) => {
    const axios = require("axios").default;

    const response = await axios({
      method: "GET",
      url: `https://api.thecatapi.com/v1/breeds`,
      headers: {
        "x-api-key": "16ed9974-5f25-443f-8cb6-cd0d9d6d3b1a",
      },
    })
      .catch((err) => console.error(err));


    console.log(response.data.image);
    if (response) {
      setImage(response.data.image);

    } else {
      alert("no such name. Try again!");
    }
  };

  return (
    <PetsPawContext.Provider value={{ breed, image, searchBreeds }}>
      {children}
    </PetsPawContext.Provider>
  );
};

export { PetsPawProvider, PetsPawContext };


// const searchBreedsByName = async (name) => {
//   const axios = require("axios").default;

//   const response = await axios({
//     method: "GET",
//     url: `https://api.thecatapi.com/v1/breeds/search?q=${name}`,
//     headers: {
//       "x-api-key": "16ed9974-5f25-443f-8cb6-cd0d9d6d3b1a",
//     },
//   }).catch((err) => console.error(err));

//   console.log(response);
//   if (response.data === 1) {
//     setBreed(response.data);
//   } else {
//     alert("no such name. Try again!");
//   }
// };