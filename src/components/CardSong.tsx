import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import apiService from "../api/api-service";
import { setHistory } from "../store/actionCreators";

type CardSongProps = {
  result: Result;
};
const CardSongStyled = styled.div`
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
    font-size: 16px;
    padding: 8px;
    text-align: center;
    font-weight: 700;
  }
  .bottom {
    border: 2px solid var(--black);
    background: var(--white);
    border-radius: 900px;
    color: var(--black);
  }
`;
function CardSong({ result }: CardSongProps) {
  const dispatch: Dispatch<any> = useDispatch();

  let audio = new Audio(result.image);
  const start = async () => {
    audio.play();
    result.date = Date.now();
    const response = await apiService.postHistory(JSON.stringify(result));
    dispatch(setHistory(response.data));
  };
  return (
    <CardSongStyled>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/98/98690.png"
          onClick={start}
        />
        <div className="bottom">
          <h2>{result.name}</h2>
        </div>
      </div>
    </CardSongStyled>
  );
}

export default React.memo(CardSong);
