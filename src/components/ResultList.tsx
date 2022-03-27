import React from "react";
import styled from "styled-components";
import Card from "./Card";
type ResultListProps = {
  resultsa?: any;
};
const ResultListStyled = styled.div``;
function ResultList({ resultsa }: ResultListProps) {
  if (resultsa) {
    console.log("hola");
    return (
      <div>
        {resultsa.map((result: any) => {
          return <Card>{result}</Card>;
        })}
      </div>
    );
  }
  return <h1>nada</h1>;
}

export default ResultList;
