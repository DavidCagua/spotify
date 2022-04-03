import React from "react";
import styled from "styled-components";
import ResultComponent from "./ResultComponent";
type ResultListProps = ResultState;
const ResultListStyled = styled.div`
  width: 100%;
  h1 {
    margin-left: 3rem;
  }
`;
function ResultList({
  albums,
  artists,
  songs,
  history,
  filter = "history",
}: ResultListProps) {
  return (
    <ResultListStyled>
      {(filter === "album" || filter === "bestMatch") && (
        <>
          <h1>Albums</h1>
          <ResultComponent payload={albums} type={"album"} />
        </>
      )}

      {(filter === "artist" || filter === "bestMatch") && (
        <>
          <h1>Artistas</h1>
          <ResultComponent payload={artists} type={"artist"} />
        </>
      )}

      {(filter === "song" || filter === "bestMatch") && (
        <>
          <h1>Canciones</h1>
          <ResultComponent payload={songs} type={"song"} />
        </>
      )}

      {filter === "history" && (
        <>
          <h1>Historial</h1>
          <ResultComponent payload={history} type={"song"} />
        </>
      )}
    </ResultListStyled>
  );
}

export default React.memo(ResultList);
