import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchReducer, filterReducer } from "../store/actionCreators";
import { Dispatch } from "redux";
import apiService from "../api/api-service";
import { debounce } from "lodash";

const SearchBarStyled = styled.label`
  display: inline-flex;
  background: var(--black);
  border: 1px solid var(--white);
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  padding: 0 2rem;
  border-radius: 5px;
  width: 90%;
  flex: 1;
  color: var(--white);
  margin-top: 10px;
  i {
    margin-right: 1em;
    cursor: pointer;
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
  const dispatch: Dispatch<any> = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const debouncedSearch = React.useRef(
    debounce(async (keyword) => {
      const response = await apiService.combinedSearch(keyword);
      const albums = response.data.albums.items.map((resultItem: Result) => {
        return {
          id: resultItem.id,
          name: resultItem.name,
          image: resultItem.images[1].url,
        };
      });
      const artists = response.data.artists.items.map((resultItem: Result) => {
        return {
          id: resultItem.id,
          name: resultItem.name,
          image: resultItem.images[0]?.url,
        };
      });

      const songs = response.data.tracks.items.map((resultItem: Result) => {
        return {
          id: resultItem.id,
          name: resultItem.name,
          image: resultItem.preview_url,
        };
      });

      dispatch(searchReducer(keyword, albums, artists, songs));
      if (keyword) {
        dispatch(filterReducer("bestMatch"));
      } else {
        dispatch(filterReducer("history"));
      }
    }, 300)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setInputValue("");
    dispatch(searchReducer(""));
    dispatch(filterReducer("history"));
  };
  return (
    <SearchBarStyled>
      {inputValue && (
        <i onClick={handleClick} className="fas fa-times close"></i>
      )}
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Buscar: artista, album, canción"
        {...props}
        onChange={handleChange}
        value={inputValue}
      />
    </SearchBarStyled>
  );
}

export default SearchBar;
