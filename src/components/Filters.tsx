import React from "react";
import styled from "styled-components";
import Button from "./Button";

const FiltersStyled = styled.div`
  display: flex;
`;
function Filters() {
  return (
    <FiltersStyled>
      <Button>{"Mejores resultados"}</Button>
      <Button>{"Artista"}</Button>
      <Button>{"Album"}</Button>
      <Button>{"Cancion"}</Button>
      <Button>{"Historial"}</Button>
    </FiltersStyled>
  );
}

export default React.memo(Filters);
