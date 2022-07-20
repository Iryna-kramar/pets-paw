import React, { useState, createContext } from "react";

const PetsPawContext = createContext();

const PetsPawProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [nameImageData, setNameImageData] = useState([]);
  const [dataByName, setDataByName] = useState([]);
  const [dataImage, setDataImage] = useState([]);
  const [getName, setGetName] = useState([]);

  const axios = require("axios").default;

  const headers = {
    "x-api-key": "16ed9974-5f25-443f-8cb6-cd0d9d6d3b1a",
  };
  const url = "https://api.thecatapi.com/v1/breeds/";

  const getAllData = async (props) => {
    const response = await axios
      .get(`${url}`, `${headers}`)
      .catch((err) => console.log(err));

     if (response.data.some((breed) => breed.name.includes(props))) {
       setData(response.data);

       const data = response.data;
       console.log(data, "DATA");
       const shortData = data.map((obj) => {
         return {
           name: obj.name,
           image: obj.image,
           url: obj.image?.url,
           image_id: obj.image?.id,
         };
       });
       setNameImageData(shortData);
       console.log(shortData, "nameImageData");


       const result = shortData.filter((breed) => breed.name.includes(props));
       setDataByName(result);
       console.log(result, "data by name");
     } else {
      alert("no such breed name. Try again!");
     }
    };


    const searchBreeds = async (inputValue) => {
      const resp = await axios
        .get(`${url}search?q=${inputValue}`, `${headers}`)
        .catch((err) => console.log(err));

      if (resp.data.length === 1) {
        console.log(inputValue);

      } else {
        alert("no such breed name. Try again!");
      }
    };

  return (
    <PetsPawContext.Provider
      value={{
        dataByName,
        dataImage,
        getName,
        data,
        nameImageData,
        searchBreeds,
        getAllData,
      }}
    >
      {children}
    </PetsPawContext.Provider>
  );
};

export { PetsPawProvider, PetsPawContext };
