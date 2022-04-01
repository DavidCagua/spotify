import React from "react";
import styled from "styled-components";
import CardAlbum from "./CardAlbum";
import CardSong from "./CardSong";
import CardArtist from "./CardAtist";
type ResultComponentProps = {
  payload: Result[];
  type: "album" | "song" | "artist";
};
const ResultComponentStyled = styled.div`
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
function ResultComponent({ payload = [], type }: ResultComponentProps) {
  return (
    <ResultComponentStyled>
      {payload.length > 0 ? (
        payload.map((result) => {
          switch (type) {
            case "album":
              return <CardAlbum result={result} />;
            case "artist":
              return <CardArtist result={result} />;
            case "song":
              return <CardSong result={result} />;
          }
        })
      ) : (
        <h1>No hay resultados.</h1>
      )}
    </ResultComponentStyled>
  );
}

export default ResultComponent;
