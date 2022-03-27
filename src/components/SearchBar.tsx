import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchReducer } from "../store/actionCreators";

const SearchBarStyled = styled.label`
  display: inline-flex;
  background: var(--black);
  border: 1px solid var(--white);
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  padding: 0 2rem;
  border-radius: 5px;
  width: 100%;
  flex: 1;
  color: var(--white);
  margin-top: 10px;
  i {
    margin-right: 1em;
  }
  input {
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: 0.7em;
    background: var(--black);
    outline: 0;
    color: var(--white);
    &::-webkit-input-placeholder {
      color: var(--white);
    }
  }
`;

function SearchBar({ ...props }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(searchReducer(e.target.value));
  };
  return (
    <SearchBarStyled>
      {inputValue && <i className="fas fa-times close"></i>}
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Buscar: artista, album, canción"
        {...props}
        onChange={search}
        value={inputValue}
      />
    </SearchBarStyled>
  );
}

export default SearchBar;
