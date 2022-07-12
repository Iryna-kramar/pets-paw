import React, { useState, useEffect } from "react";
//import axios from "axios";


const Home = () => {
  const axios = require("axios").default;

  return axios({
    method: "GET",
    url: "https://api.thecatapi.com/v1/breeds",
    headers: {
      "x-api-key": "16ed9974-5f25-443f-8cb6-cd0d9d6d3b1a",
    },
  })
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((err) => {
      // Handle Error Here
      console.error(err);
    });
};

export default Home;