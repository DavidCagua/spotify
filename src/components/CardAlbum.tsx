import React from "react";
import styled from "styled-components";
type CardAlbumProps = {
  result: Result;
};
const CardAlbumStyled = styled.div`
  background: var(--black);
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 1);
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    vertical-align: top;
  }
  h2 {
    margin: 0 10px;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
`;
function CardAlbum({ result }: CardAlbumProps) {
  return (
    <CardAlbumStyled>
      <div>
        <img src={result.image} alt="" />
        <h2>{result.name}</h2>
      </div>
    </CardAlbumStyled>
  );
}

export default React.memo(CardAlbum);
