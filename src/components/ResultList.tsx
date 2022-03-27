import React from "react";
import styled from "styled-components";
import Card from "./Card";
type ResultListProps = {
  resultsa?: any;
};
const ResultListStyled = styled.div`
  display: grid;
  grid-auto-flow: columns;
  grid-template-columns: repeat(auto-fill, 264px);
  grid-column-gap: 70px;
  grid-row-gap: 2.3em;
  background: white;
  width: 100%;
  justify-content: center;
  background: var(--background);
`;
function ResultList({ resultsa }: ResultListProps) {
  return (
    <ResultListStyled>
      {resultsa.length > 0 ? (
        resultsa.map((result: any) => {
          return <Card>{result}</Card>;
        })
      ) : (
        <h1>Cargando ...</h1>
      )}
    </ResultListStyled>
  );
}

export default ResultList;
