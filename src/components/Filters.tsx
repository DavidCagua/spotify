import React from "react";
import styled from "styled-components";
const FiltersStyled = styled.div`
  display: flex;
  button {
    cursor: pointer;
    background: var(--green);
    color: white;
    border-radius: 10px;
    border: 1px solid var(--white);
    margin: 20px 10px;
    padding: 5px;
  }
`;
function Filters() {
  return (
    <FiltersStyled>
      <button>Mejores Resultados</button>
      <button>Album</button>
      <button>Artista</button>
      <button>Canción</button>
    </FiltersStyled>
  );
}

export default Filters;
