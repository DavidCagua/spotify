import React, { useState } from "react";
import styled from "styled-components";

const SearchBarStyled = styled.label`
  display: inline-flex;
  background: var(--white);
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  padding: 0 2rem;
  border-radius: 5px;
  flex: 1;
  i {
    margin-right: 1em;
    color: #c4c4c4;
  }
  input {
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: 0.7em;
    background: var(--white);
    outline: 0;
    color: var(--black);
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
`;

function SearchBar({ ...props }) {
  const [inputValue, setInputValue] = useState("");
  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <SearchBarStyled>
      {inputValue && <i className="fas fa-times close"></i>}
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="hola"
        {...props}
        onChange={search}
        value={inputValue}
      />
    </SearchBarStyled>
  );
}

export default SearchBar;
