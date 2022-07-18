import React, { useState, useContext } from "react";
import styled from "styled-components";
import SearchButton from "../../images/SearchButton";
import { PetsPawContext } from "../../API/PetsService";


const Search = () => {
  const [name, setName] = useState("");
 const { searchBreeds } = useContext(PetsPawContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      searchBreeds(name);
    }
    console.log(name);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search for breeds by name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <SearchButton value={"search"} type="submit"></SearchButton>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  .form-control {
    background: #ffffff;
    border-radius: 20px;
    display: grid;

    grid-template-columns: 1fr auto;
    column-gap: 0.5rem;
    padding: 10px;
    input {
      border: none;
      outline: none;
      font-size: 20px;
      font-family: "Jost", sans-serif;
    }
    input::placeholder {
      color: #8c8c8c;
    }

  }
`;


export default Search;
