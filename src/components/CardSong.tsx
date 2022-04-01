import React from "react";
import styled from "styled-components";
import apiService from "../api/api-service";
type CardProps = {
  result: Result;
};
const CardStyled = styled.div`
  cursor: pointer;
  &:hover {
    background-color: var(--green);
    color: white;
  }
  background: var(--black);
  text-align: left;
  border-radius: 900px;
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
  .bottom {
    border: 2px solid var(--black);
    background: var(--white);
    border-radius: 900px;
    color: var(--black);
    padding: 4px;
  }
`;
function Card({ result }: CardProps) {
  let audio = new Audio(result.image);
  const start = async (e: any) => {
    audio.play();
    await apiService.postHistory(JSON.stringify(result));
  };
  return (
    <CardStyled>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/98/98690.png"
          onClick={start}
        />
        <div className="bottom">
          <h2>{result.name}</h2>
        </div>
      </div>
    </CardStyled>
  );
}

export default Card;
